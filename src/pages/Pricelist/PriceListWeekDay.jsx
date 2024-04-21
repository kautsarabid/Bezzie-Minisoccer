import Card from "../../components/Card";

export default function PriceListWeekDay() {
	return (
		<>
			<h5 className="text-4xl uppercase text-center font-semibold bg-primary text-white py-4 mb-2 lg:hidden">
				WeekDay
			</h5>
			<div className="flex justify-center items-center gap-10 flex-wrap  text-center mb-10">
				<Card
					variant2={"card-pricelist"}
					variant3={"mb-4 font-bold text-5xl"}
					title={"300K"}
					description1={"06.00 - 07-00"}
					description2={"07.00 - 08.00"}
					description3={"09.00 - 10.00"}
					description4={"09.00 - 10.00"}
				/>
				<Card
					variant2={"card-pricelist"}
					variant3={"mb-4 font-bold text-5xl"}
					title={"250K"}
					description1={"10.00 - 11.00"}
					description2={"11.00 - 12.00"}
					description3={"12.00 - 13.00"}
					description4={"13.00 - 14.00"}
					description5={"14.00 - 15.00"}
					description6={"15.00 - 16.00"}
				/>
				<Card
					variant2={"card-pricelist relative"}
					variant3={"mb-4 font-bold text-5xl"}
					title={"850K"}
					description1={"16.00 - 18.00"}
					description2={"20.00 - 22.00"}
					description3={"22.00 - 24.00"}
					newStyle={"⭐"}
					styleSpan={
						"absolute bg-yellow-400 -top-4 -right-4 border rounded-full p-2"
					}
				/>
			</div>
		</>
	);
}
