import { Logo } from '../utils/assets'
import { menuLinks } from '../utils/staticTxt'
import type { MenuLinkType } from '../utils/types'
import { useCommon } from '../context/Common/CommonContext'
import { useNavigate } from 'react-router-dom'
import MenuItem from './MenuItem'

const Sidebar = () => {
    const { updateActiveMenu } = useCommon()
    const navigate = useNavigate()

    const handleActiveMenuItem = (menuItem: string) => {
        updateActiveMenu?.(menuItem)
        navigate?.(`/${menuItem}`)
    }

    return (
        <div className='w-full max-w-[200px] flex flex-col flex-1 gap-8 shadow-soft rounded-lg p-4 border-t-4 border-red'>
            <img src={Logo} alt="" />
            <div className='flex flex-col gap-4'>
                {menuLinks?.map?.((link: MenuLinkType) => <MenuItem key={link?.name} linkName={link?.name} getActionFn={() => handleActiveMenuItem?.(link?.name ?? '')} />)}
            </div>
        </div>
    )
}

export default Sidebar