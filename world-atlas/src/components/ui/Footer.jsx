import { footerData } from "../../api/FooterApi"
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";


export const Footer = () => {

    const footerIcon = {
        MdPlace : <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    }

    console.log("footerData", footerData);

    return <footer>
        {footerData.map((curData, index) => {
            const { icon, title, details } = curData
            return <div key={index}>
                <p> {footerIcon[icon]} </p>
                <p> {title} </p>
                <p> {details} </p>
            </div>
        })}
    </footer>
}