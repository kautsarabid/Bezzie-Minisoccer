import FacilityItems from "./FacilityItems";

// IMAGE
import ImageCafetaria from "../../assets/facility/cafetaria-edit.png";
import ImageGrass from "../../assets/facility/lapangan-edit.png";
import ImageBall from "../../assets/facility/bola-edit.png";
import ImageMushola from "../../assets/facility/musholla-edit.png";
import ImageRompi from "../../assets/facility/rompi.png";
import ImageShowerRoom from "../../assets/facility/shower-room-edit.png";

export default function FacilityBody() {
	const itemsFacility = [
		{
			id: 1,
			title: "FIFA Standard Grass",
			description:
				"The grass facilities utilized by Bezzie Minisoccer adhere to FIFA standards, ensuring top-notch quality and performance for our players. Our fields are meticulously maintained to meet the rigorous requirements set by FIFA, guaranteeing a consistent playing surface that enhances the overall experience for all participants.",
			image: ImageGrass,
		},
		{
			id: 2,
			title: "High Quality Ball",
			description:
				"At Bezzie Minisoccer, we ensure that your playing experience is unparalleled by providing excellent ball facilities. Every ball we use is carefully selected to meet the highest quality standards, so you can enjoy consistent control and accuracy in your game. We regularly inspect and replace our balls to ensure their quality remains excellent.",
			image: ImageBall,
		},
		{
			id: 3,
			title: "Comfortable Prayer Room",
			description:
				"At Bezzie, we understand the importance of comfort in worship. Our places of worship are well-designed and very comfortable, providing a peaceful and supportive environment for your reflection and worship. We are committed to providing a satisfying worship experience for every visitor",
			image: ImageMushola,
		},
		{
			id: 4,
			title: "Comfortable Cafetaria",
			description:
				"At Bezzie, we offer a very comfortable cafeteria facility for our visitors. Designed with a warm and relaxed atmosphere, our cafeteria is the perfect place to unwind after playing futsal or to have a casual chat with friends. Our cafeteria facilities are equipped with comfortable tables and chairs, as well as ample seating areas so you can enjoy your food and drinks leisurely. With a friendly atmosphere and excellent service",
			image: ImageCafetaria,
		},
		{
			id: 5,
			title: "High Quality Vest",
			description:
				"At Bezzie, we provide high-quality shin guard rental facilities ready to enhance your futsal playing experience. Each shin guard we offer is carefully selected to ensure its quality, allowing you to play with confidence and comfort. Our shin guards are made from durable and comfortable materials. Rent your shin guards at Bezzie today and feel the difference with our provided facilities!.",
			image: ImageRompi,
		},
		{
			id: 6,
			title: "Comfortable Shower Room & Toilet",
			description:
				"At Bezzie, we understand the importance of comfort and cleanliness in our shower room and toilet facilities. That's why we take pride in providing excellent facilities for your use. Our shower rooms are designed to be clean and well-maintained, offering spacious and comfortable spaces for you to freshen up after playing minisoccer.",
			image: ImageShowerRoom,
		},
	];
	return (
		<>
			<h3 className="text-center font-display">Facility</h3>

			<FacilityItems items={itemsFacility} />
		</>
	);
}
