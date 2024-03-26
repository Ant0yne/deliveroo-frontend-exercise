import Categories from "../Categories";
import ShoppingCart from "../ShoppingCart";

import "./menu.css";

const Menu = ({ categories, cart, setCart }) => {
	return (
		<>
			<section id="categ-cart">
				<div className="container">
					<div id="menu">
						<Categories categories={categories} cart={cart} setCart={setCart} />
						<ShoppingCart cart={cart} setCart={setCart} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Menu;
