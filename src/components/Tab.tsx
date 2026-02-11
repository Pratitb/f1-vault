import type { TabProps } from "../utils/types"

const Tab = ({ name }: TabProps) => {
    return (
        <div className="bg-gray-100 border-2 flex-1 rounded-lg px-3 py-2 capitalize font-semibold">{name}</div>
    )
}

export default Tab