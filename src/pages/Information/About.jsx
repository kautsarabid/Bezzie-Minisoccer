import NavBody from "../../components/Navbar/NavBody";

export default function About() {
	return (
		<>
			<header className="relative">
				<NavBody />
			</header>

			<main className="pt-20 h-full">
				<section className="about h-fit">
					<h4 className="font-display text-center uppercase">
						Bezzie minisoccer
					</h4>
					<div className="container px-5 xl:px-10">
						<p>
							Selamat Datang di{" "}
							<span className="text-[#031c33] font-bold">BEZZIE</span>{" "}
							<span className="text-[#b32c19] font-bold">MINISOCCER</span>!.
							Kami adalah pusat olahraga minisoccer yang berlokasi{" "}
							<span className="font-bold">
								<a href="https://maps.app.goo.gl/hiMKnaWoF3CMcrDd8">
									Banda Aceh, Beurawe
								</a>
							</span>
							. yang didirikan pada bulan 15 Juni 2023 dengan visi dan misi.
							Memberikan fasilitas yang berkualitas dan aman bagi para pemain
							sepak bola mini dari berbagai kalangan usia dan latar belakang,
							Mendorong semangat persaingan yang sehat dan sportivitas dalam
							setiap pertandingan yang diadakan di tempat kami, Menyelenggarakan
							acara dan kegiatan sosial yang menghubungkan komunitas, mempererat
							ikatan antaranggota, dan mempromosikan nilai-nilai positif seperti
							kerjasama, integritas, dan keberagaman.
						</p>
						<p>
							Di Bezzie, kami mengutamakan kualitas dalam setiap aspek layanan
							kami. Fasilitas lapangan kami dirancang dengan teliti untuk
							menciptakan lingkungan bermain yang aman, nyaman, dan mendukung
							perkembangan keterampilan pemain. Lapangan kami dilengkapi dengan
							teknologi terbaru dan perawatan berkala agar tetap dalam kondisi
							terbaik, memberikan pengalaman bermain yang konsisten dan
							memuaskan setiap kali Anda mengunjungi kami.
						</p>
						<p>
							Namun, lebih dari sekadar tempat bermain minisoccer, kami di
							Bezzie berkomitmen untuk membangun komunitas yang solid dan
							inklusif. Kami mengadakan berbagai acara sosial, dan turnamen
							untuk membantu memperkuat ikatan antara anggota komunitas kami dan
							mempromosikan semangat sportivitas, kerja sama, dan pertumbuhan
							pribadi.
						</p>
						<p>
							Selain itu, kami juga menjaga agar nilai-nilai seperti integritas,
							etika, dan rasa hormat selalu menjadi prioritas utama dalam setiap
							interaksi dengan anggota tim kami maupun pengunjung kami. Dengan
							staf yang ramah, berpengetahuan, dan berpengalaman, kami siap
							memberikan bantuan dan layanan terbaik kepada Anda setiap saat.
						</p>
						<p>
							Kami berterima kasih atas dukungan dan kepercayaan Anda dalam
							perjalanan kami sejauh ini, dan kami berkomitmen untuk terus
							berkembang dan meningkatkan layanan kami demi kepuasan dan
							kebahagiaan Anda. Bergabunglah dengan kami di Bezzie Minisoccer,
							di mana setiap langkah, dribel, dan gol memiliki makna dan cerita
							di baliknya. Ayo bersama kita raih prestasi dan kenangan tak
							terlupakan di dunia futsal!
						</p>
					</div>

					{/* <div className="absolute top-0 left-0 mix-blend-multiply bg-paper w-full h-full z-0 brightness-75"></div> */}
				</section>
			</main>
		</>
	);
}
