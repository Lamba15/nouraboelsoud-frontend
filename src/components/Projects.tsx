import React from 'react';
import {Project} from "../types/Types";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

type Props = {
	projects: Array<Project>
}

function Projects(props: Props) {

	return (
		<section className={"projects container"}>
			<h1>
				Projects
			</h1>

			<Swiper
				spaceBetween={50}
				slidesPerView={"auto"}
				direction="horizontal"
				freeMode={true}
				scrollbar={{hide: false, draggable: true}}
				mousewheel={true}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{props.projects.map((project) => {
					return (
						<SwiperSlide className={"project"} key={project.id}>
							<h2>
								{project.name}
							</h2>

							<p>
								{project.startDate}
							</p>

							<p>
								{project.description}
							</p>

							<img src={project.cover} alt={project.name}/>

							<div className="skills-project-container">
								{project.skills.map((skill, index) => {
									return (
										<div key={index} className="skill">
											<img src={skill.icon} alt={skill.name}/>
										</div>
									);
								})}
							</div>

							<div className={"buttonsContainer"}>
								<a href={project.link}>Link</a>
								<button className="button">Details</button>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>

		</section>
	);
}

export default Projects;
