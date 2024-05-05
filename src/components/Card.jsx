export default function Card(props) {
	const { children, classCSSContainer } = props;

	return <div className={`${classCSSContainer}`}>{children}</div>;
}

function Title(props) {
	const { children, classCSSTitle } = props;
	return (
		<>
			<h5 className={`${classCSSTitle}`}>{children}</h5>
		</>
	);
}

function Description(props) {
	const { children, classCSSDes } = props;

	return (
		<>
			<p className={classCSSDes}>{children}</p>
		</>
	);
}

function AdditionalStyle(props) {
	const { children, classCSSAdd } = props;

	return (
		<>
			<span className={classCSSAdd}>{children}</span>
		</>
	);
}

Card.Title = Title;
Card.Description = Description;
Card.AdditionalStyle = AdditionalStyle;
