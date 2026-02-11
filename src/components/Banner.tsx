import type { BannerProps } from "../utils/types"

const Banner = ({ name }: BannerProps) => {
    return (
        <div className='bg-red capitalize text-5xl p-4 rounded-lg flex items-center justify-center break-all md:justify-start text-gray-100 font-semibold italic'>{name}</div>
    )
}

export default Banner