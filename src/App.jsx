import axios from "axios";

import { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

import "./App.css";

function App() {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [cart, setCart] = useState({
		checkout: 0.0,
		mealsCart: [
			// {
			// 	id: "4564161",
			// 	title: "premier",
			// 	price: "25.00",
			// 	quantity: 2,
			// },
			// {
			// 	id: "dqsdqsdqsdqsd",
			// 	title: "second",
			// 	price: "15.00",
			// 	quantity: 1,
			// },
			// {
			// 	id: "dqsdqsdqsdqdqsdqsdqzjkkqsd",
			// 	title: "troisième",
			// 	price: "10.00",
			// 	quantity: 3,
			// },
			// {
			// 	id: "dqsdqsjhgjjjkkkdqsdqsd",
			// 	title: "quatrième",
			// 	price: "5.00",
			// 	quantity: 1,
			// },
		],
	});

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://site--deliver-exercise--spyfkvx5gdbh.code.run/"
			);
			setData(response.data);

			setIsLoading(false);
		};

		fetchData();
	}, []);

	return (
		<>
			{isLoading === true ? (
				<div>
					<h1>Chargement en cours...</h1>
				</div>
			) : (
				<>
					<Header />
					<Main data={data} cart={cart} setCart={setCart} />
				</>
			)}
		</>
	);
}

export default App;
