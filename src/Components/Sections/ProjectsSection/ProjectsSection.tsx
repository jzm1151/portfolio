import { useState } from 'react';
import './ProjectsSection.css';
import ProjectSection from './ProjectSection/ProjectSection';
import { ProjectSectionProps } from './ProjectSection/ProjectSection';
import WaveBottom from '../../Dividers/WaveBottom/WaveBottom';
import WaveTop from '../../Dividers/WaveTop/WaveTop';

interface ProjectsSectionProps {
    projectsArr: ProjectSectionProps[];
}

const updateCubeFacePositions = (
    projectObj: ProjectsSectionProps,
    desProject: number,
    currProject: number
) => {
    const projectArr = projectObj.projectsArr;
    const rePos = projectArr[desProject].currentPos;

    if (projectArr[currProject].currentPos === 0) {
        projectArr.map((project) => {
            if (project && project.currentPos === 1) {
                project.currentPos = rePos;
            }
        });
        projectArr[desProject].currentPos = 1;
    } else {
        projectArr.map((project) => {
            if (project && project.currentPos === 0) {
                project.currentPos = rePos;
            }
        });
        projectArr[desProject].currentPos = 0;
    }
};

const cloneAndSortProjectsArr = (projectsArr: ProjectSectionProps[]) => {
    const projectArrClone = new Array(projectsArr.length).fill(null);
    projectsArr.map((project) => {
        if (project) {
            projectArrClone[project.currentPos] = project;
        }
    });
    return projectArrClone;
};

function ProjectsSection(props: ProjectsSectionProps) {
    const [cubePos, setCubePos] = useState('initial-position');
    const [projectArrPos, setProjectArrPos] = useState(0);

    const rotateCube = (desProject: number) => {
        if (desProject != projectArrPos) {
            updateCubeFacePositions(props, desProject, projectArrPos);
        }
        setProjectArrPos(desProject);
        setCubePos(
            'show-image-' + (props.projectsArr[desProject].currentPos + 1)
        );
    };

    return (
        <>
            <div className='h-28 md:h-0 md:-mt-10' id='projects'></div>
            <WaveTop pathClass='fill-gray-blue-300' />
            <div className='bg-gray-blue-300 -mt-px'>
                <div>
                    <div className='grid grid-cols-2 ml-5 mr-5 gap-4 md:gap-10 md:grid-cols-2 md:mx-auto md:w-11/12 lg:w-9/12 xl:w-8/12'>
                        <div className='col-span-2 font-bold text-3xl md:text-4xl lg:text-5xl'>
                            <div className='w-full flex justify-center -translate-y-20'>
                                <h2>Projects</h2>
                            </div>
                        </div>
                        <div className='col-span-2 md:col-span-1 mx-auto cube-container'>
                            <div className={'cube ' + cubePos}>
                                {cloneAndSortProjectsArr(props.projectsArr).map(
                                    (project, index) => {
                                        return project ? (
                                            <ProjectSection
                                                key={index + 1}
                                                project={project}
                                                index={index + 1}
                                            />
                                        ) : (
                                            <div
                                                key={index + 1}
                                                className={
                                                    'cube-face-image image-' +
                                                    (index + 1) +
                                                    ' backdrop-blur-2xl h-full w-full'
                                                }
                                            ></div>
                                        );
                                    }
                                )}
                            </div>
                        </div>

                        <div className='h-48 md:h-72 flex justify-center items-center gap-2 col-span-2 md:col-span-1'>
                            {props.projectsArr.map((project, index) => {
                                return project ? (
                                    <div
                                        key={'tile-' + (index + 1)}
                                        className={
                                            'w-24 h-24  xl:w-40 xl:h-40 relative cursor-pointer border-8 border-gray-blue-950'
                                        }
                                        onClick={() => rotateCube(index)}
                                    >
                                        <div
                                            className={
                                                'absolute top-0 w-full h-full z-10 flex justify-center items-center text-gray-blue-950 font-bold cursor-pointer backdrop-saturate-50 xl:text-xl'
                                            }
                                        >
                                            <p
                                                className={
                                                    'text-shadow shadow-gray-blue-400 cursor-pointer text-center'
                                                }
                                            >
                                                {project.title}
                                            </p>
                                        </div>
                                        <input
                                            type='image'
                                            className={
                                                'object-cover w-full h-full absolute top-0 z-5 cursor-pointer rounded-none'
                                            }
                                            src={project.img}
                                            alt={project.alt}
                                        ></input>
                                    </div>
                                ) : (
                                    ''
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className='md:h-14'></div>
            </div>
            <WaveBottom pathClass='fill-gray-blue-300' />
        </>
    );
}

ProjectsSection.defaultProps = {
    projectsArr: [
        {
            title: 'CodeFlower',
            img: 'codeflower.png',
            githubHref: 'https://github.com/jzm1151/Code-Flower',
            alt: 'CodeFlower project screenshot',
            currentPos: 0,
        },
        {
            title: 'Path Finder',
            img: 'path-finder.png',
            githubHref:
                'https://github.com/jzm1151/path-finding-visualizer-with-roomdb',
            alt: 'Path Finder project screenshot',
            currentPos: 1,
        },
        null,
        null,
        {
            title: 'Vue 2048',
            img: 'vue-2048.png',
            githubHref: 'https://github.com/jzm1151/vue-2048',
            alt: 'Vue 2048 project screenshot',
            currentPos: 4,
        },
        null,
    ],
};

export default ProjectsSection;
