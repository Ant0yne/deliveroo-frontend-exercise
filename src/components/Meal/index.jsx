import "./meal.css";

const Meal = ({ meal, cart, setCart }) => {
	const { checkout, mealsCart } = cart;

	/**
	 * function to handle when click on any meal
	 *
	 * if the meal is not in the shopping cart yet (check by id)
	 * create a new meal object in the state cart.mealsCart
	 * add the price to the state cart.checkout
	 *
	 * else add 1 to quantity key for the meal in the array in the state cart.mealsCart[]
	 * add the price to the state cart.checkout
	 *
	 */
	const handleClickMeal = () => {
		const tempCart = [...mealsCart];
		let tempCheckout = checkout;

		// check if there is an object with the meal id in cart.mealsCart
		const found = tempCart.find((mc) => mc.id === meal.id);

		// if there is one
		if (found) {
			found.quantity += 1;

			const num = tempCheckout + found.price;

			tempCheckout = Number(num.toFixed(2));

			setCart({
				checkout: tempCheckout,
				mealsCart: tempCart,
			});
			// if there is not
		} else {
			const tempPrice = Number(meal.price.replace(",", "."));

			tempCart.push({
				id: meal.id,
				title: meal.title,
				price: tempPrice,
				quantity: 1,
			});

			const num = tempCheckout + tempPrice;

			tempCheckout = Number(num.toFixed(2));
			setCart({
				checkout: tempCheckout,
				mealsCart: tempCart,
			});
		}
	};

	return (
		<>
			<button onClick={handleClickMeal}>
				<div className="in-meal">
					<div>
						<h3>{meal.title}</h3>
						<p>{meal.description}</p>
						<div className="price">
							<span>{meal.price} €</span>
							{/* check if there is key popular in the data for the meal */}
							{meal.popular && (
								<p>
									<i className="icon-STAR_FILL"></i> Populaire
								</p>
							)}
						</div>
					</div>
					{/* check if there is key picture in the data for the meal */}
					{meal.picture && (
						<div>
							<img src={meal.picture} alt={meal.title} />
						</div>
					)}
				</div>
			</button>
		</>
	);
};

export default Meal;
