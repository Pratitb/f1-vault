import { createContext, useContext } from "react";
import type { CommonContextProps } from "../../utils/types";

export const CommonContext = createContext<CommonContextProps | undefined>(undefined)

export const useCommon = () => {
    const context = useContext(CommonContext)
    if (!context) throw new Error('Please check common context')
    return context
}