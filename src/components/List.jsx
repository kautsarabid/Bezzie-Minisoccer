export default function List(props) {
	const { children, classContainer } = props;
	return (
		<>
			<div className={classContainer}>{children}</div>
		</>
	);
}

function Title(props) {
	const { classTitle, children } = props;
	return <h6 className={`${classTitle} pb-2`}>{children}</h6>;
}

function Icon(props) {
	const { classIcon, children } = props;
	return <i className={`${classIcon} font-bold`}>{children}</i>;
}

function Description(props) {
	const { classDescription, children, link } = props;
	return (
		<ul>
			<li className={`${classDescription} py-2`}>
				<a href={link}>{children}</a>
			</li>
		</ul>
	);
}

List.Title = Title;
List.Icon = Icon;
List.Description = Description;
