import React, { useState } from "react";
import NavListMobile from "./NavListMobile";
import NavListDesktop from "./NavListDesktop";
import NavHamburgerButton from "./NavHamburgerButton";

export default function NavBody({ logo }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleHamburgerBtn = () => {
		setIsOpen(!isOpen);
	};

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
			<nav className="fixed w-full bg-primary py-3 px-4 z-50 shadow-md">
				<div className="max-w-7xl flex items-center justify-between ">
					<a href="/">
						<img src={logo} alt="Logo Bezzie" width={50} />
					</a>
					<NavHamburgerButton onClick={toggleHamburgerBtn} isOpen={isOpen} />
					<NavListMobile items={listNavItems} isOpen={isOpen} />
					<NavListDesktop items={listNavItems} />
				</div>
			</nav>
		</div>
	);
}
