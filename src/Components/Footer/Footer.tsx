import SiteLogo from "../../UI/Logos/SiteLogo"
import { FaGithub } from "react-icons/fa"

function Footer() {
    return (
        <div className='h-20 w-full flex flex-col justify-center items-center bg-gray-blue-600'>
            <div className='text-xl xl:text-3xl font-bold'>
                <SiteLogo />
            </div>
            <a href='https://github.com/jzm1151/portfolio' target='_blank'>Designed and Built by Jacob Moore <FaGithub className='inline'/></a>
        </div>
    )
}

export default Footer