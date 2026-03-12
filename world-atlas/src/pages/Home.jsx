import { NavLink } from "react-router-dom"
import { FaLongArrowAltRight, FaGlobeAmericas } from "react-icons/fa"

export const Home = () => {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* Hero Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-24 py-20 gap-12">

                {/* Left Content */}
                <div className="flex-1 flex flex-col gap-6">
                    <span className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-widest">
                        <FaGlobeAmericas className="text-blue-400" /> Your World Explorer
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Explore the World, <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                            One Country at a Time.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                        Discover the history, culture, and beauty of every nation.
                        Search and filter through countries to find the details you need.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <NavLink
                            to="/country"
                            className="flex items-center gap-2 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30"
                        >
                            Start Exploring <FaLongArrowAltRight />
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="flex items-center gap-2 border border-gray-600 hover:border-blue-400 hover:text-blue-400 text-gray-300 font-semibold px-6 py-3 rounded-full transition-all duration-300"
                        >
                            Learn More
                        </NavLink>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 mt-4">
                        <div>
                            <p className="text-2xl font-bold text-white">195+</p>
                            <p className="text-gray-500 text-sm">Countries</p>
                        </div>
                        <div className="border-l border-gray-700 pl-8">
                            <p className="text-2xl font-bold text-white">7</p>
                            <p className="text-gray-500 text-sm">Continents</p>
                        </div>
                        <div className="border-l border-gray-700 pl-8">
                            <p className="text-2xl font-bold text-white">8B+</p>
                            <p className="text-gray-500 text-sm">Population</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center cursor-pointer">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-10 blur-3xl scale-110"></div>
                        <img
                            src="/images/world.png"
                            alt="world"
                            className="relative w-72 md:w-125 drop-shadow-[0_0_40px_rgba(59,130,246,0.4)] animate-pulse"
                            style={{ animationDuration: "2s" }}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}