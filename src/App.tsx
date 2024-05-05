import React, {useEffect, useState} from 'react';
import ScrollNavigation from 'react-single-page-navigation';
import SkillsContainer from "./components/SkillsContainer";
import {SERVICE_URL} from "./Constants";
import {Project, Skill} from "./types/Types";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";

function App() {

    const [projects, setProjects] = useState<Project[]>([]);

    const [skills, setSkills] = useState<Skill[]>([]);

    const navigate = useNavigate();

    const {projectId} = useParams();

    const [isVisible, setIsVisible] = useState(false);

    const elements = {
        aboutMe: {},
        skills: {},
        services: {},
        testimonials: {},
        projects: {}
    };

    useEffect(() => {
        function getSkills() {

            fetch(`${SERVICE_URL}get-skills`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                },
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                if (data.code === 1) {
                    setSkills(data.data);
                    getProjects()
                } else {
                    // todo handle error
                }
            }).catch(() => {
                // todo handle error
            });
        }

        function getProjects() {

            fetch(`${SERVICE_URL}get-projects-public`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                },
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                if (data.code === 1) {
                    setProjects(data.data);
                } else {
                    // todo handle error
                }
            }).catch(() => {
                // todo handle error
            });
        }

        getSkills();
    }, []);

    function handleProjectClick(id: number) {
        navigate("/projects/" + id)
    }

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (window.pageYOffset > 0) {
                header && header.classList.add('scrolled');
                setIsVisible(true);
            } else {
                header && header.classList.remove('scrolled');
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ScrollNavigation elements={elements} offset={-70}>
            {({refs, activeElement, goTo}) => (
                <>
                    <svg style={{
                        width: "100%",
                        position: "absolute",
                        top: "calc(var(80px) * -1)",
                        left: 0,
                        zIndex: -1
                    }}
                         data-name="BottomWaves" className="BottomWaves " xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 1440 320">
                        <path fill="#fff"
                              d="M0,32L60,26.7C120,21,240,11,360,37.3C480,64,600,128,720,133.3C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>

                    <img className="floatingStyle1" style={{
                        position: "absolute",
                        width: 200,
                        opacity: 0.3,
                        top: 250,
                        right: 350,
                    }} src="/svgs/union_27.svg" alt=""/>

                    <img style={{
                        position: "absolute",
                        width: 500,
                        maxWidth: "100%",
                        opacity: 0.1,
                        bottom: 700,
                        left: 0,
                    }} src="/svgs/union_35.svg" alt=""/>

                    <img style={{
                        position: "absolute",
                        width: 500,
                        maxWidth: "100%",
                        transform: "rotateY(180deg)",
                        opacity: 0.2,
                        bottom: 0,
                        right: 0,
                    }} src="/svgs/union_30.svg" alt=""/>

                    <img className="floatingStyle1" style={{
                        position: "absolute",
                        width: 500,
                        bottom: 2000,
                        maxWidth: "100%",
                        opacity: 0.2,
                        left: 0,
                    }} src="/svgs/group_582.svg" alt=""/>


                    {/*<Header/>*/}
                    <div className="header">
                        <div className={"container"}>
                            <div className={"logo-container"}>
                                <a href="/" className="logo-link">
                                    <img src="/logos/my-logo-squared-144.png"
                                         style={{marginTop: 12, height: 50, marginBottom: 12}} alt="logo"/>
                                    <span style={isVisible ? {display: "flex"} : {display: "none"}}
                                          className={`logoText `}><span>Nour</span> <span>Abo Elsoud</span></span>
                                </a>
                            </div>


                            <div className={"navigation"}>
                                <div
                                    onClick={() => goTo("aboutMe")}
                                    className={activeElement === "aboutMe" ? "active" : ""}
                                >
                                    About
                                </div>

                                <div
                                    onClick={() => goTo("skills")}
                                    className={activeElement === "skills" ? "active" : ""}
                                >
                                    Skills
                                </div>

                                <div
                                    onClick={() => goTo("services")}
                                    className={activeElement === "services" ? "active" : ""}
                                >
                                    Services
                                </div>

                                <div
                                    onClick={() => goTo("testimonials")}
                                    className={activeElement === "testimonials" ? "active" : ""}
                                >
                                    Testimonials
                                </div>

                                <div
                                    onClick={() => goTo("projects")}
                                    className={activeElement === "projects" ? "active" : ""}
                                >
                                    Projects
                                </div>
                            </div>
                        </div>

                    </div>

                    <div ref={refs.aboutMe} className="home">
                        <div className="text">
                            <h1>
                                Get Your<br/>
                                Software System<br/>
                                From <span style={{color: "#9767b7", fontWeight: 500}}>Nour</span>.
                            </h1>

                            <div className="underHeader">
                                <a className="button" href="resume.pdf" download>
                                    Download Resume
                                </a>

                                <p>
                                    Passionate full stack developer from CRM/ERP to Platforms <br/>
                                    any custom System innovation fill my heart.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src="/my-picture.png" alt="Nour Abo Elsoud"/>
                        </div>
                    </div>

                    <AboutMe/>

                    <div ref={refs.skills}>
                        <SkillsContainer skills={skills}/>
                    </div>

                    <div ref={refs.services}>
                        <Services/>
                    </div>

                    <div ref={refs.testimonials}>
                        <Testimonials/>
                    </div>

                    <div ref={refs.projects}>
                        <Projects projects={projects}
                                  projectClick={(id) => handleProjectClick(id)}/>
                    </div>

                    <Outlet
                        context={[projects.find((project) => project.id.toString() === projectId ?? "-1")?.markdownDescription, projects.find((project) => project.id.toString() === projectId ?? "-1")?.skills, projects.find((project) => project.id.toString() === projectId ?? "-1")?.name]}/>


                    <svg style={{
                        width: "100%",
                        transform: "rotate(180deg)",
                        position: "absolute",
                        bottom: "calc(120px * -1)",
                        left: 0,
                        zIndex: -1
                    }}
                         data-name="BottomWaves" className="BottomWaves " xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 1440 320">
                        <path fill="#9767b7"
                              d="M0,32L60,26.7C120,21,240,11,360,37.3C480,64,600,128,720,133.3C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>
                </>
            )}
        </ScrollNavigation>
    );
}

export default App;
