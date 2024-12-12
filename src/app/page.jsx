import ProjectList from "./components/ProjectList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";

export const metadata = {
  title: "Welcome to Templio",
  description: "It seems the page you're looking for has gone missing.",
}

export default function Home() {
  return <>
    <Navbar />

    <div
      className="w-screen absolute top-[84px] h-[calc(100%_-_84px)] overflow-y-scroll">
      <div className="container w-full min-h-[calc(100%_-_84px)] mx-auto flex flex-col xl:flex-row gap-4 xl:gap-10 justify-center items-center pt-10">
        <Introduction />

        <ProjectList />
      </div>

      <Footer />
    </div>
  </>
}
