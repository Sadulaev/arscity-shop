'use client';
import useClickOutside from "@/hooks/use-click-outside";
import { X } from "lucide-react";
import { useRef, useState } from "react"

type Props = {
    open?: boolean;
    setOpen: (value: boolean) => void;
}

const CatalogModal:React.FC<Props> = ({open, setOpen}) => {
    const stopOPen = (e: any) => {
        e.stopPropagation()
    }
    
    
    return (
        
        <div id={"modal-catalog"} onClick={(e) => stopOPen(e)} className={`flex w-[587px] p-[4] absolute ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"} transition-all duration-300 ease-in-out top-[80px] z-[10000] bg-gray-500 text-white`}>
            <div className="absolute top-1 right-1 border-2 rounded-[50%] cursor-pointer hover:text-red-300 transition-all delay-100" id="modalCatalog"  onClick={() => setOpen(false)}>
                <X/>
            </div>
            
            <div className='flex flex-col w-[50%] p-3 gap-3 uppercase border-r-2'>
                <span className='cursor-pointer hover:text-red-400 font-bold transition-all delay-100 border-b-2'>КРУПНЫЕ ФОРМАТЫ</span>
                <span className='cursor-pointer hover:text-red-400 font-bold transition-all delay-100 border-b-2'>Керамогранит</span>
                <span className='cursor-pointer hover:text-red-400 font-bold transition-all delay-100 border-b-2'>КЕРАМИЧЕСКаЯ ПЛИТКА</span>
                <span className='cursor-pointer hover:text-red-400 font-bold transition-all delay-100 border-b-2'>ИЗГОТОВЛЕНИЕ СПЕЦИЗДЕЛИЙ</span>
            </div>
            <div className='flex flex-col w-[50%] p-3 gap-3 uppercase'>
                <span className='cursor-pointer hover:text-red-400 font-bold transition-all delay-100 border-b-2'>ЛАМИНАТ</span>
                <span className='cursor-pointer hover:text-red-400 font-bold transition-all delay-100 border-b-2'>ПЛИНТУС</span>
                <span className='cursor-pointer hover:text-red-400 font-bold transition-all delay-100 border-b-2'>ЗАМАЗКИ</span>
                <span className='cursor-pointer hover:text-red-400 font-bold transition-all delay-100 border-b-2'>КЛЕЙ</span>
            </div>
        </div>
        
    )
}

export default CatalogModal