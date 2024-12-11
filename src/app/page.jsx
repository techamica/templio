import Link from "next/link";
import ProjectList from "./components/ProjectList";
import ParticleContainer from "./components/ParticleContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <div className="w-full relative order-2 xl:order-none my-10 xl:my-0">
          {/* PARTICLE BACKGROUND */}
          <ParticleContainer />

          {/* BACKGROUND PATTERN IMAGE */}
          <div className="absolute bg-[url('/pattern/pattern-1.png')] bg-cover bg-center w-full h-full opacity-5" />

          {/* TEXT CONTENT */}
          <div className="z-10 relative flex flex-col items-center xl:items-start">
            <div className="w-[88px] h-[88px] flex justify-center items-center h1 text-white bg-accent-hover rounded-xl shadow-md shadow-gray-600">
              T
            </div>
            <h1 className="text-3xl font-semibold text-white/40 mt-7">
              is for Templio
            </h1>
            <p className="text-white/40 text-base mt-6 leading-8">
              Welcome to Templio — your gateway to stunning website templates!
            </p>
            <p className="text-white/40 text-base mt-4 leading-8">
              Dive into a world of innovative designs, crafted to elevate your digital presence. Whether
              you're building a personal blog, a business site, or an e-commerce platform, Templio offers a
              versatile selection to meet your every need.
            </p>
          </div>
        </div>

        <ProjectList />
      </div>

      <Footer />
    </div>
  </>
}
