import React, { useRef } from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";

const CopyField = ({children}: { children:[any,any] }) => {
    const [_,copyToClipboard] = useCopyToClipboard();
    const ref = useRef<HTMLParagraphElement>(null);
    return (
        <button onClick={() => { if (ref.current) { 
            copyToClipboard(ref.current.textContent!.trim()); 
            } }} className="flex  hover:bg-accent hover:text-black hover:cursor-pointer gap-0.5 text-nowrap  ">
            {children[0]}
            <p ref={ref} className="break-words">{children[1]}</p>
        </button>
    );
};

export default CopyField