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

// Interface for each storyType i.e. EducationStoryProps, ExperienceStoryProps, etc.
export interface AchievementProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	orgName?: string;
	imageURL?: string;
	description?: string;
	url?: string;
}

export interface CertificateProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	imageURL?: string;
	description?: string;
	skills?: string[];
	url: string;
}

export interface EducationProps extends React.HTMLAttributes<HTMLDivElement> {
	orgName: string;
	orgLocation: string;
	imageURL?: string;
	description?: string;
	url?: string;
}

export interface ExperienceProps extends React.HTMLAttributes<HTMLDivElement> {
	orgName: string;
	orgLocation: string;
	imageURL?: string;
	description: string;
	url?: string;
}

export interface OtherProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	type?: string;
	imageURL?: string;
	description?: string;
	url?: string;
}

export interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
	projectName: string;
	orgName: string;
	imageURL?: string;
	description: string;
	repoUrl?: string;
	viewUrl?: string;
	techStack?: string[];
}

// Interface for StoryContentTypes
export type StoryContentTypeProps =
	| {
			storyType: 'achievement';
			data: AchievementProps;
			children?: React.ReactNode;
	  }
	| {
			storyType: 'certificate';
			data: CertificateProps;
			children?: React.ReactNode;
	  }
	| {
			storyType: 'education';
			data: EducationProps;
			children?: React.ReactNode;
	  }
	| {
			storyType: 'experience';
			data: ExperienceProps;
			children?: React.ReactNode;
	  }
	| {
			storyType: 'other';
			data: OtherProps;
			children?: React.ReactNode;
	  }
	| {
			storyType: 'project';
			data: ProjectProps;
			children?: React.ReactNode;
	  };
