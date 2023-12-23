import { useState } from 'react'
import './ProjectsSection.css'
import ProjectSection from './ProjectSection/ProjectSection'
import { ProjectSectionProps } from './ProjectSection/ProjectSection'
import WaveBottom from '../../Dividers/WaveBottom/WaveBottom'
import WaveTop from '../../Dividers/WaveTop/WaveTop'

interface ProjectsSectionProps {
    projectsArr: ProjectSectionProps[]
}

function ProjectsSection(props: ProjectsSectionProps) {
    const [cubePos, setCubePos] = useState('initial-position')

    const rotateCube = (event:any) => {
        setCubePos(event.target.classList[0])
    }

    return (
        <>
            <div className='h-28 md:h-0 md:-mt-10' id='projects'></div>
            <WaveTop pathClass='fill-gray-blue-300' />
            <div className='bg-gray-blue-300'>
                <div>
                    <div className='grid grid-cols-2 ml-5 mr-5 gap-4 md:gap-10 md:grid-cols-2 md:mx-auto md:w-11/12 lg:w-9/12 xl:w-8/12'>
                        <div className='col-span-2 font-bold text-3xl md:text-4xl lg:text-5xl'>
                            <div className='w-full flex justify-center -translate-y-20'>
                                <h2>Projects</h2>
                            </div>
                        </div>
                        <div className="col-span-2 md:col-span-1 mx-auto cube-container">
                            <div className={'cube ' + cubePos}>
                                {props.projectsArr.map((project, index) => {
                                    return (
                                        project ? 
                                        <ProjectSection key={index+1} project={project} index={index+1} /> :
                                        <div key={index+1} className={'cube-face-image image-' + (index+1) + ' backdrop-blur-2xl h-full w-full'}></div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="h-48 md:h-72 flex justify-center items-center gap-2 col-span-2 md:col-span-1">
                            {props.projectsArr.map((project, index) => {
                                return (
                                    project ? 
                                    <input type="image" key={'tile-' + index} onClick={rotateCube} className={'show-image-' + (index+1) + ' object-cover w-20 h-20'} src={project.img} alt={project.alt}></input>:
                                    ''
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='md:h-14'></div>
            </div>
            <WaveBottom pathClass='fill-gray-blue-300' />
        </>
    )
}

ProjectsSection.defaultProps = {
    projectsArr: [
        {
            title: 'CodeFlower',
            img: 'codeflower.png',
            githubHref: 'https://github.com/jzm1151/Code-Flower',
            alt: 'CodeFlower project screenshot',
        },
        {
            title: 'Path Finder',
            img: 'path-finder.png',
            githubHref: 'https://github.com/jzm1151/path-finding-visualizer-with-roomdb',
            alt: 'Path Finder project screenshot',
        },
        null,
        null,
        {
            title: 'Vue 2048',
            img: 'vue-2048.png',
            githubHref: 'https://github.com/jzm1151/vue-2048',
            alt: 'Vue 2048 project screenshot',
        },
        null,
    ],
}

export default ProjectsSection