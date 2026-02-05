import { IoIosArrowDown } from "react-icons/io"
import { useCommon } from "../context/Common/CommonContext"
import { seasonYears } from "../utils/staticTxt"
import { useState } from "react"

const Dropdown = () => {
    const { selectedYear } = useCommon()
    const [optionsVisible, setOptionsVisible] = useState(false)
    const handleOptionsVisibility = () => {
        setOptionsVisible(!optionsVisible)
    }
    return (
        <div className="bg-white border-2 border-red rounded-lg py-2 font-semibold text-lg cursor-pointer">
            {/* Selected Value */}
            <div className={`flex justify-between items-center px-4 ${optionsVisible ? 'pb-2 border-b border-red' : ''}`} onClick={handleOptionsVisibility}>
                <p className="text-red">{selectedYear}</p>
                <IoIosArrowDown fill="#ff1e02" />
            </div>
            {/* Options */}
            <div className={`${optionsVisible ? 'h-32 pt-2 px-2' : 'h-0'} overflow-y-auto`}>
                {seasonYears?.reverse()?.map((year: number) => <p key={year} className="py-1 rounded-lg px-4 hover:bg-red hover:text-white">{year}</p>)}
            </div>
        </div>
    )
}

export default Dropdown