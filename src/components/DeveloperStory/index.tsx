import React from 'react';
import { DEFAULT_POSITION_TYPES, POSITION_TYPES } from 'utils/developerStory';
import { Experiences, Projects } from 'utils/portfolioData';
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
				data={Experiences.csivit}
				position={position}
				storyType='experience'
				index={0}
				firstIndex={true}
			/>
			<StoryItem
				data={Experiences.adgvit}
				position={position}
				storyType='experience'
				index={1}
			/>
			<StoryItem
				data={Projects.portfolio}
				position={position}
				storyType='project'
				index={2}
			/>
			<StoryItem
				data={Experiences.designAndCode}
				position={position}
				storyType='experience'
				index={3}
			/>
			<StoryItem
				data={Experiences.nishkaera}
				position={position}
				storyType='experience'
				index={4}
			/>
		</div>
	);
}
