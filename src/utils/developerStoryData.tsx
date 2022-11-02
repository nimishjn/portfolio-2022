import { allEducation } from './constants/Education';
import { allExperiences } from './constants/Experiences';
import { allProjects } from './constants/Projects';

export const developerStoryData = [
	{
		id: 'exp-csivit',
		storyType: 'experience',
		data: allExperiences.csivit,
	},
	{
		id: 'exp-adgvit',
		storyType: 'experience',
		data: allExperiences.adgvit,
	},
	{
		id: 'project-portfolio',
		storyType: 'project',
		data: allProjects.portfolio,
	},
	{
		id: 'exp-designAndCode',
		storyType: 'experience',
		data: allExperiences.designAndCode,
	},
	{
		id: 'exp-nishkaera',
		storyType: 'experience',
		data: allExperiences.nishkaera,
	},
	{
		id: 'edu-vit',
		storyType: 'education',
		data: allEducation.vit,
	},
	{
		id: 'edu-dpsrkp',
		storyType: 'education',
		data: allEducation.dpsrkp,
	},
	{
		id: 'edu-smsslg',
		storyType: 'education',
		data: allEducation.smsslg,
	},
];
