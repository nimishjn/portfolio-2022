import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { EducationProps } from 'utils/developerStory';
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
							placeholder='blur'
						/>
					</div>
				)}
				<div className='flex flex-col'>
					<h3 className='w-full font-semibold text-xl'>{orgName}</h3>
					<h4 className='w-full font-normal text-sm'>
						{orgLocation}
					</h4>
				</div>
			</div>
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
