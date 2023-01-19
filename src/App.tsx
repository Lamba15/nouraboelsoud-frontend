import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import SkillsContainer from "./components/SkillsContainer";
import {SERVICE_URL} from "./Constants";
import {Project, Skill} from "./types/Types";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {

	const [projects, setProjects] = useState<Project[]>([]);

	const [skills, setSkills] = useState<Skill[]>([]);

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
						Software system<br/>
						From me.
					</h1>

					<div className="underHeader">
						<a className="button" href="resume.pdf" download>
							Download Resume
						</a>

						<p>
							from CRM/ERP to E-commerce to any custom System <br/>
							passion and innovation fill my heart.
						</p>
					</div>
				</div>

				<div>
					<img src="/my-picture.png" alt="Nour Abo Elsoud"/>
				</div>
			</div>

			<SkillsContainer skills={skills}/>

			<AboutMe/>

			<Projects projects={projects}/>

		</div>
	);
}

export default App;
