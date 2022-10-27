import { BsInfo } from 'react-icons/bs';
import { TbBriefcase, TbCertificate, TbCode, TbSchool } from 'react-icons/tb';

export const storyTypes = {
	education: { icon: <TbSchool />, title: 'Education' },
	experience: { icon: <TbBriefcase />, title: 'Experinence' },
	project: { icon: <TbCode />, title: 'Project' },
	certificate: { icon: <TbCertificate />, title: 'Certificate' },
	other: { icon: <BsInfo />, title: 'Other' },
};

// TODO: Add global storyType to StoryItemProps and StoryContentProps
// TODO: Design interface for each storyType i.e. EducationStoryProps, ExperienceStoryProps, etc.