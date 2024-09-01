import Button from "../../components/Button";

export default function ButtonWeekEnd({ handleSectionChange }) {
	return (
		<div className="flex justify-evenly flex-wrap gap-2">
			<Button
				classCSS={"btn-weekday-default cursor-pointer"}
				onClick={() => handleSectionChange("weekday")}
			>
				HARI BIASA
			</Button>

			<Button
				classCSS={"btn-weekend cursor-pointer"}
				onClick={() => handleSectionChange("weekend")}
			>
				HARI LIBUR
			</Button>
		</div>
	);
}
