import Button from "../../components/Button";
import List from "../../components/List";

export default function FooterLocation() {
	return (
		<div className="xl:w-[30rem] z-10 sm:z-50">
			<List title={"Location"} />
			<List>
				<List.Title classTitle={"font-display text-4xl"}>Location</List.Title>

				<List.Description>
					Jl. H. Zainun No.9, Jurong Meunasah Dayah, Beurawe, Kec. Kuta Alam,
					Kota Banda Aceh, Aceh 23124
				</List.Description>
			</List>

			<Button
				classCSS={"border  px-4 py-2 hover:bg-secondary"}
				link={"https://maps.app.goo.gl/hiMKnaWoF3CMcrDd8"}
			>
				{" "}
				GMAPS{" "}
			</Button>
		</div>
	);
}
