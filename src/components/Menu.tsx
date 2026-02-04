import { useCommon } from '../context/Common/CommonContext'
import { menuLinks } from '../utils/staticTxt'
import type { MenuLinkType } from '../utils/types'

const Menu = () => {
    const { activeMenu, updateActiveMenu } = useCommon()
    const handleActiveMenuItem = (menuItem: string) => {
        updateActiveMenu?.(menuItem)
    }
    return (
        <div className='flex gap-2 max-w-fit overflow-x-auto'>
            {menuLinks?.map((link: MenuLinkType) =>
                <div key={link?.name} className={`bg-gray-100 font-medium capitalize px-4 py-1 border-2 rounded-lg shadow cursor-pointer ${activeMenu?.includes?.(link?.name ?? '') ? 'border-red text-red bg-white ' : ''}`} onClick={() => handleActiveMenuItem?.(link?.name ?? 'races')}>
                    <>{link?.icon}</>
                    <p className={`whitespace-nowrap ${activeMenu?.includes?.(link?.name ?? '') ? 'border-red text-red bg-white ' : ''}`}>{link?.name}</p>
                </div>
            )}
        </div>
    )
}

export default Menu