import MdBorderBtn from "../../UI/Buttons/MdBorderBtn"

function GreetingSection(props: {position?: string}) {
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
        <section className={props.position}>
            <h2 className='text-3xl font-bold text-gray-blue-700 mb-3 md:mb-5 md:text-4xl'>{greeting}</h2>
            <p className='text-4xl font-bold text-gray-blue-800 mb-3 md:mb-5 md:text-5xl'>My name is Jacob Moore</p>
            <p className='text-xl text-gray-blue-950 mb-7 md:mb-10 md:text-2xl'>I am a full-stack developer specializing in Laravel and Alpine.js</p>
            <MdBorderBtn link='#resume' text='Resume' blankTarget={true} />
        </section>
    )
}

export default GreetingSection