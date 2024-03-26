import { useState, useEffect, useRef } from "react";

import CartMeal from "../CartMeal";

import "./shoppingCart.css";

function getWindowSize() {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
}

const ShoppingCart = ({ cart, setCart }) => {
	const [isCart, setIsCart] = useState(false);
	const [windowSize, setWindowSize] = useState(getWindowSize());

	const { checkout, mealsCart } = cart;

	const mediaQuery768 = 768;
	const deliveryCost = 2.5;

	let totalMeals = 0.0;

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

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
								<div id="list-meal">
									<div className="hidden">
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
										<p>Total</p>
										<p>{checkout + deliveryCost} €</p>
									</div>
								</div>
								<form
									onSubmit={(e) => {
										e.preventDefault();
									}}>
									<input type="submit" value="Valider ma commande" />
								</form>
							</div>
						</>
					) : windowSize.innerWidth < mediaQuery768 ? (
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
					) : (
						setIsCart(true)
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
