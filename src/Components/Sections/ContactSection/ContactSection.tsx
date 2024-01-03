import BorderBtn from "../../../UI/Buttons/MdBorderBtn"
import InfoTile from "../../../UI/InfoTiles/InfoTile"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const infoTiles = [
    {
        id: 1,
        icon: <FaEnvelope />,
        info: 'jakemoore271@outlook.com'
    },
    {
        id: 2,
        icon: <FaPhoneAlt />,
        info: '484-350-9658'
    },
    {
        id: 3,
        icon: <FaMapMarkerAlt />,
        info: 'Harrisburg, PA, USA'
    }
]

function ContactSection() {
    return (
        <div className='flex justify-center items-center mt-14 md:mt-24 mx-5'>
            <div className='grid grid-cols-2 gap-4 md:gap-10 md:grid-cols-2 md:w-11/12 lg:w-9/12 xl:w-8/12' id='contact'>
                <div className='col-span-2 font-bold text-3xl md:text-4xl lg:text-5xl'>
                    <div className='w-full flex justify-center items-center gap-4'>
                        <h2>Want to talk?</h2>
                        <div className='bg-gradient-to-r from-gray-blue-700 to-gray-blue-900 h-2 grow'></div>
                    </div>
                </div>
                <div className='col-span-2 md:col-span-1 py-4 md:py-10 flex flex-col justify-center'>
                    <div className='text-gray-blue-700 text-2xl md:text-3xl font-bold mb-4'>Lets get in touch.</div>
                    <div className='text-xl'>
                        Thank you for taking a look at my portfolio. I am always open to new opportunities and would love to hear from you. Feel free to reach out to me at any time and I will get back to you as soon as possible.
                    </div>
                    <div className='w-fit mt-8'>
                        <BorderBtn link='mailto:jakemoore271@outlook.com' text='Send Email' />
                    </div>
                </div>
                <div className='col-span-2 md:col-span-1'></div>
                <div className='col-span-2 grid grid-cols-3 gap-4'>
                    {
                        infoTiles.map(infoTile => (
                            <InfoTile key={infoTile.id} info={infoTile.info} icon={infoTile.icon} className='col-span-3 md:col-span-1' />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactSection