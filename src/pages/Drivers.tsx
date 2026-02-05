import { useCommon } from '../context/Common/CommonContext'
import Loader from '../components/Loader'
import ErrorMsg from '../components/ErrorMsg'
import { racesError } from '../utils/staticTxt'
import type { DriversPageProps, DriverType } from '../utils/types'
import DriverCard from '../components/DriverCard'

const Drivers = ({ getDriversData, getDriversLoading, getDriversError }: DriversPageProps) => {
    const { activeMenu } = useCommon()
    return (
        <>
            {getDriversData && activeMenu?.includes('drivers') &&
                <div className="cards-row">
                    {getDriversLoading ? <Loader sizeVal={40} /> : getDriversError ? <ErrorMsg errorMsg={racesError} color="red" /> : getDriversData && getDriversData?.map((driver: DriverType) => <DriverCard key={driver?.driverId} fullName={`${driver?.name} ${driver?.surname}`} nation={driver?.nationality} number={driver?.number} shortName={driver?.shortName} team={driver?.teamId} />)}
                </div>
            }
        </>
    )
}

export default Drivers