import ServiceList from "./ServiceList";

// ICON ASSETS
import Icon from "../../components/AssetsIcons";

export default function ServiceBody() {
	const itemsService = [
		{
			title: "Fast Respon",
			description:
				"Our team at Bezzie Minisoccer is ready to provide the best assistance for any questions or requests you may have.",
			img: Icon.Phone,
		},
		{
			title: "Friendly",
			description:
				"At Bezzie Minisoccer, our employees are known for their warm and friendly service. ",
			img: Icon.People,
		},
		{
			title: "Facility",
			description:
				"The services at Bezzie Minisoccer offer excellent facilities to ensure an optimal playing experience for our customers.",
			img: Icon.Room,
		},
	];
	return (
		<div id="service">
			<h3 className="font-display text-center">Service</h3>

			<ServiceList items={itemsService} />
		</div>
	);
}
