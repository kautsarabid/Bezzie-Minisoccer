import Button from "../../components/Button";

export default function HeroHeader() {
	const phoneNumber = "6281264797798";
	const message = "Bang, mau booking lapangan";
	const whatsAppURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
		message
	)}`;

	return (
		<div className="px-5 h-screen flex flex-col md:w-1/2 justify-end pb-5">
			<div className="container">
				<h4 className="text-white font-display font-bold md:text-[49px]">
					BEZZIE MINISOCCER
				</h4>
				<p className="text-white text-sm w-3/4 md:w-full">
					We are a home for small football enthusiasts with great spirit. At
					Bezzie Minisoccer, we believe that minisoccer is not just about the
					game, but also about igniting the spirit of friendship, teamwork, and
					joy.
				</p>
			</div>

			<Button
				onClick={() => window.open(whatsAppURL)}
				classCSS={
					"px-[36px] py-[15px] text-white bg-secondary relative hover:btn"
				}
			>
				Book Now{" "}
				{/* <span className="text-sm absolute bottom-0 -right-6">
					<img className="w-12 inline" src={IconFootball} alt="" />
				</span> */}
			</Button>
		</div>
	);
}
