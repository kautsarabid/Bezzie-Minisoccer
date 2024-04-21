export default function Button(props) {
	const { children, classCSS, link, target, rel, onClick } = props;

	return (
		<h6>
			<a
				href={link}
				rel={rel}
				target={target}
				className={`${classCSS} inline-block  rounded-[12px]  mt-3 text-center font-display hover:transition-all hover:ease-in-out hover:duration-300`}
				onClick={onClick}
			>
				{children}
			</a>
		</h6>
	);
}
