import { IoIosArrowDown } from "react-icons/io"
import { useCommon } from "../context/Common/CommonContext"
import { seasonYears } from "../utils/staticTxt"
import { useState } from "react"

const Dropdown = () => {
    const { selectedYear, updateSelectedYear } = useCommon()
    const [optionsVisible, setOptionsVisible] = useState(false)
    const handleOptionsVisibility = () => {
        setOptionsVisible(!optionsVisible)
    }
    const handleOptionSelect = (year: number) => {
        updateSelectedYear?.(year)
        setOptionsVisible(false)
    }
    return (
        <div className="bg-white border-2 border-red rounded-lg font-semibold text-lg cursor-pointer">
            {/* Selected Value */}
            <div className={`flex justify-between items-center gap-2 px-3 py-1 ${optionsVisible ? 'border-b-2 border-red' : ''}`} onClick={handleOptionsVisibility}>
                <p className="text-red">{selectedYear}</p>
                <IoIosArrowDown fill="#ff1e02" />
            </div>
            {/* Options */}
            <div className={`${optionsVisible ? 'h-40' : 'h-0'} px-3 overflow-y-auto`}>
                {seasonYears?.reverse()?.map((year: number) => <p key={year} className="py-1 rounded-lg hover:bg-red hover:text-white" onClick={() => handleOptionSelect?.(year)}>{year}</p>)}
            </div>
        </div>
    )
}

export default Dropdown