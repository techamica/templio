export default function Navbar() {
    return <div className="w-screen fixed left-0 top-0 z-20">
        <nav
            className="container mx-auto flex justify-center md:justify-start gap-[6px] items-end py-6">
            <div className="flex gap-2 items-end">
                <h1 className="text-4xl font-extrabold text-brand">Templio</h1>
                <div className="w-2 h-2 bg-rose-500 rounded-full mb-2" />
            </div>
        </nav>
    </div>
}