import { fetchAchievementData } from './graphQL/achievement';
import { fetchCertificateData } from './graphQL/certificate';
import { fetchEducationData } from './graphQL/education';
import { fetchExperienceData } from './graphQL/experience';
import { fetchOtherData } from './graphQL/other';
import { fetchProjectData } from './graphQL/project';
import { fetchResearchData } from './graphQL/research';
import { fetchSkillData } from './graphQL/skill';
import { fetchTestimonialData } from './graphQL/testimonial';

import {
	AchievementProps,
	CertificateProps,
	EducationProps,
	ExperienceProps,
	OtherProps,
	ProjectProps,
	STORY_TYPES,
} from './developerStory';

export interface singleDeveloperStoryDataProps {
	id: string;
	storyType: STORY_TYPES;
	data:
		| EducationProps
		| AchievementProps
		| CertificateProps
		| ExperienceProps
		| OtherProps
		| ProjectProps;
}

export interface DeveloperStoryDataProps
	extends Array<singleDeveloperStoryDataProps> {}

export const fetchDeveloperStoryData = async () => {
	const [
		achievementData,
		certificateData,
		educationData,
		experienceData,
		otherData,
		projectData,
	] = await Promise.all([
		fetchAchievementData(),
		fetchCertificateData(),
		fetchEducationData(),
		fetchExperienceData(),
		fetchOtherData(),
		fetchProjectData(),
	]).then((res) => res);

	return [
		achievementData.map((e: any) => ({
			id: e.id,
			storyType: 'achievement',
			data: e,
		})),
		certificateData.map((e: any) => ({
			id: e.id,
			storyType: 'certificate',
			data: e,
		})),
		educationData.map((e: any) => ({
			id: e.id,
			storyType: 'education',
			data: e,
		})),
		experienceData.map((e: any) => ({
			id: e.id,
			storyType: 'experience',
			data: e,
		})),
		otherData.map((e: any) => ({
			id: e.id,
			storyType: 'other',
			data: e,
		})),
		projectData.map((e: any) => ({
			id: e.id,
			storyType: 'project',
			data: e,
		})),
	]
		.flat()
		.sort((a, b) => {
			const fromDateA = a.data.fromDate;
			const fromDateTimeA =
				fromDateA?.toLowerCase() === 'present'
					? new Date()
					: new Date(fromDateA);
			const toDateA = a.data.toDate;
			const toDateTimeA =
				toDateA?.toLowerCase() === 'present'
					? new Date()
					: new Date(toDateA);
			const fromDateB = b.data.fromDate;
			const fromDateTimeB =
				fromDateB?.toLowerCase() === 'present'
					? new Date()
					: new Date(fromDateB);
			const toDateB = b.data.toDate;
			const toDateTimeB =
				toDateB?.toLowerCase() === 'present'
					? new Date()
					: new Date(toDateB);

			if (toDateTimeA > toDateTimeB) return -1;
			else if (toDateTimeA < toDateTimeB) return 1;
			else if (fromDateTimeA > fromDateTimeB) return -1;
			else if (fromDateTimeA < fromDateTimeB) return 1;

			return 0;
		});
};
