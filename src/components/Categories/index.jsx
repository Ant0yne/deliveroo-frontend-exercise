import Category from "../Category";

import "./categories.css";

const Categories = ({ categories, cart, setCart }) => {
	return (
		<>
			<div id="categories">
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
