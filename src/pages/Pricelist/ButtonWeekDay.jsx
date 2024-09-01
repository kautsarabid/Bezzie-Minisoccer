import Button from "../../components/Button";

export default function ButtonWeekDay({ handleSectionChange }) {
	return (
		<div className="flex justify-evenly flex-wrap gap-2">
			<Button
				classCSS={"btn-weekday cursor-pointer"}
				onClick={() => handleSectionChange("weekday")}
			>
				HARI BIASA
			</Button>

			<Button
				classCSS={"btn-weekend-default cursor-pointer"}
				onClick={() => handleSectionChange("weekend")}
			>
				HARI LIBUR
			</Button>
		</div>
	);
}
