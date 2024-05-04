import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import SkillsContainer from "./components/SkillsContainer";
import {SERVICE_URL} from "./Constants";
import {Project, Skill} from "./types/Types";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import Testimonials from "./components/Testimonials";

function App() {

    const [projects, setProjects] = useState<Project[]>([]);

    const [skills, setSkills] = useState<Skill[]>([]);

    const navigate = useNavigate();

    const {projectId} = useParams();

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

    return (
        <div>

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


            <Header/>


            <div className="home">
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

            <SkillsContainer skills={skills}/>

            <Testimonials />

            <Projects projects={projects} projectClick={(id) => handleProjectClick(id)}/>

            <Outlet
                context={[projects.find((project) => project.id.toString() === projectId ?? "-1")?.markdownDescription, projects.find((project) => project.id.toString() === projectId ?? "-1")?.skills, projects.find((project) => project.id.toString() === projectId ?? "-1")?.name]}/>


            <svg style={{width: "100%", transform: "rotate(180deg)", position: "absolute", bottom: "calc(120px * -1)", left: 0, zIndex: -1}}
                 data-name="BottomWaves" className="BottomWaves " xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 1440 320">
                <path fill="#9767b7" fill-opacity="1"
                      d="M0,32L60,26.7C120,21,240,11,360,37.3C480,64,600,128,720,133.3C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </div>
    );
}

export default App;
