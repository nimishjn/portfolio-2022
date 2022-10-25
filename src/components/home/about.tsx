import React from 'react';
import Lottie from 'lottie-react';
import AboutMeAnimation from '../../assets/lottie/about-me.json';
import Wave from 'react-wavify';

export default function About() {
	return (
		<section className='home-section relative' id='about'>
			<div className='max-section-width h-full flex gap-4 items-center justify-center'>
				<div className='mr-10 hidden md:block'>
					<Lottie
						animationData={AboutMeAnimation}
						className='max-w-sm'
					/>
				</div>
				<div className='md:w-1/2 text-center md:text-left'>
					<h1 className='h1 animate-text-bg before:bg-white hover:text-black'>
						About Me
					</h1>
					<p className='font-extralight leading-loose mb-2 md:mb-5 text-sm md:text-lg'>
						{about}
					</p>
					<p className='font-medium leading-loose text-sm md:text-lg'>
						<span className='font-bold'>You know the drill </span> -
						Keep scrolling!
					</p>
				</div>
				<div className='absolute -bottom-10 left-0 right-0 w-screen'>
					<Wave
						fill='#101010'
						paused={false}
						options={{
							height: 20,
							amplitude: 20,
							speed: 0.2,
							points: 3,
						}}
					/>
				</div>
			</div>
		</section>
	);
}

const about =
	"Hey, I am Nimish, a pre-final B. Tech undergrad studying Information Technology at Vellore Institute of Technology, Vellore. I am a full-stack developer who can do any design one throws at me, and a data analytics researcher in the data preprocessing domain. I've had conference papers and book chapters published in IEEE Xplore, Elsevier, and Springer. Music, Netflix, and basketball are my things.";
