import React, { useState } from 'react';
import {
	DEFAULT_POSITION_TYPES,
	POSITION_TYPES,
	STORY_TYPES,
} from 'utils/developerStory';
import { StoryItem } from './StoryItem';
import { developerStoryData } from 'utils/developerStoryData';

interface DeveloperStoryProps extends React.HTMLAttributes<HTMLDivElement> {
	position?: POSITION_TYPES;
	limitTo?: number;
}

export default function DeveloperStory({
	position = DEFAULT_POSITION_TYPES,
	limitTo,
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
							lastIndex={index === developerStoryData.length - 1}
							key={index}
						/>
					))}
			</div>
			{limitToValue && limitToValue < developerStoryData.length && (
				<button
					onClick={() => setLimitToValue(undefined)}
					className='m-auto border-2 border-gray-500 px-3 py-1 hover:bg-gray-500 hover:text-black font-medium transition-colors'
				>
					Expand
				</button>
			)}
		</>
	);
}
