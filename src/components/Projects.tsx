import React, {useState} from 'react';
import {Project} from "../types/Types";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {motion} from "framer-motion";

import SwiperCore, {
    Pagination,
} from 'swiper';

SwiperCore.use([Pagination]);

type Props = {
    projects: Array<Project>
    projectClick: (id: number) => void
}

function Projects(props: Props) {

    const [projectsAnimation, setProjectsAnimation] = useState(false);

    const projectsFramerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },

        hidden: {
            transition: {
                staggerChildren: 0.05, delayChildren: 0.5, duration: 2,
            },
        },
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         setProjectsAnimation(true);
    //     }, 400);
    // }, [])

    const projectFramerVariants = {
        visible: {y: 0, opacity: 1, transition: {delay: 0.3, duration: 0.5}},
        hidden: {y: -70, opacity: 0,}
    }

    return (
        <section>
            <h1>
                Projects
            </h1>

            <motion.div
                initial={false} transition={{duration: .5}} variants={projectsFramerVariants}
                animate={projectsAnimation ? "visible" : "hidden"}
                onViewportEnter={() => {
                    setProjectsAnimation(true)
                }} className={"projects container"}>

                <Swiper
                    direction="horizontal"
                    // scrollbar={{hide: false, draggable: true}}
                    pagination={{
                        "dynamicBullets": true,
                        "clickable": true,
                    }}
                    breakpoints={{
                        "600": {
                            "slidesPerView": 2,
                            "spaceBetween": 50,
                            "centeredSlides": true
                        },
                        "993": {
                            "slidesPerView": 3,
                            "spaceBetween": 50,
                        },
                        "1200": {
                            "slidesPerView": 3,
                            "spaceBetween": 50,
                        },
                    }}
                    mousewheel={true}
                >
                    {props.projects?.map((project) => {
                        return (
                            <SwiperSlide key={project.id}>
                                <motion.div className={"project"} variants={projectFramerVariants}>
                                    <h2>
                                        {project.name}
                                    </h2>

                                    <p>
                                        {project.startDate}
                                    </p>

                                    <p style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                        {project.description}
                                    </p>

                                    <img src={project.cover} alt={project.name}/>

                                    <div className="skills-project-container">
                                        {project?.skills.slice(0, 5)?.map((skill, index) => {
                                            return (
                                                <div key={index} className="skill">
                                                    <img src={skill.icon} alt={skill.name}/>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className={"buttonsContainer"}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">Link</a>
                                        <button className="button" onClick={() => {
                                            props.projectClick(project.id)
                                        }
                                        }>Details
                                        </button>
                                    </div>

                                </motion.div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

            </motion.div>
        </section>
    );
}

export default Projects;
