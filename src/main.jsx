import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./css/index.css";

import About from "./pages/Information/About.jsx";
import Rules from "./pages/Information/Rules.jsx";
import Faq from "./pages/Information/faq.jsx";
import PriceListBody from "./pages/Pricelist/PriceListBody.jsx";
import FacilityBody from "./pages/Facility/FacilityBody.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/about" element={<About />} />
				<Route path="/pricelist" element={<PriceListBody />} />
				<Route path="/facility" element={<FacilityBody />} />
				<Route path="/rules" element={<Rules />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
