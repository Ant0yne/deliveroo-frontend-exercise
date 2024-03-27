import axios from "axios";

import { useState, useEffect } from "react";

import Loading from "./components/Loading";
import Header from "./components/Header";
import Main from "./components/Main";

import "./App.css";

function App() {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	//OBJECT -> all the item in the shooping cart + the total amount
	const [cart, setCart] = useState({
		checkout: 0,
		mealsCart: [],
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
				<Loading />
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
