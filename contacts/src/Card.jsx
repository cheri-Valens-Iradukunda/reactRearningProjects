import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Card = (props) => {
    return <div className="mx-auto border [box-shadow:1px_1px_8px_black] p-5 border-gray-700 rounded">
        <img src={props.img} width={300} className="rounded-lg" alt="" />
        <h2 className="text-2xl font-bold">{props.name}</h2>
        <div className="flex gap-1 items-center">
            <FaPhoneAlt className="rotate-15 text-md"/>
            <p>+{props.phone}</p>
        </div>
        <div className="flex gap-1 items-center">
            <MdEmail className="text-md"/>
            <p>{props.email}</p>
        </div>
    </div>
}