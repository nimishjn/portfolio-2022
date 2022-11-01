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
				data={{
					fromDate: '2020-01-01',
					toDate: '2020-01-01',
					title: 'Certificate',
					url: 'https://i.imgur.com/4ZQ3Z4u.png',
					description: 'This is a description',
				}}
				position={position}
				storyType='certificate'
				index={0}
				firstIndex={true}
			/>
			<StoryItem
				data={{
					fromDate: '2020-01-01',
					toDate: '2020-01-01',
					orgName: 'Education',
					orgLocation: 'djoj',
				}}
				position={position}
				storyType='education'
				index={1}
			/>
			<StoryItem
				data={{
					fromDate: '2020-01-01',
					toDate: '2020-01-01',
					title: 'Other Data',
				}}
				position={position}
				storyType='other'
				index={2}
			/>
			<StoryItem
				data={{
					fromDate: '2020-01-01',
					toDate: '2020-01-01',
					projectName: 'Project 1',
					orgName: 'Org 1',
					description: 'This is a description',
				}}
				position={position}
				storyType='project'
				index={3}
			/>
			<StoryItem
				data={{
					fromDate: '2020-01-01',
					toDate: '2020-01-01',
					orgName: 'Org 2',
					orgLocation: 'Location 2',
					description: 'This is a description',
				}}
				position={position}
				storyType='experience'
				index={4}
			/>
			<StoryItem
				data={{
					fromDate: '2020-01-01',
					toDate: '2020-01-01',
					title: 'Certificate',
					url: 'https://i.imgur.com/4ZQ3Z4u.png',
					description: 'This is a description',
				}}
				position={position}
				storyType='certificate'
				index={5}
			/>
			<StoryItem
				data={{
					fromDate: '2020-01-01',
					toDate: '2020-01-01',
					orgName: 'Education',
					orgLocation: 'djoj',
				}}
				position={position}
				storyType='education'
				index={6}
			/>
			<StoryItem
				data={{
					fromDate: '2020-01-01',
					toDate: '2020-01-01',
					title: 'Other Data',
				}}
				position={position}
				index={7}
				storyType='other'
			/>
			<StoryItem
				data={{
					fromDate: '2020-01-01',
					toDate: '2020-01-01',
					projectName: 'Project 1',
					orgName: 'Org 1',
					description: 'This is a description',
				}}
				position={position}
				storyType='project'
				index={8}
			/>
			<StoryItem
				data={{
					fromDate: '2020-01-01',
					toDate: '2020-01-01',
					title: "I'm a title",
				}}
				position={position}
				storyType='achievement'
				index={9}
				lastIndex={true}
			/>
		</div>
	);
}
