import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Projects from "./Projects";

export default function Content() {
  return (
    <div>
      <Intro id="intro" />
      <Projects id="projects" />
      <About id="about" />
      <Contact id="contact" />
    </div>
  );
}
