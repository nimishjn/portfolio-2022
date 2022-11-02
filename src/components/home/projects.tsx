import DeveloperStory from 'components/DeveloperStory';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Wave from 'react-wavify';

export default function Projects() {
	const [position, setPosition] = useState('left');
	useEffect(() => {
		setPosition(window.innerWidth < 500 ? 'left' : 'alternate');
	}, []);

	return (
		<section
			className='home-section bg-dark-gray relative'
			id='developerstory'
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
					>
						<a target='_blank'>StackOverFlow</a>
					</Link>{' '}
					anymore :(
				</p>
				{/* TODO: Implement limited Developer Story for home page and 'View all' button */}
				{/* TODO: Implement 'View all' button that redirects to '/story' route */}
				{/* <div className='relative max-h-96 w-full overflow-auto'> */}
				<DeveloperStory position={position as any} limitTo={3} />
				{/* </div> */}
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
