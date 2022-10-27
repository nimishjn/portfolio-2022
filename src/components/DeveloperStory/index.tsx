import React from 'react';
import { StoryItem } from './StoryItem';

interface DeveloperStoryProps extends React.HTMLAttributes<HTMLDivElement> {
	position?: 'left' | 'right' | 'alternate';
}

export default function DeveloperStory({
	position = 'alternate',
	...props
}: DeveloperStoryProps) {
	const outerClass = {
		left: 'grid-cols-[minmax(20px,25px)_1fr]',
		right: 'grid-cols-[1fr_minmax(20px,25px)]',
		alternate: 'grid-cols-[1fr_minmax(20px,25px)_1fr]',
	};
	return (
		<div className={outerClass[position || 'alternate'] + ' grid w-full'}>
			<StoryItem position={position} storyType='certificate' index={0} />
			<StoryItem position={position} storyType='education' index={1} />
			<StoryItem position={position} index={2} />
			<StoryItem position={position} storyType='project' index={3} />
			<StoryItem position={position} storyType='experience' index={4} />
			<StoryItem position={position} storyType='certificate' index={5} />
			<StoryItem position={position} storyType='education' index={6} />
			<StoryItem position={position} index={7} />
			<StoryItem position={position} storyType='project' index={8} />
			<StoryItem position={position} storyType='experience' index={9} />
		</div>
	);
}
