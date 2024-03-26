import "./shoppingCart.css";

import CartMeal from "../CartMeal";

const ShoppingCart = ({ cart, setCart }) => {
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
					<div>
						<p>Sous-total</p>
						<p>{checkout - deliveryCost}</p>
					</div>
					<div>
						<p>Frais de livraison</p>
						<p>{deliveryCost}</p>
					</div>
				</div>
				<div>
					<h3>Total</h3>
					<h3>{checkout}</h3>
				</div>
				<form>
					<input type="submit" value="Afficher mon panier" />
				</form>
			</div>
		</>
	);
};

export default ShoppingCart;
