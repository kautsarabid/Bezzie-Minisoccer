import PriceListDesktop from "./PriceListDesktop";
import PriceListMobile from "./PriceListMobile";

export default function PriceListBody() {
	return (
		<>
			<div className="mb-6 transition-all duration-100" id="pricelist">
				<h3 className="text-center font-display">Pricelist</h3>

				<div className="container mx-auto">
					<div className="lg:hidden">
						<PriceListMobile />
					</div>
					<div className="hidden lg:block">
						<PriceListDesktop />
					</div>
				</div>
			</div>
		</>
	);
}
