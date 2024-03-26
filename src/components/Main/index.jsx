import Title from "../Title";
import Menu from "../Menu";

import "./main.css";

const Main = ({ data, cart, setCart }) => {
	const { restaurant, categories } = data;

	return (
		<>
			<main>
				<div>
					<Title restaurant={restaurant} />
				</div>
				<Menu categories={categories} cart={cart} setCart={setCart} />
			</main>
		</>
	);
};

export default Main;
