import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";
import ImageLogo from "../../assets/logo.webp";

export default function NavListDesktop({ type, items }) {
	return (
		<motion.nav className="fixed top-0 left-0 w-full bg-primary py-3 px-4 z-50 shadow-md">
			<div className="max-w-7xl flex items-center justify-between ">
				<Link to="/">
					<img src={ImageLogo} alt="Logo Bezzie" width={50} />
				</Link>

				<div className="hidden lg:flex gap-5 justify-between">
					<NavigationBar items={items} type={type} />
				</div>
			</div>
		</motion.nav>
	);
}
