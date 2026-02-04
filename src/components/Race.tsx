import { FaFlagCheckered } from "react-icons/fa"
import type { RaceCompProps } from "../utils/types"

const Race = ({ year, round, laps, location, name, winner }: RaceCompProps) => {
    return (
        <div className="flex w-full gap-4 md:basis-[48%] lg:basis-[32%]">
            <p className="text-primary font-bold">{round}.</p>
            <div className=" flex flex-col  bg-gray-100 rounded-lg text-primary p-4 flex-1">
                {/* year, round, laps */}
                <div className="flex justify-between">
                    <p className="text-sm">{year}</p>
                    <div className="flex gap-2 text-sm capitalize mb-2">
                        <p>round: {round}</p>
                        <p>laps: {laps}</p>
                    </div>
                </div>
                {/* name, location */}
                <div className="flex-1">
                    <p className=" text-lg leading-5 mb-1">{name}</p>
                    <p className=" text-sm leading-5 mb-2">{location}</p>
                </div>
                {/* winner */}
                <div className="flex gap-2 font-bold text-2xl">
                    <FaFlagCheckered />
                    <p className="md:text-lg md:leading-5">{winner}</p>
                </div>
            </div>
        </div>
    )
}

export default Race