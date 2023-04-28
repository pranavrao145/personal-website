import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISideNavButtonProps } from "../types/props";

export default function SideNavButton(props: ISideNavButtonProps) {
  return (
    <a className="flex ml-1 my-5" href={`#${props.text}`}>
      <FontAwesomeIcon className="text-4xl" icon={props.icon} />
      <button className="invisible lg:visible ml-4 text-4xl">
        {props.text}
      </button>
    </a>
  );
}
