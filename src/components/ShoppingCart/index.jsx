import { useState } from "react";

import CartMeal from "../CartMeal";

import "./shoppingCart.css";

const ShoppingCart = ({ cart, setCart }) => {
	const [] = useState;
	const { checkout, mealsCart } = cart;
	const deliveryCost = 2.5;

	return (
		<>
			<div id="cart">
				<button>X</button>
				<div>
					{mealsCart.map((mealCart) => {
						return (
							<CartMeal
								key={mealCart.id}
								checkout={checkout}
								mealCart={mealCart}
								setCart={setCart}
							/>
						);
					})}
				</div>

				<div>
					<div className="sub-total-delivery">
						<p>Sous-total</p>
						<p>{checkout - deliveryCost} €</p>
					</div>
					<div className="sub-total-delivery">
						<p>Frais de livraison</p>
						<p>{deliveryCost} €</p>
					</div>
				</div>
				<div className="sub-total-delivery">
					<h3>Total</h3>
					<h3>{checkout} €</h3>
				</div>
				<form>
					<input type="submit" value="Valider ma commande" />
				</form>
			</div>
		</>
	);
};

export default ShoppingCart;
