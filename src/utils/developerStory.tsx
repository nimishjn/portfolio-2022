import { BsInfo } from 'react-icons/bs';
import { TbBriefcase, TbCertificate, TbCode, TbSchool } from 'react-icons/tb';
import { GrAchievement } from 'react-icons/gr';

export const storyTypes = {
	education: { icon: <TbSchool />, title: 'Education' },
	experience: { icon: <TbBriefcase />, title: 'Experinence' },
	project: { icon: <TbCode />, title: 'Project' },
	certificate: { icon: <TbCertificate />, title: 'Certificate' },
	achievement: { icon: <GrAchievement />, title: 'Achievement' },
	other: { icon: <BsInfo />, title: 'Other' },
};

// Story Types
export type STORY_TYPES = keyof typeof storyTypes;
export const DEFAULT_STORY_TYPE = 'other' as STORY_TYPES;

// Position Types
export type POSITION_TYPES =
	| 'left'
	| 'left-with-blank'
	| 'right'
	| 'right-with-blank'
	| 'alternate';
export const DEFAULT_POSITION_TYPES = 'alternate';

// TODO: Design interface for each storyType i.e. EducationStoryProps, ExperienceStoryProps, etc.
