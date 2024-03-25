import Meal from "../Meal";

import "./category.css";

const Category = ({ categ }) => {
	return (
		<>
			<h2>{categ.name}</h2>
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
