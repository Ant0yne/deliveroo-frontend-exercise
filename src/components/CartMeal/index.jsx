import "./cartMeal.css";

const CartMeal = ({ checkout, mealsCart, mealCart, setCart, setIsCart }) => {
	const handleClickAddSub = (btn) => {
		if (btn === "sub") {
			const tempCart = [...mealsCart];
			let tempCheckout = checkout;
			const num = mealCart.price;
			num.toFixed(1);

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

				const index = tempCart.map((temp) => temp.id).indexOf(mealCart.id);
				tempCart.splice(index, 1);

				if (tempCart.length <= 0) {
					tempCheckout = 0.0;
					setIsCart(false);
					setCart({
						checkout: 0.0,
						mealsCart: tempCart,
					});
				} else {
					tempCheckout -= num * mealCart.quantity;
					setCart({
						checkout: tempCheckout,
						mealsCart: tempCart,
					});
				}
			}
		} else if (btn === "add") {
			const tempCart = [...mealsCart];
			let tempCheckout = checkout;

			const num = mealCart.price;
			num.toFixed(1);

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
		}
	};

	return (
		<>
			<div className="cart-meal">
				<div>
					<button
						onClick={() => {
							handleClickAddSub("sub");
						}}>
						<i className="icon-minus"></i>
					</button>
					<p>{mealCart.quantity}</p>
					<button
						onClick={() => {
							handleClickAddSub("add");
						}}>
						<i className="icon-plus"></i>
					</button>
				</div>
				<p>{mealCart.title}</p>
				<p>{mealCart.price * mealCart.quantity} €</p>
			</div>
		</>
	);
};

export default CartMeal;
