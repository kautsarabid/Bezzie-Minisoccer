import React, { useState, useEffect } from "react";
import NavListMobile from "./NavListMobile";
import NavListDesktop from "./NavListDesktop";

import { useCycle } from "framer-motion";

export default function NavBody() {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	let type = "default";
	if (
		location.pathname === "/about" ||
		location.pathname === "/rules" ||
		location.pathname === "/faq"
	) {
		type = "special";
	}

	const listNavItems = [
		{ label: "Home", url: "#" },
		{ label: "Service", url: "#service" },
		{ label: "Facility", url: "#facility" },
		{ label: "Pricelist", url: "#pricelist" },
		{ label: "Gallery", url: "#gallery" },
		{ label: "Contact", url: "#contact" },
	];

	if (isMobile) {
		return (
			<NavListMobile
				type={type}
				items={listNavItems}
				isOpen={isOpen}
				onClick={() => toggleOpen()}
			/>
		);
	} else {
		return <NavListDesktop type={type} items={listNavItems} />;
	}
}
