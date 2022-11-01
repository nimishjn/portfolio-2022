import React from 'react';
import { DEFAULT_POSITION_TYPES, POSITION_TYPES } from 'utils/developerStory';
import { StoryItem } from './StoryItem';

interface DeveloperStoryProps extends React.HTMLAttributes<HTMLDivElement> {
	position?: POSITION_TYPES;
}

export default function DeveloperStory({
	position = DEFAULT_POSITION_TYPES,
	...props
}: DeveloperStoryProps) {
	const outerClass = {
		left: 'grid-cols-[minmax(20px,25px)_1fr]',
		right: 'grid-cols-[1fr_minmax(20px,25px)]',
		alternate: 'grid-cols-[1fr_minmax(20px,25px)_1fr]',
		'left-with-blank': 'grid-cols-[1fr_minmax(20px,25px)_1fr]',
		'right-with-blank': 'grid-cols-[1fr_minmax(20px,25px)_1fr]',
	};
	return (
		<div
			className={
				outerClass[position || DEFAULT_POSITION_TYPES] + ' grid w-full'
			}
		>
			<StoryItem
				position={position}
				storyType='certificate'
				index={0}
				firstIndex={true}
			/>
			<StoryItem position={position} storyType='education' index={1} />
			<StoryItem position={position} index={2} />
			<StoryItem position={position} storyType='project' index={3} />
			<StoryItem position={position} storyType='experience' index={4} />
			<StoryItem position={position} storyType='certificate' index={5} />
			<StoryItem position={position} storyType='education' index={6} />
			<StoryItem position={position} index={7} />
			<StoryItem position={position} storyType='project' index={8} />
			<StoryItem
				position={position}
				storyType='achievement'
				index={9}
				lastIndex={true}
			/>
		</div>
	);
}
