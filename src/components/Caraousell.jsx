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

export default function Caraousell({ items }) {
	// const { title, content, imageTeam } = props;

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
				{items.map((item, index) => (
					<SwiperSlide key={index} className="w-fit my-4 rounded-md border">
						<div className="shadow-md rounded-md relative h-[500px] overflow-hidden">
							{item.img && (
								<img
									src={item.img}
									alt={`Foto ${item.title}`}
									className="rounded-md  h-full bg-cover bg-center"
								/>
							)}

							<div className="absolute bottom-0 text-white w-full px-2 py-3 rounded-md bg-shadow">
								<h3 className="font-bold">{item.title}</h3>
								<p className="font-semibold">{item.description}</p>
								<p className="">{item.job}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
