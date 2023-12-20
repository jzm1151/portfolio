import { useState } from 'react'
import './ProjectsSection.css'
import { FaGithub } from "react-icons/fa";

interface ProjectsSectionProps {
    projectsArr: {
        title: string,
        img: string,
        githubHref: string,
    }[]
}

function ProjectsSection(props: ProjectsSectionProps) {
    const [cubePos, setCubePos] = useState('initial-position')

    const rotateCube = (event:any) => {
        setCubePos(event.target.classList[0])
    }

    console.log(props.projectsArr)

    return (
        <div>
            <div>
                <div className='grid grid-cols-2 ml-5 mr-5 my-24 gap-10 md:grid-cols-2 md:mx-auto md:my-12 md:w-11/12 lg:w-9/12 xl:w-8/12'>
                    <div className="col-span-2 md:col-span-1 mx-auto cube-container">
                        <div className={'cube ' + cubePos}>
                            <div className="cube-face-image image-1 h-full w-full">
                                <div className='h-full w-full relative'>
                                    <img className="object-cover h-full w-full absolute top-0" src="codeflower.png" alt="How to code website screenshot" />
                                    <div className='absolute bottom-0 w-full h-1/5 z-10 flex justify-center items-center text-gray-blue-950 font-bold text-2xl backdrop-blur-2xl'>
                                        <a className="flex justify-center items-center gap-2" href='https://github.com/jzm1151/Code-Flower' target='_blank'>
                                            <div>CodeFlower</div>
                                            <div className='text-gray-blue-100'>
                                                <FaGithub />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <img className="cube-face-image image-2 object-cover h-full w-full" src="vue-2048.png" alt="Vue 2048 project screenshot" />
                            <div className="cube-face-image image-3 backdrop-blur-xl h-full w-full"></div>
                            <div className="cube-face-image image-4 backdrop-blur-xl h-full w-full"></div>
                            <div className="cube-face-image image-5 backdrop-blur-xl h-full w-full"></div>
                            <div className="cube-face-image image-6 backdrop-blur-xl h-full w-full"></div>
                        </div>
                    </div>

                    <div className="col-span-2 md:col-span-1 image-buttons">
                        <input type="image" className="show-image-1 object-cover w-32 h-32" onClick={rotateCube} src="codeflower.png"></input>
                        <input type="image" className="show-image-2 object-cover w-32 h-32" onClick={rotateCube} src="vue-2048.png"></input>
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
        },
    ],
}

export default ProjectsSection