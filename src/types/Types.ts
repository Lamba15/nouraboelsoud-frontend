export interface Skill{
	name: string;
	icon: string;
}

export interface Project{
	id: number;
	name: string;
	link: string;
	description: string;
	markdownDescription: string;
	skills: Array<Skill>;
	cover: string;
	startDate: string;
}
