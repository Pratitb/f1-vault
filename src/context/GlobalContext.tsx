import { RaceProvider } from './Race/RaceProvider'
import type { ContextProps } from '../utils/types'
import { CommonProvider } from './Common/CommonProvider'

export const GlobalContext = ({ children }: ContextProps) => {
    return (
        <RaceProvider>
            <CommonProvider>
                {children}
            </CommonProvider>
        </RaceProvider>
    )
}