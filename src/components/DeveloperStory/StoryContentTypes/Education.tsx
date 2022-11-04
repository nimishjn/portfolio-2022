import React from 'react';
import { EducationProps } from 'utils/developerStory';
import StoryComponent from '../StoryComponent';
import StoryDescription from '../StoryDescription';

export default function Education({
	orgName = 'No name',
	orgLocation = 'No location',
	imageURL,
	description,
	url,
	...props
}: EducationProps) {
	return (
		<>
			<StoryComponent.HeaderWrapper>
				<StoryComponent.SquareLogo imageURL={imageURL} />
				<div className='flex flex-col'>
					<h3 className='w-full font-semibold text-xl'>{orgName}</h3>
					<h4 className='w-full font-normal text-sm'>
						{orgLocation}
					</h4>
				</div>
			</StoryComponent.HeaderWrapper>
			{description && <StoryDescription>{description}</StoryDescription>}
			<StoryComponent.Button url={url}>View</StoryComponent.Button>
		</>
	);
}
