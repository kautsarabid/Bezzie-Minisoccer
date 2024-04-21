import Caraousell from "../../components/Caraousell";

export default function TeamItems({ items }) {
	return (
		<div>
			{items.map((item, index) => (
				<Caraousell
					key={index}
					imageTeam={item.img}
					title={item.title}
					content={item.job}
				/>
			))}
		</div>
	);
}

function CustomSlide(props) {
	const { index, content } = props;
	return (
		<div
			key={index}
			className="shadow-md rounded-md relative h-[500px] overflow-hidden"
		>
			<img
				src={content}
				alt="Foto Team"
				className="rounded-md  h-full bg-cover bg-center"
			/>

			<div className="absolute bottom-0 text-white w-full px-2 py-3 rounded-md bg-shadow">
				<h5 className="font-bold">Nama</h5>
				<p className="font-semibold">Job</p>
			</div>
		</div>
	);
}
