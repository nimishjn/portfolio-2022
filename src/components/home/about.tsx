import React from 'react';
import Lottie from 'lottie-react';
import AboutMeAnimation from '../../assets/lottie/about-me.json';
import Wave from 'react-wavify';

export default function About() {
	return (
		<section
			className='home-section flex gap-4 items-center justify-center relative'
			id='about'
		>
			<div className='mr-10 hidden md:block'>
				<Lottie animationData={AboutMeAnimation} className='max-w-sm' />
			</div>
			<div className='md:w-1/2'>
				<h1 className='h1 animate-text-bg before:bg-white hover:text-black'>
					About Me
				</h1>
				<p className='font-light leading-loose mb-5'>{about}</p>
				<p>
					<b>You know the drill </b> - Just keep scrolling!
				</p>
			</div>
			<div className='absolute -bottom-2 left-0 right-0 h-10'>
				<Wave
					fill='#101010'
					paused={false}
					options={{
						height: 20,
						amplitude: 20,
						speed: 0.20,
						points: 4,
					}}
				/>
			</div>
		</section>
	);
}

const about =
	"Hey, I am Nimish, a pre-final B. Tech undergrad studying Information Technology at Vellore Institute of Technology, Vellore. I am a full-stack developer who can do any design one throws at me, and a data analytics researcher in the data preprocessing domain. I've had conference papers and book chapters published in IEEE Xplore, Elsevier, and Springer. Music, Netflix, and basketball are my things.";
