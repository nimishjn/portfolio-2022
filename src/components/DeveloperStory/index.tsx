import React, { useState } from 'react';
import {
	DEFAULT_POSITION_TYPES,
	POSITION_TYPES,
	STORY_TYPES,
} from 'utils/developerStory';
import { DeveloperStoryDataProps } from 'utils/fetchDeveloperStoryData';
import { StoryItem } from './StoryItem';
import Lottie from 'lottie-react';
import NoResultAnimation from '../../assets/lottie/no-results.json';

interface DeveloperStoryProps extends React.HTMLAttributes<HTMLDivElement> {
	position?: POSITION_TYPES;
	limitTo?: number;
	developerStoryData: DeveloperStoryDataProps;
}

export default function DeveloperStory({
	position = DEFAULT_POSITION_TYPES,
	limitTo,
	developerStoryData,
	...props
}: DeveloperStoryProps) {
	const [limitToValue, setLimitToValue] = useState(limitTo);
	const outerClass = {
		left: 'grid-cols-[minmax(20px,25px)_1fr]',
		right: 'grid-cols-[1fr_minmax(20px,25px)]',
		alternate: 'grid-cols-[1fr_minmax(20px,25px)_1fr]',
		'left-with-blank': 'grid-cols-[1fr_minmax(20px,25px)_1fr]',
		'right-with-blank': 'grid-cols-[1fr_minmax(20px,25px)_1fr]',
	};
	return (
		<>
			<div
				className={
					outerClass[position || DEFAULT_POSITION_TYPES] +
					' grid w-full'
				}
			>
				{developerStoryData
					.slice(0, limitToValue)
					.map((storyItem, index) => (
						<StoryItem
							data={storyItem.data}
							position={position}
							storyType={storyItem.storyType as STORY_TYPES}
							index={index}
							firstIndex={index === 0}
							lastIndex={index === developerStoryData?.length - 1}
							key={index}
						/>
					))}
			</div>
			{developerStoryData?.length === 0 && (
				<div className='w-full flex-col-center'>
					<Lottie
						animationData={NoResultAnimation}
						className='max-w-xs'
					/>
					<h1 className='-mt-10 text-lg'>Nothing to show here!</h1>
				</div>
			)}
		</>
	);
}
