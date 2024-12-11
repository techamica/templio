export default function Footer() {
    return <footer className="relative z-10 mt-10 bottom-0 w-full text-gray-300 py-4">
        <div className="max-w-screen-xl mx-auto flex flex-row items-center justify-center p-4">
            <p className="text-sm">
                &copy; {new Date().getFullYear()}&nbsp;
                <a href="#" className="text-brand font-semibold">Templio</a>
                <span className="text-rose-400 text-xl">.</span>
                <span className="text-white/60"> All rights reserved.</span>
            </p>
        </div>
    </footer>
}