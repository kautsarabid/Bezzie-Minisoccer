import TeamItems from "./TeamItems";

// asset image
import ImgPerson1 from "../../assets/team/person1.jpg";
import ImgPerson2 from "../../assets/team/person2.jpg";
import ImgPerson3 from "../../assets/team/person3.jpg";
import ImgPerson4 from "../../assets/team/person4.jpg";
import Caraousell from "../../components/Caraousell";

export default function TeamBody() {
	const slidesData = [
		{ index: 1, img: ImgPerson1, title: "Devan", job: "-" },
		{ index: 2, img: ImgPerson2, title: "Taqin", job: "-" },
		{ index: 3, img: ImgPerson3, title: "Ahda", job: "-" },
		{ index: 4, img: ImgPerson4, title: "Irpan", job: "-" },
	];

	return (
		<div className="mb-24" id="team">
			<h3 className="font-display text-center">Team</h3>

			<Caraousell items={slidesData} />
		</div>
	);
}
