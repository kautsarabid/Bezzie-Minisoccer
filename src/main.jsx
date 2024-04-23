import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";

import HeroBody from "./pages/Hero/HeroBody.jsx";
import About from "./pages/Information/About.jsx";
import Rules from "./pages/Information/Rules.jsx";

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
		path: "/rules",
		element: <Rules />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
