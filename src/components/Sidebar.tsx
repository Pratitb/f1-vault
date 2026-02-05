import { Logo } from '../utils/assets'
import { menuLinks } from '../utils/staticTxt'
import type { MenuLinkType } from '../utils/types'
import { useCommon } from '../context/Common/CommonContext'

const Sidebar = () => {
    const { activeMenu, updateActiveMenu } = useCommon()
    const handleActiveMenuItem = (menuItem: string) => {
        updateActiveMenu?.(menuItem)
    }
    return (
        <div className='w-full max-w-[200px] flex flex-col flex-1 gap-8 shadow-soft rounded-lg p-4 border-red'>
            <img src={Logo} alt="" />
            <div className='flex flex-col gap-4'>
                {menuLinks?.map?.((link: MenuLinkType) => <div key={link?.name} className={`bg-gray-100 text-xl font-medium capitalize px-4 py-2 border rounded-lg cursor-pointer ${activeMenu?.includes?.(link?.name ?? '') ? 'border border-red text-red bg-white ' : ''}`} onClick={() => handleActiveMenuItem?.(link?.name ?? 'races')}>
                    <>{link?.icon}</>
                    <p className={`whitespace-nowrap ${activeMenu?.includes?.(link?.name ?? '') ? 'border-red text-red bg-white ' : ''}`}>{link?.name}</p>
                </div>)}
            </div>
        </div>
    )
}

export default Sidebar