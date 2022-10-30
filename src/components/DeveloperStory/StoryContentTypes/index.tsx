import React from 'react';
import Certificate from './Certificate';
import Education from './Education';
import Experience from './Experience';
import Other from './Other';
import Project from './Project';
import Achievement from './Achievement';
import {
	DEFAULT_STORY_TYPE,
	StoryContentTypeProps,
} from 'utils/developerStory';

function StoryContentType({
	storyType = DEFAULT_STORY_TYPE,
	data,
	children,
}: any) {
	// Change 'any' to StoryContentTypeProps
	switch (storyType) {
		case 'education':
			return <Education orgName={''} orgLocation={''} />;
		case 'experience':
			return (
				<Experience orgName={''} orgLocation={''} description={''} />
			);
		case 'project':
			return <Project projectName={''} orgName={''} description={''} />;
		case 'certificate':
			return <Certificate title={''} url={''} />;
		case 'achievement':
			return <Achievement title={''} />;
		case 'other':
			return <Other title={''} />;
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
