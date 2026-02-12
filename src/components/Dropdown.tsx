import { IoIosArrowDown } from "react-icons/io"
import type { DropdownProps } from "../utils/types"
import { memo } from "react"

const Dropdown = ({ getOptionsVisibility, getOptionsToggle, selectedValue, getOptions, getSelectedOption }: DropdownProps) => {

    return (
        <div className="bg-white border-2 border-red rounded-lg font-semibold text-lg cursor-pointer flex-1 lg:flex-initial">
            {/* Selected Value */}
            <div className={`flex justify-between items-center gap-2 px-3 py-1 ${getOptionsVisibility ? 'border-b-2 border-red' : ''}`} onClick={getOptionsToggle}>
                <p className="text-red">{selectedValue}</p>
                <IoIosArrowDown fill="#ff1e02" />
            </div>
            {/* Options */}
            <div className={`${getOptionsVisibility ? 'h-40 p-2' : 'h-0'} overflow-y-auto`}>
                {getOptions?.map((option: number) => <p key={option} className="py-1 px-3 rounded-lg hover:bg-red hover:text-white" onClick={() => getSelectedOption?.(option)}>{option}</p>)}
            </div>
        </div>
    )
}

export default memo(Dropdown)