import React, { useEffect } from 'react'
import { type person } from './personType'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
    propPerson: person
}

const PersonCard = ({ propPerson }: Props) => {
    const [dateOfBirth, setDateOfBirth] = useState<string>('');
    useEffect(()=>{
        const date = new Date(propPerson.dob.date);
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const formatted = `${year}/${month}/${day}`;
        setDateOfBirth(formatted)
    },[])

    return (
        <div className="pb-3 w-full h-full  text-pretty wrap-anywhere rounded-sm cursor-pointer drop-shadow-xl/50 border-2 border-black bg-[#7c7e73] flex flex-col justify-center font-bold" >
            <div className='border-b-2 py-3 md:shrink-0 border-b-gray-300 flex-2 flex justify-center' >
                <Image src={propPerson.picture.large} alt='user' width={150} height={150} className='rounded-md border-2 shadow-xl border-black h-auto' />
            </div>
            <div className='px-3 pt-2 flex-3'>
                <h3 className='text-[1.3em] text-center gap-2' >
                    {propPerson.name.title} {propPerson.name.first} {propPerson.name.last}
                </h3>
                <h4 className='text-xs flex items-center gap-2 ' >
                    <svg id="Email--Streamline-Carbon" height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" ><defs /><title>{"email"}</title><path d="M28 6H4a2 2 0 0 0 -2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2 -2V8a2 2 0 0 0 -2 -2Zm-2.2 2L16 14.78 6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z" fill="#000000" strokeWidth={1} /><path id="_Transparent_Rectangle_" d="M0 0h32v32H0Z" fill="none" strokeWidth={1} /></svg>
                    {propPerson.email}
                </h4>
                <h4 className='text-xs flex items-center gap-2' >
                    <svg id="Location-Filled--Streamline-Carbon" height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" ><defs /><path d="M16 2A11.0134 11.0134 0 0 0 5 13a10.8885 10.8885 0 0 0 2.2163 6.6s0.3 0.3945 0.3482 0.4517L16 30l8.439 -9.9526c0.0444 -0.0533 0.3447 -0.4478 0.3447 -0.4478l0.0015 -0.0024A10.8846 10.8846 0 0 0 27 13 11.0134 11.0134 0 0 0 16 2Zm0 15a4 4 0 1 1 4 -4 4.0045 4.0045 0 0 1 -4 4Z" fill="#000000" strokeWidth={1} /><path id="_Inner-Path_" d="M12 13a4 4 0 1 0 8 0 4 4 0 1 0 -8 0" fill="none" strokeWidth={1} /><path id="_Transparent_Rectangle_" d="M0 0h32v32H0Z" fill="none" strokeWidth={1} /></svg>
                    {propPerson.location.state}, {propPerson.location.country} 
                </h4>
                <h4 className='text-xs flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" height={17} viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" strokeWidth={1} /></svg>
                    {dateOfBirth}
                </h4>
                <h4 className='text-xs flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" id="Deskphone-Fill--Streamline-Outlined-Fill-Material" height={20}  ><path fill="#000000" d="M16.5 19.5h3V4.5h-3v15ZM7.0045 13.75c0.21365 0 0.39135 -0.07235 0.533 -0.217 0.14165 -0.1445 0.2125 -0.32365 0.2125 -0.5375 0 -0.21365 -0.07235 -0.39135 -0.217 -0.533 -0.1445 -0.14165 -0.32365 -0.2125 -0.5375 -0.2125 -0.21365 0 -0.39135 0.07235 -0.533 0.217 -0.14165 0.1445 -0.2125 0.32365 -0.2125 0.5375 0 0.21365 0.07235 0.39135 0.217 0.533 0.1445 0.14165 0.32365 0.2125 0.5375 0.2125Zm0 3c0.21365 0 0.39135 -0.07235 0.533 -0.217 0.14165 -0.1445 0.2125 -0.32365 0.2125 -0.5375 0 -0.21365 -0.07235 -0.39135 -0.217 -0.533 -0.1445 -0.14165 -0.32365 -0.2125 -0.5375 -0.2125 -0.21365 0 -0.39135 0.07235 -0.533 0.217 -0.14165 0.1445 -0.2125 0.32365 -0.2125 0.5375 0 0.21365 0.07235 0.39135 0.217 0.533 0.1445 0.14165 0.32365 0.2125 0.5375 0.2125Zm-0.7545 -6h7.5v-3.5h-7.5v3.5Zm3.7545 3c0.21365 0 0.39135 -0.07235 0.533 -0.217 0.14165 -0.1445 0.2125 -0.32365 0.2125 -0.5375 0 -0.21365 -0.07235 -0.39135 -0.217 -0.533 -0.1445 -0.14165 -0.32365 -0.2125 -0.5375 -0.2125 -0.21365 0 -0.39135 0.07235 -0.533 0.217 -0.14165 0.1445 -0.2125 0.32365 -0.2125 0.5375 0 0.21365 0.07235 0.39135 0.217 0.533 0.1445 0.14165 0.32365 0.2125 0.5375 0.2125Zm0 3c0.21365 0 0.39135 -0.07235 0.533 -0.217 0.14165 -0.1445 0.2125 -0.32365 0.2125 -0.5375 0 -0.21365 -0.07235 -0.39135 -0.217 -0.533 -0.1445 -0.14165 -0.32365 -0.2125 -0.5375 -0.2125 -0.21365 0 -0.39135 0.07235 -0.533 0.217 -0.14165 0.1445 -0.2125 0.32365 -0.2125 0.5375 0 0.21365 0.07235 0.39135 0.217 0.533 0.1445 0.14165 0.32365 0.2125 0.5375 0.2125Zm3 -3c0.21365 0 0.39135 -0.07235 0.533 -0.217 0.14165 -0.1445 0.2125 -0.32365 0.2125 -0.5375 0 -0.21365 -0.07235 -0.39135 -0.217 -0.533 -0.1445 -0.14165 -0.32365 -0.2125 -0.5375 -0.2125 -0.21365 0 -0.39135 0.07235 -0.533 0.217 -0.14165 0.1445 -0.2125 0.32365 -0.2125 0.5375 0 0.21365 0.07235 0.39135 0.217 0.533 0.1445 0.14165 0.32365 0.2125 0.5375 0.2125Zm0 3c0.21365 0 0.39135 -0.07235 0.533 -0.217 0.14165 -0.1445 0.2125 -0.32365 0.2125 -0.5375 0 -0.21365 -0.07235 -0.39135 -0.217 -0.533 -0.1445 -0.14165 -0.32365 -0.2125 -0.5375 -0.2125 -0.21365 0 -0.39135 0.07235 -0.533 0.217 -0.14165 0.1445 -0.2125 0.32365 -0.2125 0.5375 0 0.21365 0.07235 0.39135 0.217 0.533 0.1445 0.14165 0.32365 0.2125 0.5375 0.2125ZM16.5 21c-0.337 0 -0.63375 -0.09585 -0.89025 -0.2875 -0.2565 -0.19165 -0.43475 -0.42915 -0.53475 -0.7125H4.5c-0.4125 0 -0.765585 -0.1469 -1.05925 -0.44075C3.146915 19.2656 3 18.9125 3 18.5V5.5c0 -0.4125 0.146915 -0.765665 0.44075 -1.0595C3.734415 4.146835 4.0875 4 4.5 4h10.575c0.1 -0.283335 0.27825 -0.520835 0.53475 -0.7125C15.86625 3.095835 16.163 3 16.5 3h3c0.4125 0 0.76565 0.146835 1.0595 0.4405C20.85315 3.734335 21 4.0875 21 4.5v15c0 0.4125 -0.14685 0.7656 -0.4405 1.05925C20.26565 20.8531 19.9125 21 19.5 21h-3Z" strokeWidth={1} /></svg>
                    {propPerson.phone}
                </h4>
                <h4 className='text-xs flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Phone-Android-Fill--Streamline-Outlined-Fill-Material" height={20} ><path fill="#000000" d="M9.95 20.875h4.1v-1h-4.1v1ZM6.5 23c-0.4 0 -0.75 -0.15 -1.05 -0.45 -0.3 -0.3 -0.45 -0.65 -0.45 -1.05V2.5c0 -0.4 0.15 -0.75 0.45 -1.05 0.3 -0.3 0.65 -0.45 1.05 -0.45h11c0.4 0 0.75 0.15 1.05 0.45 0.3 0.3 0.45 0.65 0.45 1.05v19c0 0.4 -0.15 0.75 -0.45 1.05 -0.3 0.3 -0.65 0.45 -1.05 0.45H6.5Zm0 -5.25h11v-13H6.5v13Z" strokeWidth={1} /></svg>
                    {propPerson.cell}
                </h4>
            </div>
        </div>
    )
}

export default PersonCard
