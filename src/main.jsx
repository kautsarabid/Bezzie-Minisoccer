import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";

import About from "./pages/Information/About.jsx";
import Rules from "./pages/Information/Rules.jsx";
import Faq from "./pages/Information/faq.jsx";
import PriceListBody from "./pages/Pricelist/PriceListBody.jsx";
import FacilityBody from "./pages/Facility/FacilityBody.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/pricelist",
		element: <PriceListBody />,
	},
	{
		path: "/fasilitas",
		element: <FacilityBody />,
	},
	{
		path: "/rules",
		element: <Rules />,
	},
	{
		path: "/faq",
		element: <Faq />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
