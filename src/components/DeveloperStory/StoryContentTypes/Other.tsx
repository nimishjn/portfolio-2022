import SkillBadge from 'components/common/SkillBadge';
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
	techStack = [],
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
			{techStack?.length > 0 && (
				<div>
					<StoryComponent.Subheader>
						Associated skills
					</StoryComponent.Subheader>
					<ul className='flex flex-wrap items-start gap-2'>
						{techStack.map((skill, index) => {
							if (skill)
								return (
									<SkillBadge
										skill={skill.skill}
										key={index}
									/>
								);
							else return null;
						})}
					</ul>
				</div>
			)}
			{description && <StoryDescription>{description}</StoryDescription>}
			<StoryComponent.Button url={url}>View</StoryComponent.Button>
		</>
	);
}
