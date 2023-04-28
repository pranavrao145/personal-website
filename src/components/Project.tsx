import { IProjectProps } from "../types/props";

export default function Project(props: IProjectProps) {
  return (
    <a
      className={`${props.showOnMobile ? "" : "hidden"} ${
        props.showOnMedium ? "md:visible md:flex" : ""
      } 2xl:visible 2xl:flex mb-3`}
      href={`${props.link}`}
      target="_blank"
    >
      <div
        className={`container border p-2 rounded border-solid border-slate-800 h-full ${
          props.marginLeft ? "md:ml-3" : ""
        }`}
      >
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <br />
        <p className="text-lg">{props.description}</p>
      </div>
    </a>
  );
}
