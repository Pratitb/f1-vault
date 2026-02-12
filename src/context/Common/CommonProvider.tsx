import { useCallback, useState } from "react"
import type { ContextProps } from "../../utils/types"
import { CommonContext } from "./CommonContext"

export const CommonProvider = ({ children }: ContextProps) => {
    const currentYear = new Date()?.getFullYear()
    const [activeMenu, setActiveMenu] = useState('home')
    const [selectedYear, setSelectedYear] = useState(currentYear)
    const [standingType, setStandingType] = useState('drivers')

    const updateStandingType = (standing: string) => {
        setStandingType(standing)
    }

    const updateActiveMenu = (value: string) => {
        setActiveMenu(value)
    }

    const updateSelectedYear = useCallback((year: number) => {
        setSelectedYear(year)
    }, [])

    return (
        <CommonContext.Provider value={{ standingType, updateStandingType, selectedYear, updateSelectedYear, activeMenu, updateActiveMenu }}>
            {children}
        </CommonContext.Provider>
    )
}