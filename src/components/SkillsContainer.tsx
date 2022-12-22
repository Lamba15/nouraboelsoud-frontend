import React from 'react';
import {Skill} from "../types/Types";

type Props = {
	skills: Skill[]
}
function SkillsContainer(props: Props) {

	return (
		<div className="skillsContainer">
			{props.skills.map((skill) => {
				return (
				<div className="skill">
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
