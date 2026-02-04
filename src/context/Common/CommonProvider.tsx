import { useState } from "react"
import type { ContextProps } from "../../utils/types"
import { CommonContext } from "./CommonContext"

export const CommonProvider = ({ children }: ContextProps) => {
    const [activeMenu, setActiveMenu] = useState('races')
    const updateActiveMenu = (value: string) => {
        setActiveMenu(value)
    }
    return (
        <CommonContext.Provider value={{ activeMenu, updateActiveMenu }}>
            {children}
        </CommonContext.Provider>
    )
}