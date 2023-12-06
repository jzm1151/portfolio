function GreetingSection() {
    const dateUser = new Date()
    const hours = dateUser.getHours()   
    let greeting = ''

    if (hours < 12) {
        greeting = 'Good Morning!'
    } else if (hours < 17) {
        greeting = 'Good Afternoon!'
    } else {
        greeting = 'Good Evening!'
    }

    return (
        <section>
            <h2 className='text-4xl font-bold text-grey-blue-900' >{greeting}</h2>
        </section>
    )
}

export default GreetingSection