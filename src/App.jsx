import axios from "axios";

import { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

import "./App.css";

function App() {
	return (
		<>
			<Header />
			<Main />
		</>
	);
}

export default App;
