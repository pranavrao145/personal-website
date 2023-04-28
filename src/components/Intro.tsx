import { IIdProps } from "../types/props";

export default function Intro(props: IIdProps) {
  return (
    <div id={props.id} className="h-screen bg-black flex flex-wrap">
      <div className="my-auto">
        <div className="text-5xl md:text-8xl font-bold">
          Hi there, I'm Pranav!
        </div>
        <div className="text-lg md:text-3xl ml-1 mt-1 font-medium flex-wrap pr-10">
          I'm a passionate and motivated computer science student at the
          University of Toronto, learning new things every day!
        </div>
      </div>
    </div>
  );
}
