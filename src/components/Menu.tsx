import { useNavigate } from 'react-router-dom'
import { useCommon } from '../context/Common/CommonContext'
import { menuLinks } from '../utils/staticTxt'
import type { MenuLinkType } from '../utils/types'
import MenuItem from './MenuItem'

const Menu = () => {
    const { updateActiveMenu } = useCommon()
    const navigate = useNavigate()
    const handleActiveMenuItem = (menuItem: string) => {
        updateActiveMenu?.(menuItem)
        navigate?.(`/${menuItem}`)
    }
    return (
        <div className='flex gap-2 max-w-fit overflow-x-auto'>
            {menuLinks?.map((link: MenuLinkType) => <MenuItem key={link?.name} linkName={link?.name} getActionFn={() => handleActiveMenuItem?.(link?.name ?? '')} />)}
        </div>
    )
}

export default Menu