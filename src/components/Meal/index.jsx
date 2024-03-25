import "./meal.css";

const Meal = ({ meal }) => {
	return (
		<>
			<div>
				<h3>{meal.title}</h3>
				<p>{meal.description}</p>
				<div className="price">
					<span>{meal.price} €</span>
					{meal.popular && (
						<p>
							<i className="icon-STAR_FILL"></i>Populaire
						</p>
					)}
				</div>
			</div>
			{meal.picture && <img src={meal.picture} alt={meal.title} />}
		</>
	);
};

export default Meal;
