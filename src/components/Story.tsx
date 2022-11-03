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
					<Link href='/'>
						<a className='bg-white text-black p-3 rounded-full w-fit'>
							<AiFillHome />
						</a>
					</Link>
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
					<DeveloperStoryFilter
						setFilteredStoryData={setFilteredStoryData}
					/>
					<DeveloperStory
						developerStoryData={filteredStoryData}
						position={position as any}
						expandable
					/>
					{/* </div> */}
				</div>
			</section>
			<Footer />
		</>
	);
}
