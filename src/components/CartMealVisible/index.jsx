import CartMeal from "../CartMeal";

import "./cartMealVisible.css";

const CartMealVisible = ({
	deliveryCost,
	mealsCart,
	checkout,
	setCart,
	setIsCart,
}) => {
	return (
		<>
			<div id="cart-visible">
				<div id="list-meal">
					<div className="hidden">
						<button onClick={() => setIsCart(false)}>X</button>
					</div>
					<div>
						{/* display all the meals and their info in the cart */}
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
	);
};

export default CartMealVisible;
