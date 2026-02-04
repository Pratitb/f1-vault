import Race from "./components/Race";
import type { Championship, DriversDataType, DriverType, PastSeasonType, RaceType, SeasonDataProps } from "./utils/types";
import Header from "./components/Header";
import { useQuery } from "@tanstack/react-query";
import Loader from "./components/Loader";
import ErrorMsg from "./components/ErrorMsg";
import { racesError } from "./utils/staticTxt";
import Menu from "./components/Menu";
import { getData } from "./utils/fetchData";
import { useCommon } from "./context/Common/CommonContext";
import SeasonCard from "./components/SeasonCard";
import DriverCard from "./components/DriverCard";

const App = () => {
  const { activeMenu } = useCommon()

  // RACES
  const { data: currentData, isLoading: isCurrentLoading, isError: isCurrentError } = useQuery<SeasonDataProps>({
    queryKey: ['current-season'],
    queryFn: () => getData<SeasonDataProps>('current'),
    enabled: activeMenu?.includes('races')
  })
  const seasonYear = currentData?.season
  const raceData = currentData?.races

  // PAST SEASONS
  const { data: pastData, isLoading: isPastLoading, isError: isPastError } = useQuery<PastSeasonType>({
    queryKey: ['past-seasons'],
    queryFn: () => getData<PastSeasonType>('seasons'),
    enabled: activeMenu?.includes('past')
  })
  const pastSeaons = pastData?.championships

  // DRIVERS
  const { data: driversData, isLoading: isDriversLoading, isError: isDriversError } = useQuery<DriversDataType>({
    queryKey: ['drivers'],
    queryFn: () => getData<DriversDataType>('current/drivers'),
    enabled: activeMenu?.includes('drivers')
  })
  const drivers = driversData?.drivers

  return (
    <>
      <div className="container">
        <Header />
        <div className="flex flex-col gap-4">
          <Menu />
          <>
            {/* CURRENT SEASON */}
            {currentData && activeMenu?.includes('races') &&
              <div className="cards-row">
                {isCurrentLoading ? <Loader sizeVal={40} /> : isCurrentError ? <ErrorMsg errorMsg={racesError} color="red" /> : raceData && raceData?.map((race: RaceType) => <Race key={race?.raceId} laps={race?.laps} name={race?.raceName} round={race?.round} year={seasonYear} winner={`${race?.winner?.name ?? 'NA'} ${race?.winner?.surname ?? ''}`} location={race?.circuit?.city} />)}
              </div>
            }

            {/* DRIVERS */}
            {drivers && activeMenu?.includes('drivers') &&
              <div className="cards-row">
                {isDriversLoading ? <Loader sizeVal={40} /> : isDriversError ? <ErrorMsg errorMsg={racesError} color="red" /> : drivers && drivers?.map((driver: DriverType) => <DriverCard key={driver?.driverId} fullName={`${driver?.name} ${driver?.surname}`} nation={driver?.nationality} number={driver?.number} shortName={driver?.shortName} team={driver?.teamId} />)}
              </div>
            }

            {/* PAST SEASONS */}
            {pastSeaons && activeMenu?.includes('past') &&
              <div className="cards-row">
                {isPastLoading ? <Loader sizeVal={40} /> : isPastError ? <ErrorMsg /> : pastSeaons?.slice(1)?.map?.((season: Championship) => <SeasonCard key={season?.championshipId} name={season?.championshipName} url={season?.url} year={season?.year} />)}
              </div>
            }
          </>
        </div >
      </div>
    </>
  );
}

export default App;
