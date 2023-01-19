export interface Skill{
	name: string;
	icon: string;
}

export interface Project{
	id: number;
	name: string;
	link: string;
	description: string;
	markdown: string;
	skills: Array<Skill>;
	cover: string;
	startDate: string;
}
