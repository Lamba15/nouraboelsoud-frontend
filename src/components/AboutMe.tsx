import React from 'react';
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

function AboutMe() {

    const navigate = useNavigate();

    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 0)"
        },
    };


    return (
        <section className="about-me">
            <div className={"spotlight"}>
                <div className={"spot"}>
                    <h3 style={{position: "relative"}}>
                        8 Years Experience


                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            className="item"
                            fill="currentColor"
                        >
                            <motion.path
                                d="M62.4325 0.957703C55.5264 1.2859 48.7014 1.68945 42.0459 2.13063C32.6242 2.75474 23.2063 3.40038 13.8451 4.42263C10.8984 4.74545 7.90595 4.94989 4.97767 5.35341C3.13948 5.60628 0.702089 5.96671 0.382211 6.04203C0.214902 6.08507 0.141911 6.1497 0.118325 6.17122C-0.0475096 6.32187 -0.0172508 6.46707 0.0763539 6.58006C0.113943 6.62848 0.208995 6.74689 0.472857 6.76303C18.1192 7.86599 36.1635 5.71388 53.8312 5.48791C84.4702 5.10053 116.038 6.63929 146.433 9.99658C146.699 10.0235 146.957 9.88894 146.994 9.68987C147.038 9.49618 146.846 9.30786 146.581 9.28096C116.134 5.91829 84.5144 4.37415 53.8165 4.76691C37.3509 4.97674 20.5603 6.86525 4.07184 6.21962C4.45068 6.16582 4.82217 6.112 5.16122 6.06357C8.0777 5.66005 11.0576 5.461 13.9925 5.13818C23.3338 4.11593 32.7326 3.4703 42.1417 2.85157C53.8165 2.07681 65.9998 1.40965 78.279 1.0976C82.6718 1.14602 87.0498 1.19446 91.4278 1.25364C100.899 1.38277 110.414 1.75939 119.863 2.26514C122.708 2.42117 125.553 2.58256 128.398 2.72245C129.341 2.77087 131.774 2.91073 132.113 2.89997C132.533 2.88921 132.614 2.63098 132.621 2.58794C132.643 2.4911 132.629 2.35658 132.422 2.2436C132.4 2.22745 132.267 2.17362 131.973 2.14134C114.792 0.236721 96.4471 -0.0806646 78.2937 0.376658C59.1453 0.177588 39.9232 0.0914646 20.8234 0C20.55 0 20.3266 0.161432 20.3244 0.360502C20.323 0.559572 20.5433 0.721008 20.8168 0.726389C34.6467 0.790952 48.5466 0.855478 62.4325 0.957703Z"
                                variants={icon}
                                initial="hidden"
                                whileInView="visible"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                transition={{
                                    default: {duration: 2, ease: "easeInOut"},
                                    fill: {duration: 2, ease: [1, 0, 0.8, 1]},
                                }}
                            />
                        </motion.svg>

                    </h3>


                </div>

                <div className={"spot"} style={{position: "relative"}}>

                    <img alt={""} src={"https://leenedu.net/assets/logo-e01ad738.svg"}
                         style={{width: "100%", height: "100%", position: "absolute", opacity: .2}}/>

                    <h3 style={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        Featured Project
                    </h3>
                    <button onClick={() => {
                        navigate("/projects/24")
                    }}>
                        Leen Edu
                    </button>

                </div>

                <div className={"spot"} style={{cursor: "pointer"}} onClick={() => {
                    window.open("https://www.upwork.com/freelancers/~01b9f10c5ef014f48a")
                }}>
                    <h3>
                        100% Job Success Score
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 28" role="img" aria-hidden="true">
                                <path fill="#14a800"
                                      d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"></path>
                                <path fill="#14a800"
                                      d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"></path>
                                <polygon fill="#14a800"
                                         points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"></polygon>
                                <path fill="#14a800"
                                      d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"></path>
                                <path fill="#14a800"
                                      d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"></path>
                            </svg>

                        </div>
                    </h3>
                </div>
            </div>

        </section>
    );
}

export default AboutMe;
