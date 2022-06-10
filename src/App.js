import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckNIN from "./Auth/CheckNIN";
import Header from "./Auth/Header";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<CheckNIN />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
