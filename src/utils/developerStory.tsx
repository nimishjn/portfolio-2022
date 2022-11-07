import { StaticImageData } from 'next/image';
import { BsInfo } from 'react-icons/bs';
import { TbBriefcase, TbCertificate, TbCode, TbSchool } from 'react-icons/tb';
import AchievementIcon from '../assets/icons/achievement.svg';

export const storyTypes = {
	education: {
		icon: <TbSchool />,
		title: 'Education',
		color: '#990000',
	},
	experience: {
		icon: <TbBriefcase />,
		title: 'Experience',
		color: '#000066',
	},
	project: {
		icon: <TbCode />,
		title: 'Project',
		color: '#006600',
	},
	certificate: {
		icon: <TbCertificate />,
		title: 'Certificate',
		color: '#660033',
	},
	achievement: {
		icon: <AchievementIcon height='0.8em' />,
		title: 'Achievement',
		color: '#330066',
	},
	other: {
		icon: <BsInfo />,
		title: 'Other',
		color: '#006666',
	},
};

const findStoryType = (storyType: string) => {
	const type = storyTypes[storyType as keyof typeof storyTypes];
	if (!type) {
		return storyTypes.other;
	}
	return type;
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
export interface AchievementProps {
	fromDate: string;
	toDate: string;
	featured?: boolean;
	title: string;
	orgName?: string;
	imageURL?: StaticImageData;
	description?: string;
	url?: string;
}

export interface CertificateProps {
	fromDate: string;
	toDate: string;
	featured?: boolean;
	title: string;
	imageURL?: StaticImageData;
	description?: string;
	skills?: string[];
	url: string;
}

export interface EducationProps {
	fromDate: string;
	toDate: string;
	featured?: boolean;
	orgName: string;
	orgLocation: string;
	imageURL?: StaticImageData;
	description?: string;
	url?: string;
}

export interface ExperienceProps {
	fromDate: string;
	toDate: string;
	featured?: boolean;
	positionHeld: string;
	orgName: string;
	orgLocation: string;
	imageURL?: StaticImageData;
	description: string;
	url?: string;
}

export interface OtherProps {
	fromDate: string;
	toDate: string;
	featured?: boolean;
	title: string;
	type?: string;
	imageURL?: StaticImageData;
	description?: string;
	url?: string;
	techStack?: string[];
}

export interface ProjectProps {
	fromDate: string;
	toDate: string;
	featured?: boolean;
	projectName: string;
	orgName: string;
	imageURL?: StaticImageData;
	description: string;
	repoUrl?: string;
	viewUrl?: string;
	techStack?: string[];
}

// Interface for StoryContentTypes
export type StoryContentTypeProps =
	| {
			storyType: 'achievement';
			arrowRight?: boolean;
			arrowLeft?: boolean;
			randomClassName?: string;
			data: AchievementProps;
	  }
	| {
			storyType: 'certificate';
			arrowRight?: boolean;
			arrowLeft?: boolean;
			randomClassName?: string;
			data: CertificateProps;
	  }
	| {
			storyType: 'education';
			arrowRight?: boolean;
			arrowLeft?: boolean;
			randomClassName?: string;
			data: EducationProps;
	  }
	| {
			storyType: 'experience';
			arrowRight?: boolean;
			arrowLeft?: boolean;
			randomClassName?: string;
			data: ExperienceProps;
	  }
	| {
			storyType: 'other';
			arrowRight?: boolean;
			arrowLeft?: boolean;
			randomClassName?: string;
			data: OtherProps;
	  }
	| {
			storyType: 'project';
			arrowRight?: boolean;
			arrowLeft?: boolean;
			randomClassName?: string;
			data: ProjectProps;
	  };
