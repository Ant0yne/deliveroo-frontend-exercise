import Title from "../Title";
import Menu from "../Menu";

import "./main.css";

const Main = ({ data }) => {
	const { restaurant, categories } = data;

	return (
		<>
			<main>
				<div>
					<Title restaurant={restaurant} />
				</div>
				<Menu categories={categories} />
			</main>
		</>
	);
};

export default Main;
