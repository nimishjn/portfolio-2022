import { BsInfo } from 'react-icons/bs';
import { TbBriefcase, TbCertificate, TbCode, TbSchool } from 'react-icons/tb';
import AchievementIcon from '../assets/icons/achievement.svg';

export const storyTypes = {
	education: { icon: <TbSchool />, title: 'Education', color: 'red' },
	experience: { icon: <TbBriefcase />, title: 'Experinence', color: 'blue' },
	project: { icon: <TbCode />, title: 'Project', color: 'green' },
	certificate: {
		icon: <TbCertificate />,
		title: 'Certificate',
		color: 'magenta',
	},
	achievement: {
		icon: <AchievementIcon height='0.8em' />,
		title: 'Achievement',
		color: 'white',
	},
	other: { icon: <BsInfo />, title: 'Other', color: 'darkgray' },
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
