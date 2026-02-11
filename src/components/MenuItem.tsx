import type { MenuItemProps } from '../utils/types'

const MenuItem = ({ linkName, getActionFn, linkIcon, activeItem, tabVariant = 'primary' }: MenuItemProps) => {

    const menuItemMap = {
        primary: 'font-medium text-lg px-4 py-1',
        secondary: 'font-medium text-sm px-3 py-1'
    }
    return (
        <div className={`bg-gray-100 capitalize  border-2 rounded-lg shadow cursor-pointer ${activeItem ? 'border-red text-red bg-white ' : ''}`} onClick={getActionFn}>
            {linkIcon && <>{linkIcon}</>}
            <p className={`whitespace-nowrap ${menuItemMap[tabVariant]} `}>{linkName}</p>
        </div>
    )
}

export default MenuItem