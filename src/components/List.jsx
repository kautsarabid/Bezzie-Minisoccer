import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";

export default function List(props) {
	const { title, content, classCSSTitle, classCssContent } = props;
	return (
		<>
			<ul>
				<h6 className={`${classCSSTitle} font-bold`}>{title}</h6>

				<li className={`hover:text-slate-300 py-1 text-lg ${classCssContent}`}>
					<a href="#">{content}</a>
				</li>
			</ul>
		</>
	);
}
