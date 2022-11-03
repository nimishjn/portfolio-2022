import { allSkills } from './constants/Skills';

export const findSkill = (skillId: string) => {
	const skill = allSkills.find((skill) => skill.id === skillId);
	if (skill) return skill;
	else return null;
};
