import DeveloperStory from 'components/DeveloperStory';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Wave from 'react-wavify';
import { DeveloperStoryDataProps } from 'utils/developerStoryData';

export default function Projects({
	developerStoryData,
}: {
	developerStoryData: DeveloperStoryDataProps;
}) {
	const [position, setPosition] = useState('left');

	useEffect(() => {
		setPosition(window.innerWidth < 700 ? 'left' : 'alternate');
	}, []);

	return (
		<section
			className='home-section bg-dark-gray relative'
			id='developer-story'
		>
			<div className='max-section-width flex flex-col items-center md:items-start gap-2'>
				<h1 className='h1 leading-normal animate-text-bg before:bg-white hover:text-dark-gray'>
					Developer Story
				</h1>
				<p className='text-gray-500 text-2xs md:text-sm -mt-4 mb-5 md:-mt-7'>
					Things you cannot find on{' '}
					<Link
						passHref
						href='https://stackoverflow.com/users/story/join'
						legacyBehavior
					>
						<a target='_blank'>StackOverFlow</a>
					</Link>{' '}
					anymore :&#40;
				</p>
				<DeveloperStory
					developerStoryData={developerStoryData.filter(
						(e) => e.data.featured
					)}
					position={position as any}
					limitTo={3}
				/>
				<hr
					className={
						(position === 'alternate'
							? 'self-center'
							: 'self-start') +
						' bg-transparent border-dashed border-l-1 border-t-0 border-white h-8 -mt-2 -mb-2 mx-3'
					}
				/>
				<button className='text-lg md:border-dashed self-center border-1 border-white px-3 py-1 bg-blue-900 text-white hover:bg-transparent transition-colors duration-200'>
					<Link href='/story'>View all</Link>
				</button>
			</div>
			<Wave
				fill='black'
				paused={false}
				options={{
					height: 20,
					amplitude: 20,
					speed: 0.2,
					points: 3,
				}}
				className='absolute bottom-0 -mb-6 h-12 left-0 right-0 w-screen bg-dark-gray'
			/>
		</section>
	);
}
