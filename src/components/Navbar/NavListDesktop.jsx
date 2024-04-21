export default function NavListDesktop({ items }) {
	return (
		<div
			className="hidden  md:flex gap-5 justify-between
     "
		>
			{items.map((item, index) => (
				<a
					key={index}
					href={item.url}
					className="text-white hover:text-gray-300 font-base"
				>
					{item.label}
				</a>
			))}
		</div>
	);
}
