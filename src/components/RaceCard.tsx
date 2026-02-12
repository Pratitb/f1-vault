import { FaFlagCheckered } from "react-icons/fa"
import type { RaceCompProps } from "../utils/types"
// import Button from "./Button"
import { useNavigate } from "react-router-dom"
import { useRace } from "../context/Race/RaceContext"

const RaceCard = ({ year, round, laps, location, name, winner }: RaceCompProps) => {
    const navigate = useNavigate()
    const { updateRaceRound } = useRace()
    const handleRace = () => {
        updateRaceRound?.(round ?? null)
        navigate(`/races/${year}/${round}`)
    }
    return (
        <div className=" flex flex-col flex-1 w-full bg-gray-100 rounded-lg text-primary p-4 md:basis-[48%] lg:basis-[31%] xl:basis-[32%]" onClick={handleRace}>
            {/* year, round, laps */}
            <div className="flex justify-between mb-2">
                <p className="text-sm">{year}</p>
                <div className="flex gap-2 text-sm capitalize">
                    <p>round: {round}</p>
                    <p>laps: {laps}</p>
                </div>
            </div>
            {/* name, location */}
            <div className="flex-1 mb-4">
                <p className=" text-lg leading-5">{name}</p>
                <p className=" text-sm leading-5">{location}</p>
            </div>
            {/* winner */}
            <div className="flex items-center gap-2 font-bold text-3xl mb-4">
                <FaFlagCheckered />
                <p className="lg: text-2xl">{winner}</p>
            </div>
            {/* <Button variant="primary" name="details" /> */}
        </div>
    )
}

export default RaceCard