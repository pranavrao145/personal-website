import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IIdProps {
  id: string;
}

export interface ISideNavButtonProps {
  text: string;
  icon: IconDefinition;
}

export interface IProjectProps {
  title: string;
  description: string;
  link: string;
  marginLeft: boolean;
  showOnMobile: boolean;
  showOnMedium: boolean;
}

export interface IContactLinkProps {
  icon: IconDefinition;
  textBold: string;
  textNormal: string;
  url: string;
}
