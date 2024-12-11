"use client"

import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import Image from "next/image"
import Link from "next/link"

const projects = [
    {
        name: "Portfolio - Noob",
        image: "/project/Portfolio-Noob.png",
        tags: [
            "Frontned",
            "Next.JS",
            "Tailwind CSS",
            "Shadcn"
        ],
        link: "/somewhere"
    },
]

function SwiperControls() {
    const swiper = useSwiper();

    return (
        <div className="flex w-full justify-between gap-2">
            <PiCaretLeftBold
                className="bg-white w-10 h-10 p-2 md:h-20 md:p-0 text-4xl text-primary cursor-pointer hover:bg-brand hover:text-white transition-all duration-500"
                onClick={() => swiper.slidePrev()}
            />
            <PiCaretRightBold
                className="bg-white w-10 h-10 p-2 md:h-20 md:p-0 text-4xl text-primary cursor-pointer hover:bg-brand hover:text-white transition-all duration-500"
                onClick={() => swiper.slideNext()}
            />
        </div>
    );
}

export default function ProjectList() {
    return <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="w-full h-60 shadow-md shadow-white/30 rounded-lg sm:h-80 md:h-[320px] lg:h-[360px] xl:h-[400px] order-1 xl:order-none xl:mt-0"
        // className="w-full h-80 border-2 border-white/30 rounded-lg sm:h-96 md:h-[360px] lg:h-[420px] xl:h-[400px]"
        onSlideChange={() => { }}
    >
        {projects.map((project, index) => {
            return <SwiperSlide
                key={`slide-${index}`}
                className="h-full flex justify-center items-center bg-pink-50/20"
            >
                {/* IMAGE */}
                <div className="w-full h-full">
                    <Link href={project.link} aria-label={project.name} target="_blank">
                        <Image
                            src={project.image}
                            fill
                            className="object-cover"
                            alt={project.name}
                        />
                        <div
                            className="w-full h-full opacity-0 bg-dark/80 hover:opacity-100 rounded-lg relative top-0 left-0 transition-all duration-300 flex flex-col gap-4 py-4 px-4 justify-end hover:shadow-md hover:shadow-[#00ff9962]">
                            <h1 className="text-xl font-bold text-accent-hover">{project.name}</h1>
                            <div className="text-white/70 text-sm flex gap-4 flex-wrap">
                                {
                                    project.tags.map((tag, id) => {
                                        return <div key={`tag-${index}-${id}`} className="flex gap-1 items-center">
                                            <span className="h-2 w-2 bg-brand rounded-full"></span>
                                            {tag}
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    </Link>
                </div>
            </SwiperSlide>
        })}

        {/* OVERLAY */}
        <div className="absolute z-10 w-full bottom-[calc(50%_-_20px)] md:bottom-[calc(50%_-_40px)] right-0">
            <SwiperControls />
        </div>
    </Swiper>
}