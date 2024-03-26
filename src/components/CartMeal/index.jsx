import "./cartMeal.css";

const CartMeal = ({ checkout, mealsCart, mealCart, setCart }) => {
	return (
		<>
			<div className="cart-meal">
				<div>
					<button
						onClick={() => {
							const tempCart = [...mealsCart];
							let tempCheckout = checkout;

							if (mealCart.quantity > 1) {
								tempCart.map((temp) => {
									if (temp.id === mealCart.id) {
										return (temp.quantity -= 1);
									} else {
										return null;
									}
								});
								tempCheckout -= mealCart.price;

								setCart({
									checkout: tempCheckout,
									mealsCart: tempCart,
								});
							} else {
								tempCheckout -= mealCart.price * mealCart.quantity;
								const index = tempCart
									.map((temp) => temp.id)
									.indexOf(mealCart.id);
								tempCart.splice(index, 1);
								setCart({
									checkout: tempCheckout,
									mealsCart: tempCart,
								});
							}
						}}>
						-
					</button>
					<p>{mealCart.quantity}</p>
					<button
						onClick={() => {
							const tempCart = [...mealsCart];
							let tempCheckout = checkout;

							tempCart.map((temp) => {
								if (temp.id === mealCart.id) {
									return (temp.quantity += 1);
								} else {
									return null;
								}
							});

							tempCheckout += Number(mealCart.price);

							setCart({
								checkout: tempCheckout,
								mealsCart: tempCart,
							});
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
