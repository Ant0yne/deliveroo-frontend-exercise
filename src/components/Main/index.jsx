import Title from "../Title";
import Menu from "../Menu";

import "./main.css";

const Main = ({ data }) => {
	const { restaurant, categories } = data;

	return (
		<>
			<main>
				<div className="container">
					<Title restaurant={restaurant} />
					<Menu categories={categories} />
				</div>
			</main>
		</>
	);
};

export default Main;
