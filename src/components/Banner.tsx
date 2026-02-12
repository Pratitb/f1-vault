import { memo } from "react"
import type { BannerProps } from "../utils/types"

const Banner = ({ bgColor, textColor, name }: BannerProps) => {
    return (
        <div className={`${bgColor} text-5xl ${textColor} font-semibold italic capitalize break-all p-4 rounded-lg flex items-center justify-center  md:justify-start`}>{name}</div>
    )
}

export default memo(Banner)