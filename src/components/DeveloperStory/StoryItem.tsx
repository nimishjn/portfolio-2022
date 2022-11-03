import React from 'react';
import {
	AchievementProps,
	CertificateProps,
	DEFAULT_POSITION_TYPES,
	DEFAULT_STORY_TYPE,
	EducationProps,
	ExperienceProps,
	OtherProps,
	POSITION_TYPES,
	ProjectProps,
	StoryContentTypeProps,
	STORY_TYPES,
} from 'utils/developerStory';
import StoryContent from './StoryContent';
import { StoryEmptySpace } from './StoryEmptySpace';
import { StorySeperator } from './StorySeperator';

// TODO: Add global storyType to StoryItemProps located in /utils/developerStory.tsx
interface StoryItemProps extends React.HTMLAttributes<HTMLDivElement> {
	position?: POSITION_TYPES;
	firstIndex?: boolean;
	lastIndex?: boolean;
	storyType?: STORY_TYPES;
	index: number;
	data:
		| AchievementProps
		| CertificateProps
		| EducationProps
		| ExperienceProps
		| OtherProps
		| ProjectProps;
}

interface StoryContentPropsInterface {
	arrowRight: boolean;
	arrowLeft: boolean;
	storyType: STORY_TYPES;
	// TODO: Remove 'any' and create fresh interface for 'data' below
	data: any;
}

export const StoryItem = ({
	position = DEFAULT_POSITION_TYPES,
	firstIndex = false,
	lastIndex = false,
	storyType = DEFAULT_STORY_TYPE,
	index,
	data,
	...props
}: StoryItemProps) => {
	const StorySeperatorProps = {
		firstIndex: firstIndex,
		lastIndex: lastIndex,
		storyType: storyType,
	};

	const StoryContentProps: StoryContentPropsInterface = {
		arrowRight:
			position === 'right' ||
			(position === 'alternate' && index % 2 === 0),
		arrowLeft:
			position === 'left' ||
			(position === 'alternate' && index % 2 !== 0),
		storyType: storyType,
		data: data,
	};

	switch (position) {
		case 'left':
			return (
				<>
					<StorySeperator {...StorySeperatorProps} />
					<StoryContent {...StoryContentProps} />
				</>
			);
		case 'left-with-blank':
			return (
				<>
					<StoryEmptySpace />
					<StorySeperator {...StorySeperatorProps} />
					<StoryContent {...StoryContentProps} />
				</>
			);
		case 'right':
			return (
				<>
					<StoryContent {...StoryContentProps} />
					<StorySeperator {...StorySeperatorProps} />
				</>
			);
		case 'right-with-blank':
			return (
				<>
					<StoryContent {...StoryContentProps} />
					<StorySeperator {...StorySeperatorProps} />
					<StoryEmptySpace />
				</>
			);
		case 'alternate':
		default:
			return (
				<>
					{index % 2 === 0 ? (
						<>
							<StoryContent {...StoryContentProps} />
							<StorySeperator {...StorySeperatorProps} />
							<StoryEmptySpace />
						</>
					) : (
						<>
							<StoryEmptySpace />
							<StorySeperator {...StorySeperatorProps} />
							<StoryContent {...StoryContentProps} />
						</>
					)}
				</>
			);
	}
};
