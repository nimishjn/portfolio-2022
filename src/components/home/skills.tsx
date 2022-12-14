import React from 'react';
import Lottie from 'lottie-react';
import DevSkillsAnimation from '../../assets/lottie/developer-yoga.json';
import { allSkills } from 'utils/constants/Skills';
import SkillBadge from 'components/common/SkillBadge';

export default function Skills() {
	return (
		<section className='home-section bg-dark-gray flex-center' id='skills'>
			<div className='max-section-width flex gap-4 items-center justify-center relative text-center lg:text-right'>
				<div className='lg:w-1/2'>
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
					<ul className='flex flex-wrap items-start justify-center lg:justify-end gap-3'>
						{allSkills.map((skill, index) => (
							<SkillBadge
								skill={skill}
								index={index}
								key={index}
							/>
						))}
					</ul>
				</div>
				<div className='mr-10 hidden lg:block'>
					<Lottie
						animationData={DevSkillsAnimation}
						className='max-w-sm'
					/>
				</div>
			</div>
		</section>
	);
}
