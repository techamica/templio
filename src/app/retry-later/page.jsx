import Link from "next/link";

export const metadata = {
    title: "429 - Too Many Requests",
    description: "You've made too many requests. Please try again later.",
}

export default function RetryLater() {
    return <div
        className="w-screen h-screen bg-dark">
        <div className="container w-full h-full mx-auto flex flex-col gap-4 xl:flex-row xl:gap-14 justify-center items-center">
            <h1
                className="text-[140px] sm:text-[200px] xl:text-[250px] font-extrabold flex gap-6 text-transparent transition-all duration-300 leading-tight">
                <span className="http_code blur-none hover:scale-[1.15]">4</span>
                <span className="http_code blur-none hover:scale-[1.15]">2</span>
                <span className="http_code blur-none hover:scale-[1.15]">9</span>
            </h1>
            <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start mb-6 xl:mb-0">
                <h2 className="text-4xl text-white/70 font-bold leading-tight text-center">Too Many Requests</h2>
                <h3 className="max-w-[650px] text-lg text-white/50 mt-6 leading-normal text-justify xl:text-left">
                    We’re receiving a high volume of requests from your end, and we need to pause for a moment. Please wait a few seconds and try again.
                </h3>
                <Link href="https://poki.com/" aria-label="Play games">
                    <button
                        className="text-lg bg-[#00ff99] text-[#27272c] rounded-full mt-10 px-8 py-[14px] shadow-sm font-bold hover:bg-transparent border-[3px] border-[#00ff99] hover:text-[#00ff99] transition-all duration-300">
                        Play games instead
                    </button>
                </Link>
            </div>
        </div>
    </div>
}