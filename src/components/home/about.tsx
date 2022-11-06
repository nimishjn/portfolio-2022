import React from 'react';
import Lottie from 'lottie-react';
import AboutMeAnimation from '../../assets/lottie/about-me.json';
import Wave from 'react-wavify';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function About() {
	return (
		<section className='home-section relative flex-center' id='about'>
			<div className='max-section-width h-full flex gap-4 items-center justify-center'>
				<div className='mr-10 hidden lg:block'>
					<Lottie
						animationData={AboutMeAnimation}
						className='max-w-sm'
					/>
				</div>
				<div className='lg:w-1/2 text-center lg:text-left'>
					<h1 className='h1 animate-text-bg before:bg-white hover:text-black'>
						About Me
					</h1>
					<ReactMarkdown
						allowedElements={['p', 'a', 'b', 'i', 'strong', 'em']}
						skipHtml
						className='flex flex-col items-start gap-2 font-extralight leading-loose tracking-wide mb-2 text-sm lg:text-base '
					>
						{about}
					</ReactMarkdown>
					<p className='leading-loose text-sm italic'>
						<span className='font-bold'>You know the drill</span> -
						Keep scrolling!
					</p>
				</div>
				<Wave
					fill='#101010'
					paused={false}
					options={{
						height: 20,
						amplitude: 20,
						speed: 0.2,
						points: 3,
					}}
					className='absolute bottom-0 -mb-6 h-12 left-0 right-0 w-screen bg-black'
				/>
			</div>
		</section>
	);
}

const about = `
I am a full stack developer with over one year of experience in **ReactJs**, **NextJs** and **NodeJs**.
I have a passion for building software that is elegant, simple, and functional.
I am not a one-trick programmer. I can build anything from the ground up and have a keen eye for design.
If you have an idea, I have a web solution for you.
I've also had conference papers and book chapters published in IEEE Xplore, Elsevier, and Springer as a **researcher**.
I enjoy music, binge-watching Netflix, and playing basketball.

I am currently open to new opportunities. If you have a project that you want to get started, think you need my help with something or just fancy saying hello, then ***[get in touch](#contact)***.
`;
