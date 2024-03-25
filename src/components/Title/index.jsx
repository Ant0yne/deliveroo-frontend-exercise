import "./title.css";

const Title = ({ restaurant }) => {
	return (
		<>
			<section id="title">
				<div className="container">
					<div>
						<img src={restaurant.picture} alt="Repas au Pain Quotidien" />
					</div>
					<div>
						<h1>{restaurant.name}</h1>
						<p>{restaurant.description}</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Title;
