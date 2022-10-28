import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import {
	DEFAULT_STORY_TYPE,
	storyTypes,
	STORY_TYPES,
} from 'utils/developerStory';
import { StoryArrow } from './StoryArrow';
import StoryContentType from './StoryContentTypes';

interface StoryContentProps extends React.HTMLAttributes<HTMLDivElement> {
	storyType?: STORY_TYPES;
	arrowRight?: boolean;
	arrowLeft?: boolean;
	fromDate?: string;
	toDate?: string;
}

export default function StoryContent({
	storyType = DEFAULT_STORY_TYPE,
	fromDate,
	toDate,
	arrowRight,
	arrowLeft,
}: StoryContentProps) {
	return (
		<div className='relative bg-black break-words p-2 pt-4 flex flex-col items-center mx-2 mb-2 border rounded-sm'>
			{arrowRight && (
				<StoryArrow className='h-4 text-white absolute top-7 -right-2.5 border-2 border-transparent box-border' />
			)}
			{arrowLeft && (
				<StoryArrow className='h-4 text-white absolute top-7 -left-2.5 border-2 border-transparent box-border rotate-180' />
			)}
			<div className='flex self-start text-xs gap-1 items-center absolute bg-white text-black py-0.5 px-1 top-0 left-0 rounded-br-sm'>
				<p>{storyTypes[storyType as keyof typeof storyTypes].title}</p>
				{(fromDate || toDate) && (
					<>
						<AiOutlineDoubleRight />
						<div className='flex self-start gap-0.5'>
							<p className='font-extralight'>{fromDate}</p>
							{toDate && toDate && <p>-</p>}
							<p className='font-extralight'>{toDate}</p>
						</div>
					</>
				)}
			</div>
			<StoryContentType storyType={storyType} data='hola' />
		</div>
	);
}
