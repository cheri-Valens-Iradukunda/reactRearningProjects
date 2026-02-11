import { FaLocationDot } from "react-icons/fa6";

export const Card = (props) => {


    return <div className="flex gap-4 p-7">
        <img src={props.image} width={250} className="rounded" alt="image" />
        <div className="*:my-2">
            <div className="flex gap-3 text-sm">
                <div className="flex content-center gap-1">
                    <FaLocationDot className="text-red-500 text-md mt-1"/>
                    <p className="uppercase font-semibold">{props.location}</p>
                </div>
                <a className="text-purple-900 underline" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
            </div>
            <h3 className="font-bold text-2xl">{props.placeName}</h3>
            <p className="font-semibold text-sm pt-3">12 Jan, 2023 - 24 Jan, 2023</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                elit. Laudantium maiores cum quaerat quidem deleniti 
                itaque officiis nemo corrupti blanditiis sapiente, 
                porro possimus architecto dignissimos commodi 
                recusandae suscipit. Illo, ab odit?</p>
        </div>
    </div>

}
