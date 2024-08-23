import ServiceList from "./ServiceList";

// ICON ASSETS
import PhoneIcon from "../../assets/icons/Phone2.png";
import PeopleIcon from "../../assets/icons/People-Hugging.png";
import RoomIcon from "../../assets/icons/Room2.png";

export default function ServiceBody() {
	const itemsService = [
		{
			title: "Fast Respon",
			description:
				"Our team at Bezzie Minisoccer is ready to provide the best assistance for any questions or requests you may have.",
			img: PhoneIcon,
		},
		{
			title: "Friendly",
			description:
				"At Bezzie Minisoccer, our employees are known for their warm and friendly service. ",
			img: PeopleIcon,
		},
		{
			title: "Facility",
			description:
				"The services at Bezzie Minisoccer offer excellent facilities to ensure an optimal playing experience for our customers.",
			img: RoomIcon,
		},
	];
	return (
		<div id="service">
			<h3 className="font-display text-center">Service</h3>

			<ServiceList items={itemsService} />
		</div>
	);
}
