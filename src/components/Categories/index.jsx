import Category from "../Category";

import "./categories.css";

const Categories = ({ categories }) => {
	return (
		<>
			<div>
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
				})}
			</div>
		</>
	);
};

export default Categories;
