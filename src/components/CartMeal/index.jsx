import "./cartMeal.css";

const CartMeal = ({ checkout, mealsCart, mealCart, setCart, setIsCart }) => {
	/**
	 *
	 * @param {String} btn
	 * "sub" or "add"
	 *
	 * if "sub"
	 * check if there is more than one of the meal in cart
	 * if there is
	 * remove one
	 * sub the price from the checkount amount
	 * if there is not
	 * delete the meal from the cart by removing the object with the same id from the state cart.mealsCart
	 *
	 * if "add"
	 * add one to the quantity of the meal in cart
	 * add the price from the checkount amount
	 *
	 */
	const handleClickAddSub = (btn) => {
		if (btn === "sub") {
			const tempCart = [...mealsCart];
			let tempCheckout = checkout;

			// there is more than one of the meal quantity
			// add one of the meal with same id and add price to checkout
			if (mealCart.quantity > 1) {
				tempCart.map((temp) => {
					if (temp.id === mealCart.id) {
						return (temp.quantity -= 1);
					} else {
						return null;
					}
				});
				const num = tempCheckout - mealCart.price;

				tempCheckout = Number(num.toFixed(2));

				setCart({
					checkout: tempCheckout,
					mealsCart: tempCart,
				});
				// there is only one quantity of this meal with this id in cart
			} else {
				// remove the meal from the state
				const index = tempCart.map((temp) => temp.id).indexOf(mealCart.id);
				tempCart.splice(index, 1);

				// if there is no more meal in the state
				// re-init the state
				// hide the cart
				if (tempCart.length <= 0) {
					tempCheckout = 0;
					setIsCart(false);
					setCart({
						checkout: 0,
						mealsCart: tempCart,
					});
					// if there is other meals in cart
					// recalculate the checkout
				} else {
					const num = tempCheckout - mealCart.price;
					tempCheckout = Number(num.toFixed(2));

					setCart({
						checkout: tempCheckout,
						mealsCart: tempCart,
					});
				}
			}
		} else if (btn === "add") {
			const tempCart = [...mealsCart];
			let tempCheckout = checkout;

			// add one to the meal quantity in cart
			// add the price to the checkout
			tempCart.map((temp) => {
				if (temp.id === mealCart.id) {
					return (temp.quantity += 1);
				} else {
					return null;
				}
			});

			const num = tempCheckout + mealCart.price;

			tempCheckout = Number(num.toFixed(2));

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
				<p>{Number((mealCart.price * mealCart.quantity).toFixed(2))} €</p>
			</div>
		</>
	);
};

export default CartMeal;
