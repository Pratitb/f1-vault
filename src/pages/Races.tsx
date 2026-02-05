import Loader from '../components/Loader'
import ErrorMsg from '../components/ErrorMsg'
import RaceCard from '../components/RaceCard'
import type { RacePageProps, RaceType } from '../utils/types'
import { useCommon } from '../context/Common/CommonContext'
import { racesError } from '../utils/staticTxt'

const Races = ({ getRaceData, getCurrentLoading, getCurrentError, getSeasonYear }: RacePageProps) => {
    const { activeMenu } = useCommon()
    return (
        <>
            {getRaceData && activeMenu?.includes('races') &&
                <div className="cards-row">
                    {getCurrentLoading ? <Loader sizeVal={40} /> : getCurrentError ? <ErrorMsg errorMsg={racesError} color="red" /> : getRaceData && getRaceData?.map((race: RaceType) => <RaceCard key={race?.raceId} laps={race?.laps} name={race?.raceName} round={race?.round} year={getSeasonYear} winner={`${race?.winner?.name ?? 'NA'} ${race?.winner?.surname ?? ''}`} location={race?.circuit?.city} />)}
                </div>
            }
        </>
    )


}

export default Races