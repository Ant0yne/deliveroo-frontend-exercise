import Meal from "../Meal";

import "./category.css";

const Category = ({ categ, cart, setCart }) => {
	return (
		<>
			<h2>{categ.name}</h2>
			<div className="meals">
				{categ.meals.map((meal) => {
					return (
						<div key={meal.id} className="meal">
							<Meal meal={meal} cart={cart} setCart={setCart} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Category;
