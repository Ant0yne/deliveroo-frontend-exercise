import Categories from "../Categories";
import ShoppingCart from "../ShoppingCart";

import "./menu.css";

const Menu = ({ categories }) => {
	return (
		<>
			<section id="categ-cart">
				<Categories categories={categories} />
				<ShoppingCart />
			</section>
		</>
	);
};

export default Menu;
