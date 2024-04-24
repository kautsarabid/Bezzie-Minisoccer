import List from "../../components/List";

export default function FooterItemInformation() {
	return (
		<div className="relative flex flex-col justify-start items-start z-10 ">
			<List.Title classTitle={"font-display text-4xl"}>Information</List.Title>

			<List.Description
				classDescription={"text-lg hover:text-slate-300"}
				link={"/about"}
			>
				About
			</List.Description>

			<List.Description
				classDescription={"text-lg hover:text-slate-300"}
				link={"/rules"}
			>
				Rules
			</List.Description>

			<List.Description
				classDescription={"text-lg hover:text-slate-300"}
				link={"/faq"}
			>
				FAQ
			</List.Description>

			<List.Description
				classDescription={"text-lg hover:text-slate-300"}
				link={"/more-gallery"}
			>
				More Gallery
			</List.Description>
		</div>
	);
}
