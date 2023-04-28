import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IContactLinkProps } from "../types/props";

export default function ContactLink(props: IContactLinkProps) {
  return (
    <li>
      <a className="flex ml-1 my-5" href={`${props.url}`} target="_blank">
        <FontAwesomeIcon icon={props.icon} />
        <p className="ml-2 font-bold">{props.textBold}</p>
        <p className="ml-2">{props.textNormal}</p>
      </a>
    </li>
  );
}
