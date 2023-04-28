import Content from "./Content";
import SideNav from "./SideNav";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex bg-black h-screen p-5 pt-8 w-1/5 sticky top-0">
        <SideNav />
      </div>
      <div className="w-screen md:w-4/5 ml-7">
        <Content />
      </div>
    </div>
  );
}
