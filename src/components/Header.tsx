import { Logo } from "../utils/assets"

const Header = () => {
    return (
        <div className="flex justify-center pb-6">
            <img src={Logo} alt='' className="max-w-28" />
        </div>
    )
}

export default Header