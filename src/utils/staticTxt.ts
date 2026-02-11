import type { ConstructorsChampionship, DriversChampionship } from "./types"

export const racesError = `Failed to fetch races. Please try again later`

export const menuLinks = [
    { name: 'home', icon: '' },
    { name: 'races', icon: '' },
    { name: 'drivers', icon: '' },
    { name: 'standings', icon: '' },
    { name: 'seasons', icon: '' },
]

export const standingTabs = ['drivers', 'constructors']

export const driversTable = [
    { name: 'position', maxWidth: '200px', center: true, selector: (row: DriversChampionship) => row?.position },
    { name: 'full name', minWidth: '200px', selector: (row: DriversChampionship) => `${row?.driver?.name} ${row?.driver?.surname}` },
    { name: 'wins', maxWidth: '200px', center: true, selector: (row: DriversChampionship) => row?.wins },
    { name: 'points', maxWidth: '200px', center: true, selector: (row: DriversChampionship) => row?.points },
]
export const constructorsTable = [
    { name: 'position', maxWidth: '200px', center: true, selector: (row: ConstructorsChampionship) => row?.position ?? 0 },
    { name: 'team', minWidth: '200px', selector: (row: ConstructorsChampionship) => row?.team?.teamName ?? '-' },
    { name: 'wins', maxWidth: '200px', center: true, selector: (row: ConstructorsChampionship) => row?.wins ?? 'NA' },
    { name: 'points', maxWidth: '200px', center: true, selector: (row: ConstructorsChampionship) => row?.points ?? 'NA' },
]

export const seasonYears: number[] = []
const current = new Date()?.getFullYear()

for (let index = current - 1; index > 1996; index--) {
    seasonYears?.push(index)
}