import { Link } from "react-router-dom"
import type { SeasonCardProps } from "../utils/types"
import { MdArrowOutward } from "react-icons/md"

const SeasonCard = ({ year, name, url }: SeasonCardProps) => {
    return (
        <div className='card card-row'>
            <p>{year}</p>
            <p className="card_main_text mb-3">{name}</p>
            <div className="flex items-center gap-1">
                <Link to={url ?? '/'} target="_blank" className="text-primary text-sm capitalize underline">visit wiki</Link>
                <MdArrowOutward />
            </div>
        </div>
    )
}

export default SeasonCard