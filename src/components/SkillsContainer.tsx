import React, {useState} from 'react';
import {Skill} from "../types/Types";
import {motion} from "framer-motion";

type Props = {
    skills: Skill[]
}

function SkillsContainer(props: Props) {

    const skillsFramerVariants = {
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


    const [skillsAnimation, setSkillAnimation] = useState(false);

    const skillFramerVariants = {
        visible: {y: 0, opacity: 1},
        hidden: {y: -70, opacity: 0,}
    }

    return (
        <section>
            <h1>
                Skills
            </h1>
            <motion.div initial={false} transition={{duration: .5}} variants={skillsFramerVariants}
                        animate={skillsAnimation ? "visible" : "hidden"}
                        onViewportEnter={() => {
                            setSkillAnimation(true)
                        }} className="skillsContainer container">
                {props.skills.map((skill, index) => {
                    return (
                        <motion.div className="skill" key={index} whileHover={{scale: 1.03}}
                                    variants={skillFramerVariants}>
                            <img src={skill.icon} alt={skill.name}/>
                            <span>
						{skill.name}
					</span>
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    );
}

export default SkillsContainer;
