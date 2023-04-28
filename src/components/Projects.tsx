import { IIdProps } from "../types/props";
import Project from "./Project";

export default function Projects(props: IIdProps) {
  return (
    <div id={props.id} className="h-screen flex flex-wrap bg-black">
      <div className="my-auto w-full pr-10">
        <h1 className="text-5xl my-10 font-bold">Highlighted Projects</h1>
        <div className="flex flex-wrap md:grid md:grid-cols-2 w-full">
          <Project
            title=".dotfiles"
            description="A repository to hold all of my Linux system configuration files."
            link="https://github.com/pranavrao145/.dotfiles"
            marginLeft={false}
            showOnMobile={true}
            showOnMedium={true}
          />
          <Project
            title="refactoring.nvim"
            description="Open-source plugin with 1k+ stars on Github, made for Neovim using Lua, the Neovim API, and Treesitter to integrate refactoring features from high-end IDEs into the text editor."
            link="https://github.com/pranavrao145/storybuilder-cli"
            marginLeft={true}
            showOnMobile={true}
            showOnMedium={true}
          />
          <Project
            title="fulcrum-mk3"
            description="Discord bot equipped with powerful admin tools and various utilities built using TypeScript, discord.js, PostgreSQL, various REST APIs, and Docker."
            link="https://github.com/pranavrao145/storybuilder-cli"
            marginLeft={false}
            showOnMobile={false}
            showOnMedium={true}
          />
          <Project
            title="YouTube to MP3 Converter"
            description="Web application to simplify converting Youtube videos to MP3 using the Youtube Data API, Python, Flask, Jinja/CSS for the front-end, and Docker"
            link="https://github.com/pranavrao145/yt-mp3-converter"
            marginLeft={true}
            showOnMobile={false}
            showOnMedium={true}
          />
          <Project
            title="StoryBuilder"
            description="WebSocket-based CLI game for collaborative story building among players, using Rust for the command-line interface, Go for the API server, and Docker."
            link="https://github.com/pranavrao145/storybuilder-cli"
            marginLeft={false}
            showOnMobile={false}
            showOnMedium={false}
          />
          <Project
            title="Book Club"
            description="Web application for discovering and reviewing one's favorite books with Ruby on Rails, PostgreSQL, Embedded Ruby/CSS for the front-end, and Docker."
            link="https://github.com/pranavrao145/book-club"
            marginLeft={true}
            showOnMobile={false}
            showOnMedium={false}
          />
        </div>

        <a
          href="https://github.com/pranavrao145?tab=repositories"
          target="_blank"
        >
          <div className="container mt-3 w-full bg-black border rounded border-solid border-slate-800 text-white text-center h-9 mx-auto p-3 pb-8 font-bold">
            View All Projects on GitHub
          </div>
        </a>
      </div>
    </div>
  );
}
