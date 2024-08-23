export default function Button(props) {
	const { children, classCSS, onClick } = props;

	return (
		<h6>
			<button
				className={`${classCSS} inline-block  rounded-[12px]  mt-3 text-center font-display hover:transition-all hover:ease-in-out hover:duration-300`}
				onClick={onClick}
			>
				{children}
			</button>
		</h6>
	);
}
