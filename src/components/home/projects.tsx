import React from 'react';
import ProjectAccordion from './projectAccordion';

export default function Projects() {
	return (
		<section className='home-section bg-dark-gray' id='projects'>
			<div className='max-section-width flex flex-col items-center gap-2'>
				<h1 className='h1 leading-normal self-start animate-text-bg before:bg-white hover:text-dark-gray'>
					Projects
				</h1>
				<ProjectAccordion />
			</div>
		</section>
	);
}
