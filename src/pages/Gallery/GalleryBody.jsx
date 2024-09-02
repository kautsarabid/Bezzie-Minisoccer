import Gallery from "../../components/Gallery";

// IMAGES ASSETS
import Image1 from "../../assets/gallery/image1.png";
import Image2 from "../../assets/gallery/image2.png";
import Image3 from "../../assets/gallery/image3.png";
import Image4 from "../../assets/gallery/image4.png";
import Image5 from "../../assets/gallery/image5.png";
import Image6 from "../../assets/gallery/image6.png";
import Image7 from "../../assets/gallery/image7.png";
import Image8 from "../../assets/gallery/image8.png";
import Image9 from "../../assets/gallery/image9.png";
import Image10 from "../../assets/gallery/image10.png";
import Image11 from "../../assets/gallery/image11.png";
import Image12 from "../../assets/gallery/image12.png";
import Image13 from "../../assets/gallery/image13.png";
import Image14 from "../../assets/gallery/image14.png";
import Image15 from "../../assets/gallery/image15.png";

export default function GalleryBody() {
	const itemImage = [
		{ img: Image1 },
		{ img: Image2 },
		{ img: Image3 },
		{ img: Image4 },
		{ img: Image5 },
		{ img: Image6 },
		{ img: Image7 },
		{ img: Image8 },
		{ img: Image9 },
		{ img: Image10 },
		{ img: Image11 },
		{ img: Image12 },
		{ img: Image13 },
		{ img: Image14 },
		{ img: Image15 },
	];

	return (
		<div id="gallery">
			<h3 className="font-display text-center">Galeri</h3>

			<div className="p-2 grid grid-cols-2 md:grid-cols-4 gap-2 md:p-4">
				{/* <div className="h-15 font-semibold md:col-start-4 md:row-start-2 md:flex">
					<span className="self-center">Persfektif : Potret Bola Aceh</span>
				</div>

				<div className="h-15 font-semibold md:col-start-2 md:row-start-2 md:flex">
					<span className="self-end">@bezzie.minisoccer</span>
				</div> */}

				<Gallery items={itemImage} />
			</div>
		</div>
	);
}
