import { memo } from 'react'
import type { ErrorColors, ErrorProps } from '../utils/types'

const ErrorMsg = ({ errorMsg, color = 'primary' }: ErrorProps) => {

    const colorMap: Record<ErrorColors, string> = {
        primary: 'text-primary',
        red: 'text-red',
    }

    return <p className={`${colorMap[color]} text-center text-sm`}>{errorMsg}</p>
}

export default memo(ErrorMsg)