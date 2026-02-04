import { createContext, useContext } from "react";
import type { RaceContextProps } from "../../utils/types";

export const RaceContext = createContext<RaceContextProps | undefined>(undefined)

export const useRace = () => {
    const context = useContext(RaceContext)
    if (!context) throw new Error('Please check race context')
    return context
}