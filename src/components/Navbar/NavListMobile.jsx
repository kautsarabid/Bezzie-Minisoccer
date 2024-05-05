import NavigationBar from "./NavigationBar";

export default function NavListMobile({ items, isOpen, type }) {
	return (
		<div
			className={
				isOpen
					? "md:hidden bg-secondary py-2 absolute w-3/6 rounded-md shadow-custom top-24 right-10 transition duration-300 ease-in-out"
					: "hidden"
			}
		>
			<NavigationBar type={type} items={items} />
		</div>
	);
}
