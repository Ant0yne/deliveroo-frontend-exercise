import "./title.css";

const Title = ({ restaurant }) => {
	return (
		<>
			<section id="title">
				<img src={restaurant.picture} alt="Repas au Pain Quotidien" />
				<div>
					<h1>{restaurant.name}</h1>
					<p>{restaurant.description}</p>
				</div>
			</section>
		</>
	);
};

export default Title;
