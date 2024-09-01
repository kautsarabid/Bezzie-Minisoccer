export default function FacilityItems({ items }) {
	return (
		<div className="bg-slate-500" id="facility">
			{items.map((item, index) => (
				<div
					key={index}
					className="flex mb-1 h-[450px] overflow-hidden odd:bg-primary even:bg-white odd:text-white odd:flex-row-reverse"
				>
					<div className="w-1/2 flex justify-center items-center">
						<img
							src={item.image}
							alt={item.title}
							className={`max-w-full md:max-h-fit w-full h-full object-cover ${
								item.id % 2 !== 0 ? "transform scale-x-[-1]" : ""
							} ${item.id === 4 ? "object-bottom" : "object-center"}`}
						/>
					</div>

					<div className="w-1/2 p-4 flex flex-col justify-center items-center">
						<h5 className="font-display text-center mb-3 text-lg md:text-[29px]">
							{item.title}
						</h5>
						<p className="text-sm md:text-lg">{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}
