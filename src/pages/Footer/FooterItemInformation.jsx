import List from "../../components/List";

export default function FooterItemInformation() {
	return (
		<div className="flex flex-col justify-start items-start">
			<List title={"Information"} />
			<List content={"Rules"} />
			<List content={"FAQ"} />
			<List content={"More Gallery"} />
		</div>
	);
}
