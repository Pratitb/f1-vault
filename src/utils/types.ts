import type { ReactNode } from "react";

export interface ContextProps {
    children: ReactNode
}

export interface SeasonDataProps {
    api?: string
    url?: string
    limit?: number
    offset?: number
    total?: number
    season?: number
    championship?: Championship
    races?: RaceType[]
    drivers_championship?: DriversChampionship[]
    constructors_championship?: ConstructorsChampionship[]

}

export interface Championship {
    championshipId?: string
    championshipName?: string
    url?: string
    year?: number
}

export interface RaceType {
    raceId?: string
    championshipId?: string
    raceName?: string
    schedule?: Schedule
    laps?: number
    round?: number
    url?: string
    fast_lap?: FastLap
    circuit?: Circuit
    winner?: Winner
    teamWinner?: TeamWinner
}

export interface Schedule {
    race?: Race2
    qualy?: Qualy
    fp1?: Fp1
    fp2?: Fp2
    fp3?: Fp3
    sprintQualy?: SprintQualy
    sprintRace?: SprintRace
}

export interface Race2 {
    date?: string
    time?: string
}

export interface Qualy {
    date?: string
    time?: string
}

export interface Fp1 {
    date?: string
    time?: string
}

export interface Fp2 {
    date?: string
    time?: string
}

export interface Fp3 {
    date?: string
    time?: string
}

export interface SprintQualy {
    date?: string
    time?: string
}

export interface SprintRace {
    date?: string
    time?: string
}

export interface FastLap {
    fast_lap?: string
    fast_lap_driver_id?: string
    fast_lap_team_id?: string
}

export interface Circuit {
    circuitId?: string
    circuitName?: string
    country?: string
    city?: string
    circuitLength?: string
    lapRecord?: string
    firstParticipationYear?: number
    corners?: number
    fastestLapDriverId?: string
    fastestLapTeamId?: string
    fastestLapYear?: number
    url?: string
}

export interface Winner {
    driverId?: string
    name?: string
    surname?: string
    country?: string
    birthday?: string
    number?: number
    shortName?: string
    url?: string
}

export interface TeamWinner {
    teamId?: string
    teamName?: string
    country?: string
    firstAppearance?: number
    constructorsChampionships?: number
    driversChampionships?: number
    url?: string
}
export interface DriversChampionship {
    classificationId: number
    driverId: string
    teamId: string
    points: number
    position: number
    wins: number
    driver: DriverType
    team: TeamWinner
}
export interface ConstructorsChampionship {
    classificationId: number
    teamId: string
    points: number
    position: number
    wins: number
    team: TeamWinner
}

// PAST SEASON
export interface PastSeasonType {
    api?: string
    url?: string
    limit?: number
    offset?: number
    total?: number
    championships?: Championship[]
}

// DRIVERS
export interface DriversDataType {
    api: string
    url: string
    limit: number
    offset: number
    total: number
    season: number
    championshipId: string
    drivers: DriverType[]
}

export interface DriverType {
    driverId: string
    name: string
    surname: string
    nationality: string
    birthday: string
    number: number
    shortName: string
    url: string
    teamId: string
}

export interface DriverCardProps {
    number?: number
    shortName?: string
    team?: string
    fullName?: string
    nation?: string
}


export interface RaceContextProps {
    raceRound?: number | null
    updateRaceRound?: (round: number | null) => void
    seasonYear?: number
    updateSeasonYear?: (value: number) => void
    seasonData?: SeasonDataProps
    raceData?: RaceType[]
    updateSeasonData?: (data: SeasonDataProps) => void
    updateRaceData?: (data: RaceType[]) => void
}

export interface RaceCompProps {
    year?: number
    round?: number
    laps?: number
    location?: string
    name?: string
    winner?: string
}

export interface ErrorProps {
    errorMsg?: string
    color?: ErrorColors
}

export interface LoaderProps {
    sizeVal: number
}

export type ErrorColors = 'primary' | 'red'

export interface MenuLinkType {
    name?: string
    icon?: ReactNode
}

export interface CommonContextProps {
    standingType?: string
    updateStandingType?: (standing: string) => void
    selectedYear?: number
    updateSelectedYear?: (year: number) => void
    activeMenu?: string
    updateActiveMenu?: (value: string) => void
}

export interface SeasonCardProps {
    year?: number
    name?: string
    url?: string
}

export interface BannerProps {
    name?: string
    bgColor?: string
    textColor?: string
}
export interface RacePageProps {
    getRaceData?: RaceType[]
    getCurrentLoading?: boolean
    getCurrentError?: boolean
    getSeasonYear?: number
}

export interface DriversPageProps {
    getDriversData?: DriverType[]
    getDriversLoading?: boolean
    getDriversError?: boolean
}

export interface SeasonsPageProps {
    getSeaonsData?: Championship[]
    getSeasonsLoading?: boolean
    getSeasonsError?: boolean
}

export interface MenuItemProps {
    linkName?: string
    getActionFn: () => void
    linkIcon?: ReactNode
    activeItem?: boolean
    tabVariant?: TabVariant
}

export const buttonVariants = {
    primary: 'bg-gray-700 text-white font-semibold px-8',
    secondary: 'bg-gray-200 text-black',
    tertiary: 'bg-transparent text-bgPrime',
} as const;
export type ButtonVariant = keyof typeof buttonVariants;

export interface ButtonProps {
    trailingIcon?: React.ReactNode
    name?: string
    leadingIcon?: React.ReactNode
    variant?: ButtonVariant
    getActionFn?: () => void
}

export interface TabProps {
    name?: string
}

export type TabVariant = 'primary' | 'secondary'

export interface StandingsProps {
    driversStandingsData?: DriversChampionship[]
    driversStandingsLoading?: boolean
    getConstructorData?: ConstructorsChampionship[]
    getConstructorLoading?: boolean
}
export interface DropdownProps {
    getOptionsVisibility?: boolean
    getOptionsToggle?: () => void
    selectedValue?: string | number
    getOptions?: number[]
    getSelectedOption?: (year: number) => void
}