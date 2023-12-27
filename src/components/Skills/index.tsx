import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import DevSkillsAnimation from '../../assets/lottie/developer-yoga.json';
import { Categories } from 'utils/constants/SkillCategories';
import SkillBadge from 'components/common/SkillBadge';
import SkillsFilter from './SkillsFilter';
import { skillInterface } from 'utils/developerStory';

const AllCategories = [
	{
		name: 'All Categories',
		id: 'all',
	},
	...Categories,
];

export default function Skills({ allSkills }: { allSkills: skillInterface[] }) {
	const [allSkillsFiltered, setAllSkillsFiltered] = useState(allSkills);
	const [selectedCategory, setSelectedCategory] = useState(AllCategories[0]);

	useEffect(() => {
		if (selectedCategory.id === 'all') {
			setAllSkillsFiltered(allSkills);
		} else {
			setAllSkillsFiltered(
				allSkills.filter(
					(skill) =>
						skill.category?.findIndex(
							(e: string) => e === selectedCategory.id
						) !== -1
				)
			);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedCategory]);

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
					<ul className='flex flex-row-reverse flex-wrap items-center justify-center lg:justify-start gap-3'>
						<SkillsFilter
							AllCategories={AllCategories}
							selectedCategory={selectedCategory}
							setSelectedCategory={setSelectedCategory}
						/>
						{allSkillsFiltered.map((skill, index) => (
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
