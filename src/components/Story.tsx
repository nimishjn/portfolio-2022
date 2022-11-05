import React, { useEffect, useState } from 'react';
import DeveloperStory from 'components/DeveloperStory';
import Link from 'next/link';
import Footer from 'components/footer';
import { developerStoryData } from 'utils/developerStoryData';
import { DeveloperStoryFilter } from './DeveloperStory/StoryFilter';
import { AiFillHome, AiOutlineLink } from 'react-icons/ai';

export default function Story() {
	const [position, setPosition] = useState('left');
	const [filteredStoryData, setFilteredStoryData] =
		useState(developerStoryData);
	useEffect(() => {
		setPosition(window.innerWidth < 500 ? 'left' : 'alternate');
	}, []);

	// This feature is not available for Mobile Devices with http protocol
	const copyUrl = async (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (navigator['share']) {
			await navigator.share({
				title: "Nimish's Developer Story",
				text: "Checkout Nimish's Developer Story",
				url: window.location.href,
			});
		} else if(navigator.clipboard) {
			navigator.clipboard.writeText(window.location.href);
			(
				e.currentTarget.lastChild as unknown as HTMLParagraphElement
			).textContent = 'Copied!';
		}
	};

	return (
		<>
			<section
				className='home-section min-h-fit bg-dark-gray relative'
				id='developerstory'
			>
				<div className='max-section-width flex flex-col items-center md:items-start gap-2'>
					<div className='sticky flex gap-2 top-2 md:top-4 text-white z-50'>
						<Link href='/'>
							<a className='flex items-center gap-1 border-2 borde-white px-2 md:px-3 py-2 rounded-full bg-dark-gray bg-opacity-50 backdrop-filter backdrop-blur-sm'>
								<AiFillHome className='text-base md:text-xl' />
								<p className='text-sm md:text-base mt-0.5'>
									Home
								</p>
							</a>
						</Link>
						<a
							onClick={copyUrl}
							className='flex transition items-center gap-1 border-2 borde-white px-2 md:px-3 py-2 rounded-full bg-dark-gray bg-opacity-50 backdrop-filter backdrop-blur-sm cursor-pointer'
						>
							<AiOutlineLink className='text-base md:text-xl' />
							<p className='text-sm md:text-base mt-0.5'>
								Share URL
							</p>
						</a>
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
					/>
				</div>
			</section>
			<Footer />
		</>
	);
}
