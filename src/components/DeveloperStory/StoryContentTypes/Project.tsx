import SkillBadge from 'components/common/SkillBadge';
import React from 'react';
import { ProjectProps } from 'utils/developerStory';
import StoryComponent from '../StoryComponent';
import StoryDescription from '../StoryDescription';

export default function Project({
	projectName = 'No project name',
	orgName = 'No org name',
	imageURL,
	description,
	repoUrl,
	viewUrl,
	techStack = [],
	...props
}: ProjectProps) {
	return (
		<>
			<StoryComponent.HeaderWrapper>
				<StoryComponent.SquareLogo imageURL={imageURL} />
				<div className='flex flex-col'>
					<h3 className='w-full font-semibold text-xl'>
						{projectName}
					</h3>
					<h4 className='w-full font-normal text-sm'>{orgName}</h4>
				</div>
			</StoryComponent.HeaderWrapper>
			{techStack?.length > 0 && (
				<div>
					<StoryComponent.Subheader>
						Tech Stack
					</StoryComponent.Subheader>
					<ul className='flex flex-wrap items-start gap-2'>
						{techStack.map((skill, index) => {
							if (skill)
								return <SkillBadge skill={skill.skill} key={index} />;
							else return null;
						})}
					</ul>
				</div>
			)}
			<StoryDescription>{description}</StoryDescription>
			<div className='flex gap-2'>
				<StoryComponent.Button url={repoUrl}>
					Code
				</StoryComponent.Button>
				<StoryComponent.Button url={viewUrl}>
					View
				</StoryComponent.Button>
			</div>
		</>
	);
}
