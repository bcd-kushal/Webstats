'use server'
import { ChevronDownSvg } from "@/svgs/svgs"
import { AccordionType } from "@/types/types"


export async function Accordion({ title, children }:AccordionType) {
    return (
        <div className=" flex flex-col items-stretch justify-stretch overflow-y-hidden h-[60px] rounded-lg">
            <div className="accordion-header leading-[60px] px-4 flex items-center justify-between cursor-pointer duration-300 hover:bg-[#fff1] rounded-lg mb-2" data-open="false">
                <span style={{fontSize:"20px"}}>{title}</span>
                <span className="chev" data-rotate="0"><ChevronDownSvg/></span>
            </div>
            <section className="accordion-body px-4">
                {children}
            </section>
        </div>

    )
}