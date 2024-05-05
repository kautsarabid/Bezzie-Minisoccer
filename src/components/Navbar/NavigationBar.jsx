import { Link } from "react-router-dom";

const NavigationBar = ({ type, items }) => {
	if (type === "special") {
		return (
			<Link
				to="/"
				className={`block px-4 py-3 text-xl text-white  md:border md:rounded-xl font-semibold md:hover:bg-secondary transition-all duration-300`}
			>
				Back To Home
			</Link>
		);
	} else {
		return items.map((item, index) => (
			<a
				className="block px-4 py-4 text-white hover:text-gray-300 font-base"
				key={index}
				href={item.url}
			>
				{item.label}
			</a>
		));
	}
};

export default NavigationBar;
