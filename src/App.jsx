import NavBody from "./components/Navbar/NavBody";
import HeroBody from "./pages/Hero/HeroBody";
import ServiceBody from "./pages/ServiceSection/ServiceBody";
import FacilityBody from "./pages/Facility/FacilityBody";
import PriceListBody from "./pages/Pricelist/PriceListBody";
import GalleryBody from "./pages/Gallery/GalleryBody";
import TeamBody from "./pages/Team/TeamBody";

// Asset
import logoBrand from "./assets/logo.webp";
import FooterBody from "./pages/Footer/FooterBody";

export default function App() {
	return (
		<>
			<header className="relative">
				<NavBody logo={logoBrand} />
			</header>

			<main>
				<section>
					<HeroBody />
					<ServiceBody />
					<FacilityBody />
					<PriceListBody />
					<GalleryBody />
					<TeamBody />
				</section>

				<footer>
					<FooterBody />
				</footer>
			</main>
		</>
	);
}
