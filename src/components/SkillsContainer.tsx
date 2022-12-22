import React from 'react';
import {Skill} from "../types/Types";

type Props = {
	skills: Skill[]
}
function SkillsContainer(props: Props) {

	return (
		<div className="skillsContainer">
			{props.skills.map((skill, index) => {
				return (
				<div className="skill" key={index}>
					<img src={skill.icon} alt={skill.name}/>
					<span>
						{skill.name}
					</span>
				</div>
			)
			})}
		</div>
	);
}

export default SkillsContainer;
