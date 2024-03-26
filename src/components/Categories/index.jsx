import Category from "../Category";

import "./categories.css";

const Categories = ({ categories, cart, setCart }) => {
	return (
		<>
			<div id="categories">
				{/* Render a component Category
				for each meals category
				only if there is at least one meal in the category */}
				{categories.map((categ) => {
					if (categ.meals.length > 0) {
						return (
							<div key={categ.name}>
								<Category categ={categ} cart={cart} setCart={setCart} />
							</div>
						);
					}
					return null;
				})}
			</div>
		</>
	);
};

export default Categories;
