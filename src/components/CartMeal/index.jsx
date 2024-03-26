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
							const num = mealCart.price;
							num.toFixed(1);
							console.log(num);

							if (mealCart.quantity > 1) {
								tempCart.map((temp) => {
									if (temp.id === mealCart.id) {
										return (temp.quantity -= 1.0);
									} else {
										return null;
									}
								});
								tempCheckout -= num;

								setCart({
									checkout: tempCheckout,
									mealsCart: tempCart,
								});
							} else {
								const num = mealCart.price;
								num.toFixed(1);

								if (mealsCart.length <= 0) {
									console.log("raz");
									tempCheckout = 0.0;
								} else {
									tempCheckout -= num * mealCart.quantity;
								}
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

							const num = mealCart.price;
							num.toFixed(1);
							console.log(num);

							tempCart.map((temp) => {
								if (temp.id === mealCart.id) {
									return (temp.quantity += 1.0);
								} else {
									return null;
								}
							});

							tempCheckout += num;

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
