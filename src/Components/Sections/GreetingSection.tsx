import MdBorderBtn from '../../UI/Buttons/MdBorderBtn'

function GreetingSection() {
    const dateUser = new Date()
    const hours = dateUser.getHours()   
    let greeting = ''

    if (hours < 12) {
        greeting = 'Good Morning'
    } else if (hours < 17) {
        greeting = 'Good Afternoon'
    } else {
        greeting = 'Good Evening'
    }

    return (
        <section className='grid ml-5 mr-5 mb-24 mt-40 md:grid-cols-2 md:mx-auto md:mb-28 md:mt-40 md:w-11/12 lg:w-9/12 lg:my-32 xl:w-8/12 xl:mb-36 xl:mt-52'>
            <section className='col-span-2'>
                <h2 className='text-3xl font-bold text-gray-blue-700 mb-3 md:mb-5 md:text-4xl'>{greeting}</h2>
                <p className='text-4xl font-bold text-gray-blue-800 mb-3 md:mb-5 md:text-5xl'>My name is Jacob Moore</p>
                <p className='text-xl text-gray-blue-950 mb-7 md:mb-10 md:text-2xl'>I am a full-stack developer specializing in Laravel and Alpine.js</p>
                <MdBorderBtn link='https://1drv.ms/w/s!AsBprLAmKhHYkVxUv4jgMH8kx7K9?e=5Pr76y' text='Resume' blankTarget={true} />
            </section>
        </section>
    )
}

export default GreetingSection