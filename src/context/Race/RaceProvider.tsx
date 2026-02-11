import { useState } from 'react'
import type { ContextProps, RaceType, SeasonDataProps } from '../../utils/types'
import { RaceContext } from './RaceContext'

export const RaceProvider = ({ children }: ContextProps) => {
  const [seasonData, setSeasonData] = useState<SeasonDataProps>()
  const [raceData, setRaceData] = useState<RaceType[]>([])
  const [seasonYear, setSeasonYear] = useState<number>()
  const [raceRound, setRaceRound] = useState<number | null>(null)

  const updateRaceRound = (round: number | null) => {
    setRaceRound(round)
  }

  const updateSeasonData = (data: SeasonDataProps) => {
    setSeasonData(data)
  }
  const updateRaceData = (data: RaceType[]) => {
    setRaceData(data)
  }
  const updateSeasonYear = (value: number) => {
    setSeasonYear(value)
  }
  return (
    <RaceContext.Provider value={{ raceRound, updateRaceRound, seasonYear, updateSeasonYear, seasonData, raceData, updateSeasonData, updateRaceData }}>
      {children}
    </RaceContext.Provider>
  )
}

