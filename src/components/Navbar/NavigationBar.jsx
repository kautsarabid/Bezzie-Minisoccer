import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: 100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const NavigationBar = ({ type, items }) => {
	if (type == "special") {
		return (
			<Link
				variants={variants}
				to="/"
				className="block px-4 py-3 text-xl text-white  lg:border lg:rounded-xl font-semibold lg:hover:bg-secondary  transition-all duration-300"
			>
				Back To Home
			</Link>
		);
	} else {
		return items.map((item, index) => (
			<motion.a
				variants={variants}
				className="block px-4 py-4 text-white hover:text-gray-300 font-base"
				key={index}
				href={item.url}
			>
				{item.label}
			</motion.a>
		));
	}
};

export default NavigationBar;
