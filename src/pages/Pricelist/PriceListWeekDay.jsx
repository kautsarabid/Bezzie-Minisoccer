import Card from "../../components/Card";

export default function PriceListWeekDay() {
	return (
		<>
			<h5 className="text-4xl uppercase text-center font-semibold bg-primary text-white py-4 mb-6 lg:hidden">
				Hari Biasa
			</h5>
			<div className="flex justify-center items-center gap-10 flex-wrap text-center mb-10">
				<Card classCSSContainer={"card-pricelist  relative"}>
					<Card.Title classCSSTitle={"mb-4 font-bold text-5xl"}>
						{" "}
						300K{" "}
					</Card.Title>
					<Card.Description>06.00 - 07.00</Card.Description>
					<Card.Description>07.00 - 08.00</Card.Description>
					<Card.Description>08.00 - 09.00</Card.Description>
					<Card.Description>09.00 - 10.00</Card.Description>

					<Card.AdditionalStyle
						classCSSAdd={
							"absolute -top-3 font-bold border py-1 px-3 rounded-xl bg-primary text-white .inset-shadow-custom"
						}
					>
						Pagi
					</Card.AdditionalStyle>
				</Card>

				<Card classCSSContainer={"card-pricelist relative"}>
					<Card.Title classCSSTitle={"mb-4 font-bold text-5xl"}>
						{" "}
						250K{" "}
					</Card.Title>

					<Card.Description>10.00 - 11.00</Card.Description>
					<Card.Description>11.00 - 12.00</Card.Description>
					<Card.Description>12.00 - 13.00</Card.Description>
					<Card.Description>13.00 - 14.00</Card.Description>
					<Card.Description>14.00 - 15.00</Card.Description>
					<Card.Description>15.00 - 16.00</Card.Description>

					<Card.AdditionalStyle
						classCSSAdd={
							"absolute -top-3 font-bold border py-1 px-3 rounded-xl bg-primary text-white"
						}
					>
						Siang
					</Card.AdditionalStyle>
				</Card>

				<Card classCSSContainer={"card-pricelist relative"}>
					<Card.Title classCSSTitle={"mb-4 font-bold text-5xl"}>
						{" "}
						400K{" "}
					</Card.Title>

					<Card.Description>16.00 - 17.00</Card.Description>
					<Card.Description>17.00 - 18.00</Card.Description>
					<Card.Description>20.00 - 21.00</Card.Description>
					<Card.Description>21.00 - 23.00</Card.Description>
					<Card.Description>23.00 - 24.00</Card.Description>

					<Card.AdditionalStyle
						classCSSAdd={
							"absolute -top-3 font-bold border py-1 px-3 rounded-xl bg-primary text-white"
						}
					>
						Malam
					</Card.AdditionalStyle>
				</Card>
			</div>
		</>
	);
}
