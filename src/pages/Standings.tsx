import DataTable from 'react-data-table-component'
import MenuItem from '../components/MenuItem'
import { useCommon } from '../context/Common/CommonContext'
import { constructorsTable, driversTable, standingTabs } from '../utils/staticTxt'
import type { ConstructorsChampionship, DriversChampionship, StandingsProps } from '../utils/types'
import Loader from '../components/Loader'
import { standingsCustomStyles } from '../utils/standingsTableStyles'

const Standings = ({ driversStandingsData, driversStandingsLoading, getConstructorData, getConstructorLoading }: StandingsProps) => {
    const { standingType, updateStandingType } = useCommon()
    const handleStandingType = (standingType: string) => {
        updateStandingType?.(standingType)
    }
    return (
        <div className='flex flex-col flex-1 gap-4'>
            {/* TABS */}
            <div className='flex gap-2'>
                {standingTabs?.map((tab: string) => <MenuItem key={tab} tabVariant='secondary' linkName={tab} activeItem={standingType?.includes(tab)} getActionFn={() => handleStandingType?.(tab)} />)}
            </div>

            {/* TABLE */}
            {standingType === 'drivers' ? (driversStandingsLoading ? (<Loader sizeVal={40} />) : (<DataTable<DriversChampionship> columns={driversTable} data={driversStandingsData ?? []} customStyles={standingsCustomStyles} striped />)) : standingType === 'constructors' ? (getConstructorLoading ? (<Loader sizeVal={40} />) : (<DataTable<ConstructorsChampionship> columns={constructorsTable} data={getConstructorData ?? []} customStyles={standingsCustomStyles} striped />)) : null}
        </div>
    )
}

export default Standings