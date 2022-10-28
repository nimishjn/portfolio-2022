import React from 'react';
import {
	DEFAULT_POSITION_TYPES,
	POSITION_TYPES,
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
}

export const StoryItem = ({
	position = DEFAULT_POSITION_TYPES,
	firstIndex = false,
	lastIndex = false,
	storyType = 'other',
	index,
	...props
}: StoryItemProps) => {
	const StorySeperatorProps = {
		firstIndex: firstIndex,
		lastIndex: lastIndex,
		storyType: storyType,
	};

	const StoryContentProps = {
		arrowRight:
			position === 'right' ||
			(position === 'alternate' && index % 2 === 0),
		arrowLeft:
			position === 'left' ||
			(position === 'alternate' && index % 2 !== 0),
		index: index,
		storyType: storyType,
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
