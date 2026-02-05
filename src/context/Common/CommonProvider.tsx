import { useState } from "react"
import type { ContextProps } from "../../utils/types"
import { CommonContext } from "./CommonContext"

export const CommonProvider = ({ children }: ContextProps) => {
    const [activeMenu, setActiveMenu] = useState('home')
    const updateActiveMenu = (value: string) => {
        setActiveMenu(value)
    }

    const currentYear = new Date()?.getFullYear()
    const [selectedYear, setSelectedYear] = useState(currentYear)

    const updateSelectedYear = (year: number) => {
        setSelectedYear(year)
    }

    return (
        <CommonContext.Provider value={{ selectedYear, updateSelectedYear, activeMenu, updateActiveMenu }}>
            {children}
        </CommonContext.Provider>
    )
}