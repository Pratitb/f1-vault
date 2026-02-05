import { baseUrl } from "./apiConfig"

export const getData = async <DataType>(endPoint: string): Promise<DataType> => {
    const response = await fetch(`${baseUrl}/${endPoint}`)

    if (!response.ok) {
        throw new Error('Failed to fetch')
    }

    const data: DataType = await response.json()
    return data
}