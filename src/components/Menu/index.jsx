import Categories from "../Categories";
import ShoppingCart from "../ShoppingCart";

import "./menu.css";

const Menu = ({ categories }) => {
	return (
		<>
			<section id="categ-cart">
				<div className="container">
					<Categories categories={categories} />
					<ShoppingCart />
				</div>
			</section>
		</>
	);
};

export default Menu;
