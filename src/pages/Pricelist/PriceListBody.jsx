import PriceListDesktop from "./PriceListDesktop";
import PriceListMobile from "./PriceListMobile";

export default function PriceListBody() {
	return (
		<>
			<div className="mb-6 transition-all duration-100">
				<h3 className="text-center font-display">Pricelist</h3>

				<div className="container mx-auto">
					<div className="lg:hidden">
						{/* Ini akan tampil hanya pada layar mobile */}
						<PriceListMobile />
					</div>
					<div className="hidden lg:block">
						{/* Ini akan tampil hanya pada layar desktop */}
						<PriceListDesktop />
					</div>
				</div>
			</div>
		</>
	);
}
