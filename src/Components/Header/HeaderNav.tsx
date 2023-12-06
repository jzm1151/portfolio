import { useState } from "react"
import NoBorderBtn from "../../UI/Buttons/NoBorderBtn"
import BorderBtn from "../../UI/Buttons/BorderBtn"
import MobileFullBtn from "../../UI/Buttons/Mobile/MobileFullBtn"
import MobileNoBorderBtn from "../../UI/Buttons/Mobile/MobileNoBorderBtn"

function HeaderNav() {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }

    window.addEventListener('resize', () => {
        setShowMenu(false)
    })

    return (
        <div className="relative">
            <div className='bg-gray-blue-400 w-full h-20 absolute'></div>
            <div className='w-full h-20 flex items-center justify-between p-5 md:p-10 z-100 relative'>
                <div className='flex-grow text-gray-blue-950 text-2xl md:text-4xl font-bold'>
                    Jacob Moore
                </div>
                <div className="hidden md:block">
                    <NoBorderBtn link='#about' text='About' />
                    <NoBorderBtn link='#projects' text='Projects' />
                    <NoBorderBtn link='#contact' text='Contact' />
                    <BorderBtn link='#resume' text='Resume' blankTarget={true} />
                </div>
                <div className='md:hidden'>
                    <svg className='absolute top-5 right-5 z-[9999] fill-gray-blue-950 cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"
                         onClick={toggleMenu}
                    >
                        {!showMenu ? (
                            <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/>
                        ) : (
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        )}
                    </svg>
                </div>
            </div>
            <div className={`absolute top-0 w-full h-screen bg-gray-blue-950/[.7] flex justify-end transition-all duration-200 ${showMenu ? '' : 'translate-x-[100vw]'}`}>
                <div className="bg-gray-blue-400 flex flex-col items-center justify-center h-screen w-full max-w-md relative">
                    <MobileNoBorderBtn onClick={closeMenu} link='#about' text='About' />
                    <MobileNoBorderBtn onClick={closeMenu} link='#projects' text='Projects' />
                    <MobileNoBorderBtn onClick={closeMenu} link='#contact' text='Contact' />
                    <MobileFullBtn link='#resume' text='Resume' blankTarget={true} />
                </div>
            </div>
        </div>
    )
}

export default HeaderNav