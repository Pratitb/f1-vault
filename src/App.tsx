import type { DriversDataType, PastSeasonType, SeasonDataProps } from "./utils/types";
import Header from "./components/Header";
import { useQuery } from "@tanstack/react-query";
import Menu from "./components/Menu";
import { getData } from "./utils/fetchData";
import { useCommon } from "./context/Common/CommonContext";
import Banner from "./components/Banner";
import { useAvailableHeight } from "./hooks/useAvailableHeight";
import { useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import { useMediaQuery } from "react-responsive";
import { Route, Routes, useLocation } from "react-router-dom";
import Races from "./pages/Races";
import Drivers from "./pages/Drivers";
import Seasons from "./pages/Seasons";
import Home from "./pages/Home";

const App = () => {
  const { activeMenu, updateActiveMenu } = useCommon()
  const main = useRef<HTMLDivElement | null>(null)
  const availableHeight = useAvailableHeight(main, 20)
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' })
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.replace('/', '') || 'home'
    updateActiveMenu?.(path)
  })


  // RACES
  const { data: currentData, isLoading: isCurrentLoading, isError: isCurrentError } = useQuery<SeasonDataProps>({
    queryKey: ['current-season'],
    queryFn: () => getData<SeasonDataProps>('current'),
    enabled: activeMenu?.includes('races')
  })
  const seasonYear = currentData?.season
  const raceData = currentData?.races

  // DRIVERS
  const { data: driversData, isLoading: isDriversLoading, isError: isDriversError } = useQuery<DriversDataType>({
    queryKey: ['drivers'],
    queryFn: () => getData<DriversDataType>('current/drivers'),
    enabled: activeMenu?.includes('drivers')
  })
  const drivers = driversData?.drivers

  // PAST SEASONS
  const { data: seasonsData, isLoading: isSeasonsLoading, isError: isSeasonsError } = useQuery<PastSeasonType>({
    queryKey: ['past-seasons'],
    queryFn: () => getData<PastSeasonType>('seasons'),
    enabled: activeMenu?.includes('seasons')
  })
  const seasons = seasonsData?.championships

  return (
    <>
      <div className="p-4 lg:flex lg:gap-8">
        {!isMobile && <Sidebar />}
        {isMobile && <>
          <Header />
        </>}
        <div className="flex flex-col gap-8 flex-1">
          <Banner name={activeMenu} />
          {isMobile && <Menu />}
          <div ref={main} style={{ maxHeight: availableHeight, overflow: 'hidden auto' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/races' element={<Races getCurrentError={isCurrentError} getCurrentLoading={isCurrentLoading} getRaceData={raceData} getSeasonYear={seasonYear} />} />
              <Route path='/drivers' element={<Drivers getDriversData={drivers} getDriversError={isDriversError} getDriversLoading={isDriversLoading} />} />
              <Route path='/seasons' element={<Seasons getSeaonsData={seasons} getSeasonsError={isSeasonsError} getSeasonsLoading={isSeasonsLoading} />} />
            </Routes>
          </div>
        </div >
      </div>
    </>
  );
}

export default App;
