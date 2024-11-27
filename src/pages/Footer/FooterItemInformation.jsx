import List from "../../components/List";

export default function FooterItemInformation() {
	return (
		<div className="relative flex flex-col justify-start items-start z-10 w-[20rem]">
			<List.Title classTitle={"font-display text-4xl"}>Informasi</List.Title>

			<List.Description
				classDescription={"text-lg hover:text-slate-300"}
				link={"/about"}
			>
				Tentang Kami
			</List.Description>

			<List.Description
				classDescription={"text-lg hover:text-slate-300"}
				link={"/rules"}
			>
				Peraturan
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
