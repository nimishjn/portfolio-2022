import React from 'react';
import { ExperienceProps } from 'utils/developerStory';
import StoryComponent from '../StoryComponent';
import StoryDescription from '../StoryDescription';

export default function Experience({
	positionHeld,
	orgName = 'No name',
	orgLocation = 'No location',
	imageURL,
	description,
	url,
	...props
}: ExperienceProps) {
	return (
		<>
			<StoryComponent.HeaderWrapper>
				<StoryComponent.SquareLogo imageURL={imageURL} />
				<div className='flex flex-col'>
					<h3 className='w-full font-semibold text-xl'>
						{positionHeld}
					</h3>
					<h4 className='w-full font-medium text-sm'>{orgName}</h4>
					<h4 className='w-full font-normal text-xs text-gray-200'>
						{orgLocation}
					</h4>
				</div>
			</StoryComponent.HeaderWrapper>
			{description && <StoryDescription>{description}</StoryDescription>}
			<StoryComponent.Button url={url}>View</StoryComponent.Button>
		</>
	);
}
