import Button from "../../components/Button";
import List from "../../components/List";

export default function FooterLocation() {
	return (
		<div className="xl:w-[30rem]">
			<List title={"Location"} />
			<List
				classCSS={"text-sm"}
				content={
					"Jl. H. Zainun No.9, Jurong Meunasah Dayah, Beurawe, Kec. Kuta Alam, Kota Banda Aceh, Aceh 23124"
				}
			/>
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
