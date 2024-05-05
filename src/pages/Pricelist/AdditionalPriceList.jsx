import Card from "../../components/Card";

export default function AdditionalPriceList() {
	return (
		<div>
			<Card
				classCSSContainer={
					"border  pt-3  mt-4 mx-5 shadow-custom rounded-md optional-pricelist"
				}
			>
				<div className="px-5">
					<Card.Title classCSSTitle={"text-xl font-bold mb-1"}>
						Bundling Photographer{" "}
						<span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-secondary  relative ml-1 inline-block">
							<span className="relative font-display text-white">
								<a
									target="_blank"
									href="https://www.instagram.com/potretbolaaceh/?hl=id"
								>
									@potobolaaceh
								</a>
							</span>{" "}
						</span>
					</Card.Title>
					<Card.Description classCSSDes={"text-lg"}>
						1 Jam : 275K
					</Card.Description>
					<Card.Description classCSSDes={"text-lg"}>
						2 Jam : 325K
					</Card.Description>
				</div>

				<hr className="my-3" />

				<div className="px-5">
					<Card.Title classCSSTitle={"text-xl font-bold"}> Rompi </Card.Title>
					<Card.Description classCSSDes={"text-lg"}>
						1 set : 30K
					</Card.Description>

					<Card.Description classCSSDes={"text-lg"}>
						2 set : 50K
					</Card.Description>
				</div>

				<div className=" bottom-0 border w-full py-4 px-2 bg-primary rounded-b-md">
					<h6 className="text-xl text-center text-white font-semibold uppercase">
						Gratis Rompi Setiap 2 Jam Pembookingan
					</h6>
				</div>
			</Card>
		</div>
	);
}
