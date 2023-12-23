function ContactSection() {
    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-2 gap-4 md:gap-10 md:grid-cols-2 md:w-11/12 lg:w-9/12 xl:w-8/12' id='contact'>
                <div className='col-span-2 font-bold text-3xl md:text-4xl lg:text-5xl'>
                    <div className='w-full flex justify-center items-center gap-4'>
                        <div className='bg-gradient-to-r from-gray-blue-500 to-gray-blue-700 h-2 grow'></div>
                        <h2>Contact</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection