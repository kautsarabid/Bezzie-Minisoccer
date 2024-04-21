import { useState } from "react";
import PriceListWeekDay from "./PriceListWeekDay";
import PriceListWeekEnd from "./PriceListWeekEnd";
import ButtonWeekDay from "./ButtonWeekDay";
import ButtonWeekEnd from "./ButtonWeekEnd";

export default function PriceListBody() {
	const [currentSection, setCurrentSection] = useState("weekday");

	const handleSectionChange = (section) => {
		setCurrentSection(section);
	};

	return (
		<>
			<div className="mb-6  transition-all duration-100">
				<h3 className="text-center font-display">Pricelist</h3>

				{currentSection === "weekday" ? (
					<div>
						<PriceListWeekDay />
						<ButtonWeekDay handleSectionChange={handleSectionChange} />
					</div>
				) : (
					<div>
						<PriceListWeekEnd />
						<ButtonWeekEnd handleSectionChange={handleSectionChange} />
					</div>
				)}
			</div>
		</>
	);
}
