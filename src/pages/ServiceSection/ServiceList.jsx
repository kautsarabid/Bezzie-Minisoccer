export default function ServiceList({ items }) {
	return (
		<ul className="grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-14 xl:px-24 md:px-28 px-5">
			{items.map((item, index) => (
				<li
					key={index}
					className="border bg-white p-5 rounded-md shadow-md flex flex-col justify-center items-center relative group"
				>
					<img
						className="m-auto mb-6 w-[40%] md:w-1/2"
						src={item.img}
						alt={`icon ${item.title}`}
					/>
					<h5 className="text-center font-bold mb-3">{item.title}</h5>
					<p className="text-center text-sm">{item.description}</p>

					<div className="bg-primary absolute w-full h-full -z-10 group-hover:scale-75 md:group-hover:scale-75 xl:group-hover:scale-90  transition-all duration-300 group-hover:rotate-45 rounded-md"></div>
				</li>
			))}
		</ul>
	);
}
