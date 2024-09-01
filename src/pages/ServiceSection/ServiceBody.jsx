import ServiceList from "./ServiceList";

// ICON ASSETS
import Icon from "../../components/AssetsIcons";

export default function ServiceBody() {
	const itemsService = [
		{
			title: "Fast Respon",
			description:
				"Kami siap menanggapi setiap permintaan Anda dengan cepat dan efisien, memastikan Anda mendapatkan informasi dan layanan yang Anda butuhkan tanpa penundaan.",
			img: Icon.Phone,
		},
		{
			title: "Friendly",
			description:
				"Tim kami selalu siap melayani Anda dengan senyuman dan keramahan, menciptakan suasana yang hangat dan menyenangkan setiap kali Anda berinteraksi dengan kami.",
			img: Icon.People,
		},
		{
			title: "Facility",
			description:
				"Kami menawarkan fasilitas terbaik untuk mendukung setiap aktivitas Anda. Setiap detail dirancang untuk memberikan pengalaman terbaik dan membuat Anda merasa seperti di rumah sendiri.",
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
