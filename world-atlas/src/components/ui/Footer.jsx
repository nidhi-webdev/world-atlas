import { footerData } from "../../api/FooterApi"
import { MdPlace } from "react-icons/md";


export const Footer = () => {

    const footerIcon = {
        MdPlace : <MdPlace />
    }

    console.log("footerData", footerData);

    return <footer>
        {footerData.map((curData, index) => {
            const { icon, title, details } = curData
            return <div key={index}>
                <p> {footerIcon.MdPlace} </p>
                <p> {title} </p>
                <p> {details} </p>
            </div>
        })}
    </footer>
}