import "./meal.css";

const Meal = ({ meal, cart, setCart }) => {
	const { checkout, mealsCart } = cart;

	return (
		<>
			<button
				onClick={() => {
					const tempCart = [...mealsCart];
					let tempCheckout = checkout;

					const index = tempCart.map((mc) => mc.id).indexOf(meal.id);

					if (index !== -1) {
						tempCart[index].quantity += 1.0;
						const num = parseFloat(tempCart[index].price);
						num.toFixed(1);

						console.log(num);
						console.log(cart);

						tempCheckout += num;

						setCart({
							checkout: tempCheckout,
							mealsCart: tempCart,
						});
					} else {
						const num = parseFloat(meal.price);
						num.toFixed(1);

						console.log(num);
						tempCart.push({
							id: meal.id,
							title: meal.title,
							price: num,
							quantity: 1.0,
						});

						tempCheckout += num;

						setCart({
							checkout: tempCheckout,
							mealsCart: tempCart,
						});
					}
				}}>
				<div>
					<h3>{meal.title}</h3>
					<p>{meal.description}</p>
					<div className="price">
						<span>{meal.price} €</span>
						{meal.popular && (
							<p>
								<i className="icon-STAR_FILL"></i> Populaire
							</p>
						)}
					</div>
				</div>
				{meal.picture && (
					<div>
						<img src={meal.picture} alt={meal.title} />
					</div>
				)}
			</button>
		</>
	);
};

export default Meal;
