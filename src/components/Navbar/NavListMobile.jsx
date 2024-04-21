export default function NavListMobile({ items, isOpen }) {
	return (
		<div
			className={
				isOpen
					? "md:hidden bg-secondary py-2 absolute w-3/6 rounded-md shadow-md top-24 right-10 transition duration-300 ease-in-out"
					: "hidden"
			}
		>
			{items.map((item, index) => (
				<a
					className="block px-4 py-4 text-white hover:text-gray-300 font-base"
					key={index}
					href={item.url}
				>
					{item.label}
				</a>
			))}
		</div>
	);
}
