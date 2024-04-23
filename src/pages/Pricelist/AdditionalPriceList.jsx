import Card from "../../components/Card";

export default function AdditionalPriceList() {
	return (
		<div>
			<Card
				classCSSContainer={
					"border px-5 py-3  mt-4 mx-5 shadow-custom rounded-md optional-pricelist"
				}
			>
				<Card.Title classCSSTitle={"text-2xl font-bold"}>
					Bundling Photographer{" "}
					<span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-secondary  relative ml-1 inline-block">
						<span className="relative  font-display text-white">
							<a
								target="_blank"
								href="https://www.instagram.com/potretbolaaceh/?hl=id"
							>
								@potobolaaceh
							</a>
						</span>{" "}
					</span>
				</Card.Title>
				<Card.Description>1 Jam : 275K</Card.Description>

				<Card.Description>2 Jam : 325K</Card.Description>

				<hr className="my-3" />

				<Card.Title classCSSTitle={"text-2xl font-bold"}> Rompi </Card.Title>
				<Card.Description>1 set : 30K</Card.Description>

				<Card.Description>2 set : 50K</Card.Description>
			</Card>
		</div>
	);
}
