import React, { useEffect, useState } from 'react';
import DeveloperStory from 'components/DeveloperStory';
import Link from 'next/link';
import Footer from 'components/footer';
import { developerStoryData } from 'utils/developerStoryData';
import { DeveloperStoryFilter } from './DeveloperStory/StoryFilter';
import { AiFillHome } from 'react-icons/ai';

export default function Story() {
	const [position, setPosition] = useState('left');
	const [filteredStoryData, setFilteredStoryData] =
		useState(developerStoryData);
	useEffect(() => {
		setPosition(window.innerWidth < 500 ? 'left' : 'alternate');
	}, []);

	return (
		<>
			<section
				className='home-section min-h-fit bg-dark-gray relative'
				id='developerstory'
			>
				<div className='max-section-width flex flex-col items-center md:items-start gap-2'>
					<div className='sticky top-2 md:top-4 text-white border-2 borde-white px-2 md:px-3 py-2 rounded-full text-xl z-50 bg-dark-gray bg-opacity-50 backdrop-filter backdrop-blur-sm'>
						<Link href='/'>
							<a className='flex items-center gap-1'>
								<AiFillHome />
								<p className='text-base mt-0.5'>Home</p>
							</a>
						</Link>
					</div>
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
					<DeveloperStoryFilter
						setFilteredStoryData={setFilteredStoryData}
					/>
					<DeveloperStory
						developerStoryData={filteredStoryData}
						position={position as any}
						expandable
					/>
				</div>
			</section>
			<Footer />
		</>
	);
}
