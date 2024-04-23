import List from "../../components/List";
import NavBody from "../../components/Navbar/NavBody";
import {
	FaBanSmoking,
	FaTrash,
	FaCat,
	FaPills,
	FaGun,
	FaPeopleGroup,
	FaPersonHarassing,
} from "react-icons/fa6";
import {
	GiGoalKeeper,
	GiEating,
	GiDamagedHouse,
	GiSonicShoes,
	GiPokerHand,
	GiPoloShirt,
} from "react-icons/gi";

export default function Rules() {
	const itemsIcon = [
		{
			id: 1,
			icon: <FaBanSmoking className="icon-size" />,
			description: "Dilarang Merokok Di Dalam Lapangan",
		},
		{
			id: 2,
			icon: <FaPersonHarassing className="icon-size" />,
			description: "Dilarang Meludah Di Dalam Lapangan",
		},
		{
			id: 3,
			icon: <FaTrash className="icon-size" />,
			description: "Dilarang Membuang Sampah Sembarangan",
		},
		{
			id: 4,
			icon: <FaCat className="icon-size" />,
			description: "Dilarang Membawa Hewan Peliharaan",
		},
		{
			id: 5,
			icon: <GiGoalKeeper className="icon-size" />,
			description: "Dilarang Bersandar Di Jaring",
		},
		{
			id: 6,
			icon: <GiEating className="icon-size" />,
			description: "Dilarang Memakan Permen Karet Di Dalam Lapangan",
		},
		{
			id: 7,
			icon: <GiDamagedHouse className="icon-size" />,
			description: "Dilarang Merusak Sarana dan Prasarana Lapangan",
		},
		{
			id: 8,
			icon: <FaPills className="icon-size" />,
			description:
				"Dilarang Membawa Dan Menggunakan Narkotika  Serta Obat Terlarang",
		},
		{
			id: 9,
			icon: <FaGun className="icon-size" />,
			description: "Dilarang Membawa Senjata Api Dan Tajam",
		},
		{
			id: 10,
			icon: <FaPeopleGroup className="icon-size" />,
			description: "Dilarang Berkelahi Dan Membuat Keonaran",
		},
		{
			id: 11,
			icon: <GiSonicShoes className="icon-size" />,
			description: "Dilarang Menggunakan Sepatu Dengan Skrup/Besi",
		},
		{
			id: 12,
			icon: <GiPokerHand className="icon-size" />,
			description: "Dilarang Berjudi",
		},
		{
			id: 13,
			icon: <GiPoloShirt className="icon-size" />,
			description: "Wajib Memakai Baju Bola Dan Sepatu Bola",
		},
	];
	return (
		<>
			<header>
				<NavBody />
			</header>

			<main className="pt-20">
				<section>
					<h4 className="font-display text-center">RULES</h4>

					<div className="description px-5 xl:text-center xl:text-2xl">
						<List>
							{itemsIcon.map((item, index) => (
								<List.Description classDescription={"py-3"}>
									{item.icon}

									<span className="pl-3 font-bold">{item.description}</span>
								</List.Description>
							))}
						</List>
					</div>
				</section>

				<hr className="m-3" />

				<section>
					<p className="italic text-center font-semibold p-4">
						Area Bezzie Minisoccer Diawasi Oleh CCTV Bilamana Terdapat Melakukan
						Tindakan Kriminal Maka Akan Di Tindak Tegas
					</p>
				</section>
			</main>
		</>
	);
}
