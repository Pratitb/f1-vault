import { useEffect, useState } from "react"

export const useAvailableHeight = (element: React.RefObject<HTMLElement | null>, bottomPad: number = 20) => {
    const [availableHeight, setAvailableHeight] = useState(0)

    useEffect(() => {
        if (!element?.current) return

        const calculateAvailableHeight = () => {
            const screenHeight = window.innerHeight
            console.log(screenHeight, 'screenHeight')

            const elementTop = element?.current?.getBoundingClientRect()?.top ?? 20
            console.log(elementTop, 'elementTop')

            const getAvailableHeight = screenHeight - elementTop - bottomPad
            setAvailableHeight(getAvailableHeight)
        }

        calculateAvailableHeight()

    }, [bottomPad, element])

    return availableHeight
}