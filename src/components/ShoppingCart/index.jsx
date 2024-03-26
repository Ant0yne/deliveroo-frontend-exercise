import { useState } from "react";

import CartMeal from "../CartMeal";

import "./shoppingCart.css";

const ShoppingCart = ({ cart, setCart }) => {
	const [isCart, setIsCart] = useState(false);
	const { checkout, mealsCart } = cart;
	const deliveryCost = 2.5;

	let totalMeals = 0.0;

	if (mealsCart.length > 0) {
		mealsCart.map((meal) => {
			totalMeals += meal.quantity;
		});
	}

	return (
		<>
			<div id="cart">
				{mealsCart.length > 0 ? (
					isCart ? (
						<>
							<div id="cart-visible">
								<div>
									<button onClick={() => setIsCart(false)}>X</button>
								</div>
								<div>
									{mealsCart.map((mealCart) => {
										return (
											<CartMeal
												key={mealCart.id}
												checkout={checkout}
												mealsCart={mealsCart}
												mealCart={mealCart}
												setCart={setCart}
												setIsCart={setIsCart}
											/>
										);
									})}
								</div>

								<div>
									<div className="sub-total-delivery">
										<p>Sous-total</p>
										<p>{checkout} €</p>
									</div>
									<div className="sub-total-delivery">
										<p>Frais de livraison</p>
										<p>{deliveryCost} €</p>
									</div>
								</div>
								<div className="sub-total-delivery">
									<h3>Total</h3>
									<h3>{checkout + deliveryCost} €</h3>
								</div>
								<form
									onSubmit={(e) => {
										e.preventDefault();
									}}>
									<input type="submit" value="Valider ma commande" />
								</form>
							</div>
						</>
					) : (
						<>
							<div id="item-in-cart">
								<button onClick={() => setIsCart(true)}>
									<div id="cart-resume">
										<p>{totalMeals}</p>
										<p>Voir le panier</p>
										<p>{checkout} €</p>
									</div>
								</button>
							</div>
						</>
					)
				) : (
					<>
						<div id="cart-hidden">
							<div id="empty-cart">
								<p>Voir le panier vide</p>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default ShoppingCart;
