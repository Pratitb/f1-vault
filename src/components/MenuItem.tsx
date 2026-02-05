import { useCommon } from '../context/Common/CommonContext'
import type { MenuItemProps } from '../utils/types'

const MenuItem = ({ linkName, getActionFn, linkIcon }: MenuItemProps) => {
    const { activeMenu } = useCommon()
    return (
        <div className={`bg-gray-100 font-medium capitalize px-4 py-1 lg:py-2 border-2 rounded-lg shadow cursor-pointer ${activeMenu?.includes?.(linkName ?? '') ? 'border-red text-red bg-white ' : ''}`} onClick={getActionFn}>
            {linkIcon && <>{linkIcon}</>}
            <p className={`whitespace-nowrap text-xl ${activeMenu?.includes?.(linkName ?? '') ? 'border-red text-red bg-white ' : ''}`}>{linkName}</p>
        </div>
    )
}

export default MenuItem