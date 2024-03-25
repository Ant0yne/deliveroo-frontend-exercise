import Meal from "../Meal";

import "./category.css";

const Category = ({ categ }) => {
	return (
		<>
			<h2>{categ.name}</h2>
			<div className="meals">
				{categ.meals.map((meal) => {
					return (
						<div key={meal.id} className="meal">
							<Meal meal={meal} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Category;
