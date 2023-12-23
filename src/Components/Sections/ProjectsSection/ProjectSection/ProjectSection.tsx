// import { FaGithub } from "react-icons/fa";
// import { FaArrowDown } from 'react-icons/fa';

export interface ProjectSectionProps {
    title: string,
    img: string,
    githubHref: string,
    alt: string,
}

function ProjectSection(props: {project:ProjectSectionProps, index:number}) {
    return (
        <div className={'cube-face-image image-' + props.index + ' h-64 w-64'}>
            <div className='bg-gray-blue-500 h-64 w-64'>
                {/* <img className="object-cover h-full w-full absolute top-0" src={props.project.img} alt={props.project.alt} />
                <div className={'absolute top-0 w-full h-full z-5 flex justify-center items-center gap-2 text-gray-blue-950 font-bold text-xl'}>
                    <p className='text-shadow shadow-gray-blue-400'>View on GitHub</p>
                    <div>
                        <FaArrowDown />
                    </div>
                </div> */}
                testing
                {/* <div className='absolute bottom-0 w-full h-1/5 z-10 flex justify-center items-center text-gray-blue-950 font-bold text-2xl backdrop-blur-2xl'>
                    <a className='flex justify-center items-center gap-2' href={props.project.githubHref} target='_blank'>
                        <div>{props.project.title}</div>
                        <div className='text-gray-blue-100'>
                            <FaGithub />
                        </div>
                    </a>
                </div> */}
            </div>
        </div>
    )
}

export default ProjectSection