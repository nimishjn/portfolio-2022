import React from 'react';
import Lottie from 'lottie-react';
import DevSkillsAnimation from '../../assets/lottie/developer-yoga.json';
import { allSkills } from 'utils/allSkills';
import Link from 'next/link';

export default function Skills() {
	return (
		<section
			className='home-section flex gap-4 items-center justify-center relative bg-dark-gray text-center md:text-right'
			id='skills'
		>
			<div className='md:w-1/2'>
				<h1 className='h1 animate-text-bg before:bg-white hover:text-dark-gray'>
					Tools & Skills
				</h1>
				<p className='font-extralight text-sm -mt-4 mb-4'>
					More of a{' '}
					<b>
						<i>learn-it-all</i>
					</b>
					, than a know-it-all.
				</p>
				<ul className='flex flex-wrap items-start justify-center md:justify-end gap-3'>
					{allSkills.map((skill, index) => (
						<Link href={skill.link} key={index}>
							<a
								target='_blank'
								style={{
									border: `1.2px solid ${skill.bgcolor}`,
								}}
								className='flex items-center rounded-xs py-1 px-2 gap-1 min-w-fit cursor-pointer hover:scale-110 transition ease-linear text-gray-200 text-sm md:text-base'
							>
								{skill.icon}
								<li className='list-none'>{skill.name}</li>
							</a>
						</Link>
					))}
				</ul>
			</div>
			<div className='mr-10 hidden md:block'>
				<Lottie
					animationData={DevSkillsAnimation}
					className='max-w-sm'
				/>
			</div>
		</section>
	);
}
