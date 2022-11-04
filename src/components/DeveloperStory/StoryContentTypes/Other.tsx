import React from 'react';
import { OtherProps } from 'utils/developerStory';
import StoryComponent from '../StoryComponent';
import StoryDescription from '../StoryDescription';

export default function Other({
	title = 'No title',
	type,
	imageURL,
	description,
	url,
	...props
}: OtherProps) {
	return (
		<>
			<StoryComponent.HeaderWrapper>
				<StoryComponent.SquareLogo imageURL={imageURL} />
				<div className='flex flex-col'>
					<h3 className='w-full font-semibold text-xl'>{title}</h3>
					{type && (
						<h4 className='w-full font-normal text-sm'>{type}</h4>
					)}
				</div>
			</StoryComponent.HeaderWrapper>
			{description && <StoryDescription>{description}</StoryDescription>}
			<StoryComponent.Button url={url}>View</StoryComponent.Button>
		</>
	);
}
