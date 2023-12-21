import { useState } from 'react'
import './ProjectsSection.css'
import { FaGithub } from "react-icons/fa"
import { FaArrowDown } from 'react-icons/fa'
import ProjectSection from './ProjectSection/ProjectSection'
import { ProjectSectionProps } from './ProjectSection/ProjectSection'

interface ProjectsSectionProps {
    projectsArr: ProjectSectionProps[]
}

function ProjectsSection(props: ProjectsSectionProps) {
    const [cubePos, setCubePos] = useState('initial-position')

    const rotateCube = (event:any) => {
        setCubePos(event.target.classList[0])
    }

    return (
        <div>
            <div>
                <div className='grid grid-cols-2 ml-5 mr-5 my-24 gap-10 md:grid-cols-2 md:mx-auto md:my-12 md:w-11/12 lg:w-9/12 xl:w-8/12' id='projects'>
                    <div className='col-span-2 font-bold text-3xl md:text-4xl lg:text-5xl'>
                        <div className='w-full flex justify-center items-center gap-4 mb-20 -mt-10'>
                            <div className='bg-gray-blue-700 h-2 grow'></div>
                                <h2>Projects</h2>
                            <div className='bg-gray-blue-700 h-2 grow'></div>
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

                    <div className="h-72 flex justify-center items-center col-span-2 md:col-span-1 image-buttons">
                        {props.projectsArr.map((project, index) => {
                            return (
                                project ? 
                                <div key={'tile-'+(index+1)} className={'show-image-' + (index+1) + ' w-32 h-32 relative cursor-pointer border-8 border-gray-blue-950'}  onClick={rotateCube}>
                                    <div className={'show-image-' + (index+1) + ' absolute top-0 w-full h-full z-10 flex justify-center items-center text-gray-blue-950 font-bold text-xl cursor-pointer backdrop-saturate-[' + project.saturation + ']'}>
                                        <p className={'show-image-' + (index+1) + ' text-shadow shadow-gray-blue-400 cursor-pointer text-center'}>{project.title}</p>
                                    </div>
                                    <input type="image" className={'show-image-' + (index+1) + ' object-cover w-full h-full absolute top-0 z-5 cursor-pointer'} src={project.img}></input>
                                </div> :
                                ''
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

ProjectsSection.defaultProps = {
    projectsArr: [
        {
            title: 'CodeFlower',
            img: 'codeflower.png',
            githubHref: 'https://github.com/jzm1151/Code-Flower',
            alt: 'CodeFlower project screenshot',
            saturation: '.4',
        },
        {
            title: 'Path Finder',
            img: 'path-finder.png',
            githubHref: 'https://github.com/jzm1151/path-finding-visualizer-with-roomdb',
            alt: 'Path Finder project screenshot',
            saturation: '.1',
        },
        null,
        null,
        {
            title: 'Vue 2048',
            img: 'vue-2048.png',
            githubHref: 'https://github.com/jzm1151/vue-2048',
            alt: 'Vue 2048 project screenshot',
            saturation: '.4',
        },
        null,
    ],
}

export default ProjectsSection