import FooterItemInformation from "./FooterItemInformation";
import FooterLocation from "./FooterLocation";
import FooterContact from "./FooterContact";

// LOGO
import LogoBezzie from "../../assets/logo.webp";

export default function FooterBody() {
	return (
		<div
			className="mt-[64px] relative overflow-hidden bg-primary text-white py-7 px-16 xl:flex xl:gap-4 xl:justify-around"
			id="contact"
		>
			<img
				src={LogoBezzie}
				alt="Logo Bezzie"
				className="mb-5 m-auto xl:w-[25%] z-10"
			/>
			<hr className="mx-3 my-4 xl:hidden" />

			<FooterLocation />
			<hr className="mx-3 my-4 xl:hidden" />

			<FooterItemInformation />
			<hr className="mx-3 my-4 xl:hidden" />

			<FooterContact />

			<div className="absolute top-0 left-0 w-full h-full">
				<div className="mix-blend-multiply bg-paper w-full h-full"></div>
			</div>
		</div>
	);
}
