import Meal from "../Meal";

import "./category.css";

const Category = ({ categ }) => {
	return (
		<>
			<h3>{categ.name}</h3>
			{categ.meals.map((meal) => {
				return (
					<div key={meal.id}>
						<Meal meal={meal} />
					</div>
				);
			})}
		</>
	);
};

export default Category;
