import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CertificateProps } from 'utils/developerStory';
import StoryDescription from '../StoryDescription';

export default function Certificate({
	title = 'No title',
	imageURL,
	description,
	skills,
	url,
	...props
}: CertificateProps) {
	return (
		<div className='pt-2 w-full'>
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
