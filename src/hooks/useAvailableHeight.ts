import { useEffect, useState } from "react"

export const useAvailableHeight = (element: React.RefObject<HTMLElement | null>, bottomPad: number = 20) => {
    const [availableHeight, setAvailableHeight] = useState(0)

    useEffect(() => {
        if (!element?.current) return

        const calculateAvailableHeight = () => {
            const screenHeight = window.innerHeight
            const elementTop = element?.current?.getBoundingClientRect()?.top ?? 20

            const getAvailableHeight = screenHeight - elementTop - bottomPad
            setAvailableHeight(getAvailableHeight)
        }

        calculateAvailableHeight()

        window.addEventListener('resize', calculateAvailableHeight)
        return () => window.removeEventListener('resize', calculateAvailableHeight)

    }, [bottomPad, element])

    return availableHeight
}