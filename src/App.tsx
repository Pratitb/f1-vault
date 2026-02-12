import type { DriversDataType, PastSeasonType, SeasonDataProps } from "./utils/types";
import Header from "./components/Header";
import { useQuery } from "@tanstack/react-query";
import Menu from "./components/Menu";
import { getData } from "./utils/fetchData";
import { useCommon } from "./context/Common/CommonContext";
import Banner from "./components/Banner";
import { useAvailableHeight } from "./hooks/useAvailableHeight";
import { useCallback, useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import { useMediaQuery } from "react-responsive";
import { Route, Routes, useLocation } from "react-router-dom";
import Races from "./pages/Races";
import Drivers from "./pages/Drivers";
import Seasons from "./pages/Seasons";
import Home from "./pages/Home";
// import Race from "./pages/Race";
import Standings from "./pages/Standings";
import Dropdown from "./components/Dropdown";
import { seasonYears } from "./utils/staticTxt";

const App = () => {
  const { selectedYear, activeMenu, updateActiveMenu, updateSelectedYear } = useCommon()
  const { standingType } = useCommon()
  const main = useRef<HTMLDivElement | null>(null)
  const [optionsVisible, setOptionsVisible] = useState(false)
  const height = useAvailableHeight(main, 20)
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' })
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.replace('/', '') || 'home'
    updateActiveMenu?.(path)
  })

  // RACES
  const { data: currentData, isLoading: isCurrentLoading, isError: isCurrentError } = useQuery<SeasonDataProps>({
    queryKey: ['current-season', selectedYear],
    queryFn: () => getData<SeasonDataProps>(`${selectedYear}`),
    // queryFn: () => getData<SeasonDataProps>('current'),
    enabled: activeMenu?.includes('races')
  })
  const seasonYear = currentData?.season
  const raceData = currentData?.races

  // DRIVERS
  const { data: driversData, isLoading: isDriversLoading, isError: isDriversError } = useQuery<DriversDataType>({
    queryKey: ['drivers', selectedYear],
    queryFn: () => getData<DriversDataType>(`${selectedYear}/drivers`),
    enabled: activeMenu?.includes('drivers')
  })
  const drivers = driversData?.drivers

  // SEASONS
  const { data: seasonsData, isLoading: isSeasonsLoading, isError: isSeasonsError } = useQuery<PastSeasonType>({
    queryKey: ['past-seasons'],
    queryFn: () => getData<PastSeasonType>('seasons'),
    enabled: activeMenu?.includes('seasons')
  })
  const seasons = seasonsData?.championships

  // STANDINGS
  // drivers
  const { data: driversStandings, isLoading: driversStandingsLoading } = useQuery<SeasonDataProps>({
    queryKey: ['driverStandings', selectedYear],
    queryFn: () => getData<SeasonDataProps>(`${selectedYear}/drivers-championship`),
    enabled: standingType === 'drivers'
  })
  const finalDriversStandings = driversStandings?.drivers_championship

  // constructors
  const { data: constructorStandings, isLoading: constructorStandingsLoading } = useQuery<SeasonDataProps>({
    queryKey: ['constructorStandings', selectedYear],
    queryFn: () => getData<SeasonDataProps>(`${selectedYear}/constructors-championship`),
    enabled: standingType === 'constructors'
  })
  const finalConstructorStandings = constructorStandings?.constructors_championship

  const handleOptionsVisibility = useCallback(() => {
    setOptionsVisible(!optionsVisible)
  }, [optionsVisible])

  const handleOptionSelect = useCallback((year: number) => {
    updateSelectedYear?.(year)
    setOptionsVisible(false)
  }, [updateSelectedYear])

  return (
    <>
      <div className="p-4 lg:flex lg:gap-8">

        {/* SIDEBAR */}
        {!isMobile && <Sidebar />}

        {/* HEADER */}
        {isMobile && <Header />}
        <div className="flex flex-col gap-4 flex-1">
          <Banner name={activeMenu} bgColor="bg-red" textColor="text-gray-100" />

          {/* DROPDOWN */}
          <div className="flex items-center gap-4">
            {isMobile && <Dropdown getOptionsVisibility={optionsVisible} getOptionsToggle={handleOptionsVisibility} getSelectedOption={handleOptionSelect} getOptions={seasonYears} selectedValue={selectedYear} />}
            <p className="capitalize font-semibold text-xl flex-1">data for {selectedYear}</p>
          </div>

          {/* MOBILE MENU */}
          {isMobile && <Menu />}

          {/* MAIN */}
          <div ref={main} style={{ height, overflowY: 'auto' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/races' element={<Races getCurrentError={isCurrentError} getCurrentLoading={isCurrentLoading} getRaceData={raceData} getSeasonYear={seasonYear} />} />
              {/* <Route path='/races/:year/:round' element={<Race />} /> */}
              <Route path='/drivers' element={<Drivers getDriversData={drivers} getDriversError={isDriversError} getDriversLoading={isDriversLoading} />} />
              <Route path="/standings" element={<Standings driversStandingsData={finalDriversStandings} driversStandingsLoading={driversStandingsLoading} getConstructorLoading={constructorStandingsLoading} getConstructorData={finalConstructorStandings} />} />
              <Route path='/seasons' element={<Seasons getSeaonsData={seasons} getSeasonsError={isSeasonsError} getSeasonsLoading={isSeasonsLoading} />} />
            </Routes>
          </div>
        </div >
      </div>
    </>
  );
}

export default App;
