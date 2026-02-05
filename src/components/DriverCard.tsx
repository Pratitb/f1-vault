import type { DriverCardProps } from '../utils/types'

const DriverCard = ({ number, shortName, team, fullName, nation }: DriverCardProps) => {
    return (
        <div className='bg-gray-100 w-full min-h-[140px] flex-1 flex gap-4 px-6 py-4 rounded-lg md:basis-[48%] lg:basis-[32%]'>
            <div className='flex flex-col items-center'>
                <p className='font-semibold text-4xl lg:text-5xl text-red'>{number}</p>
                <p className='text-sm uppercase'>{shortName}</p>
            </div>
            <div>
                <p className='font-bold text-2xl lg:text-3xl'>{fullName}</p>
                <p className='text-lg font-semibold capitalize'>{team}</p>
                <p className='text-sm'>{nation}</p>
            </div>
        </div>
    )
}

export default DriverCard