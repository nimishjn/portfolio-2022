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
	orgName,
	...props
}: CertificateProps) {
	return (
		<>
			<StoryComponent.HeaderWrapper>
				<StoryComponent.SquareLogo imageURL={imageURL} />
				<div className='flex flex-col'>
					<h3 className='w-full font-semibold text-xl'>{title}</h3>
					<h4 className='w-full font-normal text-sm'>{orgName}</h4>
				</div>
			</StoryComponent.HeaderWrapper>
			{skills.length > 0 && (
				<div>
					<StoryComponent.Subheader>
						Acquired skills
					</StoryComponent.Subheader>
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
