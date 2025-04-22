import MdBorderBtn from '../../UI/Buttons/MdBorderBtn';
import LinkIcon from '../../UI/Icons/LinkIcon';

const experience = [
    {
        company: 'WebFX',
        title: 'Software Engineer',
        description: [
            'Built dashboard with Laravel and Alpine.js to spin up and down the active sites on our staging server to improve security and reduce disk usage',
            'Developed GitHub Actions scripts for general purpose use intended for a large client base',
            'Helped with the migration of services from an internal automation server to GCP',
        ],
        date: 'Feb 2024 - Present',
        linkedinUrl:
            'https://www.linkedin.com/in/jacob-moore-b10000000000000000000000/',
        skills: [
            'Node.js',
            'MySQL',
            'MongoDB',
            'Elasticsearch',
            'ReactJS',
            'Pub/Sub',
            'GCP',
        ],
    },
    {
        company: 'WebFX',
        title: 'Web Developer',
        description: [
            'Built dashboard with Laravel and Alpine.js to spin up and down the active sites on our staging server to improve security and reduce disk usage',
            'Developed GitHub Actions scripts for general purpose use intended for a large client base',
            'Helped with the migration of services from an internal automation server to GCP',
        ],
        date: 'Jul 2023 - Feb 2024',
        linkedinUrl:
            'https://www.linkedin.com/in/jacob-moore-b10000000000000000000000/',
        skills: ['React', 'Node.js', 'Python', 'Docker', 'Kubernetes'],
    },
    {
        company: 'WebFX',
        title: 'Jr Web Developer',
        description: [
            'Worked on client projects including product comparison tools, ROI calculators, job boards, and more',
            'Assisted with measurement and analytics using GA4 & A/B testing employing tools such as Omniconvert',
        ],
        date: 'Jul 2022 - Jul 2023',
        linkedinUrl:
            'https://www.linkedin.com/in/jacob-moore-b10000000000000000000000/',
        skills: ['React', 'Node.js', 'Python', 'Docker', 'Kubernetes'],
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
                        <LinkIcon />
                    </a>
                    , a digital marketing company, where I work on our{' '}
                    <a
                        href='https://www.webfx.com/technology/revenuecloudfx/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1 underline'
                    >
                        RevenueCloudFX
                        <LinkIcon />
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
                        <LinkIcon />
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
                    <a
                        key={exp.company}
                        href={exp.linkedinUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='relative block bg-white/20 backdrop-blur-sm p-4 rounded-lg cursor-pointer shadow-lg border border-white/30 transition-all duration-200 ease-in-out hover:shadow-xl hover:bg-white/30 hover:scale-[1.02]' // Added relative positioning
                    >
                        <div className='absolute top-4 right-4'>
                            <LinkIcon />
                        </div>
                        <h3 className='text-lg font-semibold text-gray-blue-900'>
                            {exp.title} - {exp.company}
                        </h3>
                        <p className='text-xs text-gray-blue-600 mb-2'>
                            {exp.date}
                        </p>
                        <p className='text-sm text-gray-blue-700 pr-6 mb-3'>
                            <ul className='list-disc list-inside'>
                                {exp.description.map((desc) => (
                                    <li key={desc}>{desc}</li>
                                ))}
                            </ul>
                        </p>
                        <div className='flex flex-wrap gap-1.5'>
                            {exp.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className='inline-block bg-gray-blue-100 text-gray-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </section>
        </section>
    );
}

export default GreetingSection;
