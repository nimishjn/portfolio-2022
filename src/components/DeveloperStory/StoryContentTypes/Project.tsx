import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProjectProps } from 'utils/developerStory';
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
		<div className='flex flex-col gap-1 items-start pt-2 w-full'>
			<div className='flex items-center justify-start gap-2'>
				{imageURL && (
					<div className='w-24 overflow-hidden aspect-square'>
						<Image
							src={imageURL}
							alt={orgName}
							height={200}
							width={200}
							objectFit='cover'
						/>
					</div>
				)}
				<div className='flex flex-col'>
					<h3 className='w-full font-semibold text-xl'>
						{projectName}
					</h3>
					<h4 className='w-full font-normal text-sm'>{orgName}</h4>
				</div>
			</div>
			<StoryDescription>{description}</StoryDescription>
			<div className='flex gap-2'>
				{repoUrl && (
					<Link passHref href={repoUrl}>
						<a
							target='_blank'
							className='text-sm bg-white text-black px-2 py-0.5 rounded-sm'
						>
							Code
						</a>
					</Link>
				)}
				{viewUrl && (
					<Link passHref href={viewUrl}>
						<a
							target='_blank'
							className='text-sm bg-white text-black px-2 py-0.5 rounded-sm'
						>
							View
						</a>
					</Link>
				)}
			</div>
		</div>
	);
}
