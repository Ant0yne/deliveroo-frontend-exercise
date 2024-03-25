import Title from "../Title";
import Menu from "../Menu";

import "./main.css";

const Main = ({ data }) => {
	const { restaurant, categories } = data;

	return (
		<>
			<main>
				<Title restaurant={restaurant} />
				<Menu categories={categories} />
			</main>
		</>
	);
};

export default Main;
