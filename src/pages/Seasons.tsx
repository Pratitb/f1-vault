import ErrorMsg from "../components/ErrorMsg"
import Loader from "../components/Loader"
import SeasonCard from "../components/SeasonCard"
import { useCommon } from "../context/Common/CommonContext"
import type { Championship, SeasonsPageProps } from "../utils/types"

const Seasons = ({ getSeaonsData, getSeasonsLoading, getSeasonsError }: SeasonsPageProps) => {
    const { activeMenu } = useCommon()
    return (
        <>
            {/* PAST SEASONS */}
            {getSeaonsData && activeMenu?.includes('seasons') &&
                <div className="cards-row">
                    {getSeasonsLoading ? <Loader sizeVal={40} /> : getSeasonsError ? <ErrorMsg /> : getSeaonsData?.slice(1)?.map?.((season: Championship) => <SeasonCard key={season?.championshipId} name={season?.championshipName} url={season?.url} year={season?.year} />)}
                </div>
            }
        </>
    )
}

export default Seasons