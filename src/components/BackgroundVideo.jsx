import video from "../assets/bg-1.mp4";

const BackgroundVideo = () => {
	return (
		<video
			autoPlay
			loop
			muted
			className="object-cover w-full h-full absolute inset-0 -z-10 brightness-[.35] md:brightness-50"
		>
			<source src={video} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
};

export default BackgroundVideo;
