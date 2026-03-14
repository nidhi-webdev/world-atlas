import { footerData } from "../../api/FooterApi"
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";


export const Footer = () => {

    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    }

    return (
        <footer className="bg-gray-900 border-t border-gray-700 mt-20">
            <div className="max-w-6xl mx-auto px-10 py-12">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                    {/* Brand */}
                    <div className="flex flex-col gap-3 max-w-xs">
                        <h2 className="text-white font-extrabold text-2xl">🌍 WorldAtlas</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Explore the world, one country at a time. Discover history, culture, and facts about every nation.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col md:flex-row gap-8">
                        {footerData.map((curData, index) => {
                            const { icon, title, details } = curData
                            return (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-blue-400 text-2xl mt-1 cursor-pointer">
                                        {footerIcon[icon]}
                                    </span>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{title}</p>
                                        <p className="text-gray-400 text-sm">{details}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} WorldAtlas. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}