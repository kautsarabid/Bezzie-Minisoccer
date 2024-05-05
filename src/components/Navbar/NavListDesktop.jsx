import NavigationBar from "./NavigationBar";

export default function NavListDesktop({ type, items }) {
	return (
		<div
			className="hidden  md:flex gap-5 justify-between
     "
		>
			<NavigationBar items={items} type={type} />
		</div>
	);
}
