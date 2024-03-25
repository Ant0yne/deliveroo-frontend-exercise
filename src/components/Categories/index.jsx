import Category from "../Category";

import "./categories.css";

const Categories = ({ categories }) => {
	return (
		<>
			<div id="categories">
				{categories.map((categ) => {
					if (categ.meals.length > 0) {
						return (
							<>
								<div key={categ.name}>
									<Category categ={categ} />
								</div>
							</>
						);
					}
					return null;
				})}
			</div>
		</>
	);
};

export default Categories;
