import { allCertificates } from './constants/Certificate';
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
		id: 'project-lasertag2022',
		storyType: 'project',
		data: allProjects.laserTag2022,
	},
	{
		id: 'project-ccs2022',
		storyType: 'project',
		data: allProjects.ccs2022,
	},
	{
		id: 'project-otobusbackend2022',
		storyType: 'project',
		data: allProjects.otobusBackend2022,
	},
	{
		id: 'project-otobusfrontend2022',
		storyType: 'project',
		data: allProjects.otobusFrontend2022,
	},
	{
		id: 'project-cms2022',
		storyType: 'project',
		data: allProjects.cms2022,
	},
	{
		id: 'project-adgwebsite2022',
		storyType: 'project',
		data: allProjects.adgWebsite2022,
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
		id: 'cert-fcc1',
		storyType: 'certificate',
		data: allCertificates.fcc1,
	},
	{
		id: 'cert-fcc2',
		storyType: 'certificate',
		data: allCertificates.fcc2,
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
