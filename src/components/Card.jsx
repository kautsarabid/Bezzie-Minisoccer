export default function Card(props) {
	const {
		variant2,
		variant3,
		title,
		description1,
		description2,
		description3,
		description4,
		description5,
		description6,
		newStyle,
		styleSpan,
	} = props;

	return (
		<div className={`${variant2}`}>
			<h5 className={`${variant3}`}>{title}</h5>
			<p>{description1}</p>
			<p>{description2}</p>
			<p>{description3}</p>
			<p>{description4}</p>
			<p>{description5}</p>
			<p>{description6}</p>
			<span className={`${styleSpan}`}>{newStyle}</span>
		</div>
	);
}
