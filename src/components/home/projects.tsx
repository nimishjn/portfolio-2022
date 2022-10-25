import React from 'react';
import Wave from 'react-wavify';
import ProjectAccordion from './projectAccordion';

export default function Projects() {
	return (
		<section className='home-section bg-dark-gray relative' id='projects'>
			<div className='max-section-width flex flex-col items-center gap-2'>
				<h1 className='h1 leading-normal self-start animate-text-bg before:bg-white hover:text-dark-gray'>
					Projects
				</h1>
				<ProjectAccordion />
			</div>
			<div className='absolute -bottom-5 left-0 right-0 w-screen'>
				<Wave
					fill='black'
					paused={false}
					options={{
						height: 20,
						amplitude: 20,
						speed: 0.2,
						points: 3,
					}}
				/>
			</div>
		</section>
	);
}
