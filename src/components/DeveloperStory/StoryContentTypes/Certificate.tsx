import SkillBadge from 'components/common/SkillBadge';
import React from 'react';
import { CertificateProps } from 'utils/developerStory';
import { findSkill } from 'utils/findSkill';
import StoryComponent from '../StoryComponent';
import StoryDescription from '../StoryDescription';

export default function Certificate({
	title = 'No title',
	imageURL,
	description,
	skills = [],
	url,
	...props
}: CertificateProps) {
	return (
		<>
			<StoryComponent.HeaderWrapper>
				<StoryComponent.SquareLogo imageURL={imageURL} />
				<h3 className='w-full font-semibold text-xl'>{title}</h3>
			</StoryComponent.HeaderWrapper>
			{skills.length > 0 && (
				<div>
					<h3 className='font-medium text-gray-300'>
						Acquired skills
					</h3>
					<ul className='flex flex-wrap items-start gap-2'>
						{skills.map((tech, index) => {
							const skill = findSkill(tech);
							if (skill)
								return <SkillBadge skill={skill} key={index} />;
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
