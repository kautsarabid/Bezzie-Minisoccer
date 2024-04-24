import List from "../../components/List";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export default function FooterContact() {
	const phoneNumber = "6281264797798";
	const message = "Bang, mau booking lapangan";
	const whatsAppURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
		message
	)}`;

	return (
		<div className="z-10 relative">
			<List.Title classTitle={"font-display text-4xl"}>Contact</List.Title>

			<div className="flex flex-col gap-5">
				<a
					target="_blank"
					href="https://www.instagram.com/bezzie.minisoccer/?hl=id"
					className="flex items-center gap-2"
				>
					<BsInstagram className="text-3xl" />
					<span>@bezzie.minisoccer</span>
				</a>

				<a
					target="_blank"
					href="https://www.tiktok.com/@bezzie.minisoccer"
					className="flex items-center gap-2"
				>
					<FaTiktok className="text-3xl" />
					<span>@bezzie.minisoccer</span>
				</a>

				<a
					target="_blank"
					href={whatsAppURL}
					className="flex items-center gap-2"
				>
					<BsWhatsapp className="text-3xl" />
					<span>+62 812-6479-7798</span>
				</a>
			</div>
		</div>
	);
}
