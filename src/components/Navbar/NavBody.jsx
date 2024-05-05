import React, { useState } from "react";
import NavListMobile from "./NavListMobile";
import NavListDesktop from "./NavListDesktop";
import NavHamburgerButton from "./NavHamburgerButton";
import ImageLogo from "../../assets/logo.webp";
import { Link } from "react-router-dom";

export default function NavBody() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleHamburgerBtn = () => {
		setIsOpen(!isOpen);
	};

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

	return (
		<div>
			<nav className="fixed top-0 left-0 w-full bg-primary py-3 px-4 z-50 shadow-md">
				<div className="max-w-7xl flex items-center justify-between ">
					<Link to="/">
						<img src={ImageLogo} alt="Logo Bezzie" width={50} />
					</Link>
					<NavHamburgerButton onClick={toggleHamburgerBtn} isOpen={isOpen} />
					<NavListMobile type={type} items={listNavItems} isOpen={isOpen} />
					<NavListDesktop type={type} items={listNavItems} />
				</div>
			</nav>
		</div>
	);
}
