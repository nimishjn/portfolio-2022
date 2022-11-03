import SkillBadge from 'components/common/SkillBadge';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CertificateProps } from 'utils/developerStory';
import { findSkill } from 'utils/findSkill';
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
		<div className='flex flex-col gap-1 items-start pt-2 w-full'>
			<div className='flex items-center justify-start gap-2'>
				{imageURL && (
					<div className='w-24 overflow-hidden aspect-square'>
						<Image
							src={imageURL}
							alt={title}
							height={200}
							width={200}
							objectFit='cover'
						/>
					</div>
				)}
				<h3 className='w-full font-semibold text-xl'>{title}</h3>
			</div>
			{skills.length > 0 && (
				<div>
					<h3 className='font-medium text-gray-300'>
						Acquired skills
					</h3>
					<ul className='flex flex-wrap items-start gap-3'>
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
			{url && (
				<Link passHref href={url}>
					<a
						target='_blank'
						className='text-sm bg-white text-black px-2 py-0.5 rounded-sm'
					>
						View
					</a>
				</Link>
			)}
		</div>
	);
}
