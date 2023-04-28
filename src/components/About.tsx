import { IIdProps } from "../types/props";

export default function About(props: IIdProps) {
  return (
    <div id={props.id} className="h-screen flex flex-wrap bg-black">
      <div className="my-auto w-full pr-10">
        <h1 className="text-5xl my-10 font-bold">About Me</h1>
        <div className="flex">
          <div className="hidden lg:visible lg:inline w-1/3 p-10 my-auto">
            <img
              src={require("../static/images/candid.jpg")}
              alt="Pranav Rao"
              className="w-full"
            />
          </div>
          <div className="text-sm lg:w-2/3 md:text-lg my-auto 2xl:text-2xl">
            I'm an incoming second-year at the University of Toronto pursuing an
            Honours Bachelor of Science with a specialization in computer
            science, a focus in artificial intelligence, as well a double minor
            in mathematics and statistics. <br />
            <br />I love exploring new things in the tech world; I have
            experimented the most in full-stack development in various
            languages, but the areas that have interested me the most have
            generally been back-end development and developer workflow. You can
            see the full extent of my adventures on my{" "}
            <a
              className="underline"
              href="https://github.com/pranavrao145"
              target="_blank"
            >
              {" "}
              GitHub
            </a>
            . Nowadays, I am looking to get into artificial intelligence and
            machine learning. <br />
            <br />
            In my free time, I enjoy taking my dog for walks, playing video
            games, and learning new (people) languages. I recently taught myself
            Spanish, and I am currently undertaking a journey in Mandarin
            Chinese! I very much enjoy connecting with new people, so if you're
            interested in getting to know me better, feel free to reach out on{" "}
            <a
              className="underline"
              href="https://linkedin.com/in/pranavrao145"
              target="_blank"
            >
              {" "}
              Linkedin!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
