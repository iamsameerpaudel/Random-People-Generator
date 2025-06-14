import { useMemo, useRef } from "react";
import { person } from "./personType"
import { useCopyToClipboard } from "@uidotdev/usehooks";
import Image from "next/image"
import { Calender, Cell, Email, Location, Password, Phone, Street,User } from "./svg/Icons";

const DetailedPerson = ({ person }: { person: person }) => {

    const dateOfBirth = useMemo(() => {
        const d = new Date(person.dob.date);
        return `${d.getUTCFullYear()}/${String(d.getUTCMonth() + 1).padStart(2, '0')}/${String(d.getUTCDate()).padStart(2, '0')}`;
    }, [person.dob.date]);
    const [_, copyToClipboard] = useCopyToClipboard();

    function tempAlert(msg: string, duration: number) {
        var el = document.createElement("div");
        el.setAttribute("class", "absolute bottom-2 p-2 font-bold right-10 text-lg bg-white rounded-md text-black");
        el.innerText = msg;
        setTimeout(function () {
            el.parentNode!.removeChild(el);
        }, duration);
        mainDiv.current?.appendChild(el);
    }

    const mainDiv = useRef<HTMLDivElement | null>(null);
    const nameRef = useRef<HTMLParagraphElement | null>(null);
    const emailRef = useRef<HTMLParagraphElement | null>(null);
    const dobRef = useRef<HTMLParagraphElement | null>(null);
    const addressRef = useRef<HTMLParagraphElement | null>(null);
    const streetRef = useRef<HTMLParagraphElement | null>(null);
    const userNameRef = useRef<HTMLParagraphElement | null>(null);
    const passwordRef = useRef<HTMLParagraphElement | null>(null);
    const phoneRef = useRef<HTMLParagraphElement | null>(null);
    const cellRef = useRef<HTMLParagraphElement | null>(null);

    const handleClick = (ref: React.RefObject<HTMLParagraphElement | null>) => {
        if (ref.current) {
            copyToClipboard(ref.current.textContent?.trim() || "");
            tempAlert("Copied to clipboard", 1000);
        }
    }

    const buttonClasses: string = "flex  hover:bg-accent hover:text-black hover:cursor-pointer gap-0.5 text-nowrap "

    return (
        <div ref={mainDiv} className="flex flex-col gap-2  wrap-anywhere text-lg " >
            <div className="flex h-50 w-full justify-center" >
                <Image src={person.picture.large} alt="user" className="rounded-full border-2 border-white" width={200} height={200} />
            </div>
            <div className="w-full flex" >
                <div className="flex  w-1/2 flex-col gap-2" >
                    <span onClick={() => handleClick(nameRef)} className="hover:bg-accent hover:text-black hover:cursor-pointer"   >
                        <p ref={nameRef} className="text-2xl font-bold">{person.name.title} {person.name.first} {person.name.last}</p>
                    </span>
                    <span onClick={() => handleClick(dobRef)} className={buttonClasses} >
                        <Calender />
                        <p ref={dobRef} className="text-wrap "   > {dateOfBirth}  </p>
                    </span>
                    <span onClick={() => handleClick(emailRef)} className={buttonClasses} >
                        <Email />
                        <p ref={emailRef} className="text-wrap "  > {person.email}</p>
                    </span>
                    <span onClick={() => handleClick(addressRef)} className={buttonClasses} >
                        <Location />
                        <p ref={addressRef} className="text-wrap "   >{person.location.city}, {person.location.state}, {person.location.country} </p>
                    </span>
                    <span onClick={() => handleClick(streetRef)} className={buttonClasses} >
                        <Street />
                        <p ref={streetRef} className="text-wrap "   >{person.location.street.number} {person.location.street.name}</p>
                    </span>
                </div>
                <div className="text-lg w-1/2">
                    <span onClick={() => handleClick(userNameRef)} className={buttonClasses} >
                        <User/>
                        <p ref={userNameRef} className="text-wrap "   >{person.login.username}</p>
                    </span>
                    <span onClick={() => handleClick(passwordRef)} className={buttonClasses} >
                        <Password />
                        <p ref={passwordRef} className="text-wrap "   >{person.login.password}</p>
                    </span>
                    <span onClick={() => handleClick(phoneRef)} className={buttonClasses} >
                        <Phone />
                        <p ref={phoneRef} className="text-wrap "   >{person.phone}</p>
                    </span>
                    <span onClick={() => handleClick(cellRef)} className={buttonClasses} >
                        <Cell />
                        <p ref={cellRef} className="text-wrap "   >{person.cell}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DetailedPerson
