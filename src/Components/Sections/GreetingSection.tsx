import MdBorderBtn from '../../UI/Buttons/MdBorderBtn';

function GreetingSection() {
    const dateUser = new Date();
    const hours = dateUser.getHours();
    let greeting = '';

    if (hours < 12) {
        greeting = 'Good Morning';
    } else if (hours < 17) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    return (
        <section className='grid ml-5 mr-5 mb-24 mt-40 md:grid-cols-2 md:mx-auto md:mb-28 md:mt-40 md:w-11/12 lg:w-9/12 lg:my-32 xl:w-8/12 xl:mb-36 xl:mt-52'>
            <section className='col-span-2'>
                <h2 className='text-3xl font-bold text-gray-blue-700 mb-3 md:mb-5 md:text-4xl'>
                    {greeting}
                </h2>
                <p className='text-4xl font-bold text-gray-blue-800 mb-3 md:mb-5 md:text-5xl'>
                    My name is Jacob Moore
                </p>
                <p className='text-xl text-gray-blue-950 mb-7 md:mb-10 md:text-2xl'>
                    I am a full-stack software engineer at{' '}
                    <a
                        href='https://www.webfx.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1 underline'
                    >
                        WebFX
                        <svg
                            className='fill-gray-blue-950'
                            xmlns='http://www.w3.org/2000/svg'
                            height='24px'
                            viewBox='0 -960 960 960'
                            width='24px'
                        >
                            <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z' />
                        </svg>
                    </a>
                    , a digital marketing company, where I work on our{' '}
                    <a
                        href='https://www.webfx.com/technology/revenuecloudfx/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1 underline'
                    >
                        RevenueCloudFX
                        <svg
                            className='fill-gray-blue-950'
                            xmlns='http://www.w3.org/2000/svg'
                            height='24px'
                            viewBox='0 -960 960 960'
                            width='24px'
                        >
                            <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z' />
                        </svg>
                    </a>{' '}
                    platform. In this role, I focus primarily on building and
                    maintaining event-driven data pipelines with{' '}
                    <a
                        href='https://www.webfx.com/technology/pubsub/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1 underline'
                    >
                        Pub/Sub
                        <svg
                            className='fill-gray-blue-950'
                            xmlns='http://www.w3.org/2000/svg'
                            height='24px'
                            viewBox='0 -960 960 960'
                            width='24px'
                        >
                            <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z' />
                        </svg>
                    </a>{' '}
                    and other technologies.
                </p>
                <MdBorderBtn
                    link='https://1drv.ms/w/s!AsBprLAmKhHYkVxUv4jgMH8kx7K9?e=5Pr76y'
                    text='Resume'
                    blankTarget={true}
                />
            </section>
        </section>
    );
}

export default GreetingSection;
