import React from 'react';
import Lottie from 'lottie-react';
import ResearchAnimation from '../../assets/lottie/data-analysis.json';
import SkillBadge from 'components/common/SkillBadge';
import { allResearchPapers, allResearchUrls } from 'utils/constants/Research';
import Link from 'next/link';

export default function Research() {
	return (
		<section className='home-section flex-center' id='research'>
			<div className='max-section-width flex gap-4 items-center justify-center relative text-center md:text-right'>
				<div className='md:w-1/2'>
					<h1 className='h1 animate-text-bg before:bg-white hover:text-dark-gray'>
						Research
					</h1>
					<ul className='flex flex-wrap items-start justify-center md:justify-end gap-3 mb-5'>
						{allResearchUrls.map((url, index) => (
							<SkillBadge skill={url} key={index} />
						))}
					</ul>
					<ul className='flex flex-wrap items-start justify-center md:justify-end gap-3'>
						{allResearchPapers.map((paper, index) => (
							<Link href={paper.link} key={index} passHref legacyBehavior>
								<a
									target={'_blank'}
									key={index}
									aria-label={paper.title}
									style={{
										backgroundImage: `url(${paper.img})`,
									}}
									className='relative flex-center w-1/4 aspect-a4 bg-cover bg-top bg-no-repeat cursor-pointer overflow-hidden border'
								>
									<div className='absolute text-xs sm:text-base flex items-start justify-start text-white top-0 right-0 px-2 sm:px-3 py-1 sm:py-1.5 bg-black rounded-bl-md'>
										{index + 1}
									</div>
									<div className='hidden md:flex-col-center justify-between text-transparent hover:text-black font-semibold p-1 text-xs text-center transition-colors absolute h-full left-0 right-0 botton-0 hover:bg-slate-300 hover:bg-opacity-25 hover:backdrop-blur-sm'>
										<p>{paper.title}</p>
										<div className='text-2xs font-normal'>
											<p>{paper.publisher}</p>
											<p>{paper.date}</p>
										</div>
									</div>
								</a>
							</Link>
						))}
					</ul>
				</div>
                {/* <div className='mr-10 absolute md:relative md:block -z-10 opacity-20 md:opacity-100 md:z-0 px-6'> */}
				<div className='mr-10 hidden md:block px-6'>
					<Lottie
						animationData={ResearchAnimation}
						className='max-w-sm'
					/>
				</div>
			</div>
		</section>
	);
}
