import React from 'react';
import Certificate from './Certificate';
import Education from './Education';
import Experience from './Experience';
import Other from './Other';
import Project from './Project';
import Achievement from './Achievement';
import { DEFAULT_STORY_TYPE, STORY_TYPES } from 'utils/developerStory';

interface StoryContentTypeProps {
	storyType?: STORY_TYPES;
	data?: any;
	children?: React.ReactNode;
}

function StoryContentType({
	storyType = DEFAULT_STORY_TYPE,
	data,
	children,
}: StoryContentTypeProps) {
	switch (storyType) {
		case 'education':
			return <Education />;
		case 'experience':
			return <Experience />;
		case 'project':
			return <Project />;
		case 'certificate':
			return <Certificate />;
		case 'achievement':
			return <Achievement />;
		case 'other':
			return <Other />;
		default:
			return <>{children}</>;
	}
}

StoryContentType.Certificate = Certificate;
StoryContentType.Education = Education;
StoryContentType.Experience = Experience;
StoryContentType.Project = Project;
StoryContentType.Achievement = Achievement;
StoryContentType.Other = Other;

export default StoryContentType;
