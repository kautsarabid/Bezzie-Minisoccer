import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// asset image
import ImgPerson1 from "../assets/team/person1.jpg";
import ImgPerson2 from "../assets/team/person2.jpg";
import ImgPerson3 from "../assets/team/person3.jpg";
import ImgPerson4 from "../assets/team/person4.jpg";

export default function App() {
	const slidesData = [
		{ index: 1, content: ImgPerson1 },
		{ index: 2, content: ImgPerson2 },
		{ index: 3, content: ImgPerson3 },
		{ index: 4, content: ImgPerson4 },
	];

	return (
		<>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				navigation={true}
				pagination={true}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="mySwiper px-5 "
			>
				{slidesData.map((slide, index) => (
					<SwiperSlide className="w-fit my-4 rounded-md border" key={index}>
						<CustomSlide index={slide.index} content={slide.content} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

function CustomSlide(props) {
	const { index, content } = props;
	return (
		<div
			key={index}
			className="shadow-md rounded-md relative h-[500px] overflow-hidden"
		>
			<img
				src={content}
				alt="Foto Team"
				className="rounded-md  h-full bg-cover bg-center"
			/>

			<div className="absolute bottom-0 text-white w-full px-2 py-3 rounded-md bg-shadow">
				<h5 className="font-bold">Nama</h5>
				<p className="font-semibold">Job</p>
			</div>
		</div>
	);
}
