import MdBorderBtn from '../../UI/Buttons/MdBorderBtn';

const experience = [
    {
        company: 'WebFX',
        title: 'Software Engineer',
        description: 'I am a full-stack software engineer at WebFX',
        date: 'Feb 2024 - Present',
    },
    {
        company: 'WebFX',
        title: 'Web Developer',
        description: 'I am a full-stack software engineer at WebFX',
        date: 'Jul 2023 - Feb 2024',
    },
    {
        company: 'WebFX',
        title: 'Jr Web Developer',
        description: 'I am a full-stack software engineer at WebFX',
        date: 'Jul 2022 - Jul 2023',
    },
];

function GreetingSection() {
    return (
        <section className='grid ml-5 mr-5 mb-24 mt-40 md:grid-cols-2 gap-10 md:mx-auto md:mb-28 md:mt-40 md:w-11/12 lg:w-9/12 lg:my-32 xl:w-8/12 xl:mb-36 xl:mt-52'>
            <section className='col-span-1'>
                <p className='text-4xl font-bold text-gray-blue-800 mb-3 md:mb-5 md:text-5xl'>
                   Jacob Moore
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
            <section className='col-span-1 space-y-4'>
                {experience.map((exp) => (
                    <div
                        key={exp.company}
                        className='bg-white/20 backdrop-blur-sm p-4 rounded-lg cursor-pointer shadow-lg border border-white/30 transition-all duration-200 ease-in-out hover:shadow-xl hover:bg-white/30 hover:scale-[1.02]' // Added hover effect classes
                    >
                        <h3 className='text-lg font-semibold text-gray-blue-900 mb-1'>
                            {exp.company}
                        </h3>
                        <p className='text-md font-medium text-gray-blue-800'> {/* Removed bottom margin */}
                            {exp.title}
                        </p>
                        {/* Added date display */}
                        <p className='text-xs text-gray-blue-600 mb-2'>
                            {exp.date} {/* Assuming exp object has a 'date' property */}
                        </p>
                        <p className='text-sm text-gray-blue-700'>
                            {exp.description}
                        </p>
                    </div>
                ))}
            </section>
        </section>
    );
}

export default GreetingSection;
