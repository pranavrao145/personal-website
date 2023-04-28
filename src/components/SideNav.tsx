import {
  faAddressCard,
  faCode,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import SideNavButton from "./SideNavButton";

export default function SideNav() {
  return (
    <div className="my-auto">
      <SideNavButton icon={faHouse} text="intro" />
      <SideNavButton icon={faCode} text="projects" />
      <SideNavButton icon={faAddressCard} text="about" />
      <SideNavButton icon={faPhone} text="contact" />
    </div>
  );
}
