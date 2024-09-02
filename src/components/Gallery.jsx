export default function Gallery({ items }) {
	return (
		<>
			{items.map((item, index) => (
				<div
					key={index}
					className={`h-15 bg-blue-500 aspect-[3/4] rounded-lg overflow-hidden group relative hover:scale-95 transition-all duration-500 `}
				>
					<img
						className="w-full bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"
						src={item.img}
						alt="Foto Gallery"
					/>
				</div>
			))}
		</>
	);
}
