import "./cartMeal.css";

const CartMeal = ({ checkout, mealsCart, mealCart, setCart }) => {
	return (
		<>
			<div className="cart-meal">
				<div>
					<button
						onClick={() => {
							if (mealCart.quantity > 1) {
								const tempCart = [...mealsCart];
								tempCart.map((temp) => {
									if (temp.id === mealCart.id) {
										temp.quantity -= 1;
									}
								});
								setCart({
									checkout: checkout,
									mealsCart: tempCart,
								});
							}
						}}>
						-
					</button>
					<p>{mealCart.quantity}</p>
					<button
						onClick={() => {
							if (mealCart.quantity >= 1) {
								const tempCart = [...mealsCart];
								tempCart.map((temp) => {
									if (temp.id === mealCart.id) {
										temp.quantity += 1;
									}
								});
								setCart({
									checkout: checkout,
									mealsCart: tempCart,
								});
							}
						}}>
						+
					</button>
				</div>
				<p>{mealCart.title}</p>
				<p>{mealCart.price * mealCart.quantity} €</p>
			</div>
		</>
	);
};

export default CartMeal;
