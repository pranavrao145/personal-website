import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ContactLink from "./ContactLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IIdProps } from "../types/props";

export default function Contact(props: IIdProps) {
  return (
    <div id={props.id} className="h-screen flex flex-wrap bg-black">
      <div className="my-auto w-full pr-10">
        <div className="grid grid-cols-1 grid-rows-2">
          <h1 className="text-5xl my-10 font-bold">Contact</h1>
          <div>
            <ul className="list-none text-xl md:text-3xl">
              <ContactLink
                icon={faGithub}
                textBold="GitHub:"
                textNormal="pranavrao145"
                url="https://github.com/pranavrao145"
              />
              <ContactLink
                icon={faLinkedin}
                textBold="Linkedin:"
                textNormal="pranavrao145"
                url="https://www.linkedin.com/in/pranavrao145/"
              />
              <li className="flex">
                <FontAwesomeIcon icon={faDiscord} />
                <p className="ml-2 font-bold">Discord:</p>
                <p className="ml-2">cypher#1121</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
