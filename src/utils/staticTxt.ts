export const racesError = `Failed to fetch races. Please try again later`

export const menuLinks = [
    {
        name: 'home',
        icon: '',
    },
    {
        name: 'races',
        icon: '',
    },
    {
        name: 'drivers',
        icon: ''
    },
    {
        name: 'seasons',
        icon: ''
    },
]


export const seasonYears: number[] = []
const current = new Date()?.getFullYear()

for (let index = current - 1; index > 1996; index--) {
    seasonYears?.push(index)
}