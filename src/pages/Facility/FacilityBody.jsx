import FacilityItems from "./FacilityItems";

// IMAGE
import Image from "../../components/AssetsImage";

export default function FacilityBody() {
	const itemsFacility = [
		{
			id: 1,
			title: "Rumput Berstandar FIFA",
			description:
				"Fasilitas rumput yang digunakan oleh Bezzie Minisoccer memenuhi standar FIFA, memastikan kualitas dan performa terbaik bagi para pemain kami. Lapangan kami dirawat dengan cermat untuk memenuhi persyaratan ketat yang ditetapkan oleh FIFA, menjamin permukaan bermain yang konsisten dan meningkatkan pengalaman keseluruhan bagi semua peserta.",
			image: Image.Grass,
		},
		{
			id: 2,
			title: "Bola Berkualitas Tinggi",
			description:
				"Di Bezzie Minisoccer, kami memastikan pengalaman bermain Anda tak tertandingi dengan menyediakan fasilitas bola yang unggul. Setiap bola yang kami gunakan dipilih dengan cermat untuk memenuhi standar kualitas tertinggi, sehingga Anda dapat menikmati kontrol dan akurasi yang konsisten dalam permainan Anda. Kami secara rutin memeriksa dan mengganti bola kami untuk memastikan kualitasnya tetap prima.",
			image: Image.Ball,
		},
		{
			id: 3,
			title: "Mushola",
			description:
				"Di Bezzie, kami memahami pentingnya kenyamanan dalam beribadah. Tempat ibadah kami dirancang dengan baik dan sangat nyaman, menyediakan lingkungan yang tenang dan mendukung untuk refleksi dan ibadah Anda. Kami berkomitmen untuk memberikan pengalaman ibadah yang memuaskan bagi setiap pengunjung.",
			image: Image.Mushola,
		},
		{
			id: 4,
			title: "Cafetaria yang Nyaman",
			description:
				"Di Bezzie, kami menawarkan fasilitas cafetaria yang sangat nyaman bagi para pengunjung kami. Dirancang dengan suasana hangat dan santai, cafetaria kami adalah tempat yang sempurna untuk bersantai setelah bermain minisoccer atau sekadar mengobrol santai dengan teman-teman. Fasilitas cafetaria kami dilengkapi dengan meja dan kursi yang nyaman, serta area duduk yang luas sehingga Anda dapat menikmati makanan dan minuman dengan santai. Dengan suasana yang ramah dan pelayanan yang prima.",
			image: Image.Cafetaria,
		},
		{
			id: 5,
			title: "Rompi Berkualitas Tinggi",
			description:
				"Di Bezzie, kami menyediakan fasilitas penyewaan rompi berkualitas tinggi yang siap meningkatkan pengalaman bermain minisoccer Anda. Setiap rompi yang kami tawarkan dipilih dengan cermat untuk memastikan kualitasnya, sehingga Anda dapat bermain dengan percaya diri dan nyaman.",
			image: Image.Vest,
		},
		{
			id: 6,
			title: "Ruang Mandi & Toilet",
			description:
				"Di Bezzie, kami memahami pentingnya kenyamanan dan kebersihan di fasilitas kamar mandi dan toilet kami. Oleh karena itu, kami menyediakan fasilitas yang unggul untuk Anda gunakan. Kamar mandi kami dirancang agar selalu bersih dan terawat, menawarkan ruang yang luas dan nyaman untuk Anda bersih-bersih setelah bermain minisoccer.",
			image: Image.ShowerRoom,
		},
	];
	return (
		<>
			<h3 className="text-center font-display">Fasilitas</h3>

			<FacilityItems items={itemsFacility} />
		</>
	);
}
