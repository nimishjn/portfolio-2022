import React from 'react';
import { BsArrowRight, BsDot } from 'react-icons/bs';
import {
	AchievementProps,
	CertificateProps,
	DEFAULT_STORY_TYPE,
	EducationProps,
	ExperienceProps,
	OtherProps,
	ProjectProps,
	StoryContentTypeProps,
	storyTypes,
} from 'utils/developerStory';
import StoryComponent from './StoryComponent';
import Achievement from './StoryContentTypes/Achievement';
import Certificate from './StoryContentTypes/Certificate';
import Education from './StoryContentTypes/Education';
import Experience from './StoryContentTypes/Experience';
import Other from './StoryContentTypes/Other';
import Project from './StoryContentTypes/Project';

export default function StoryContent({
	storyType = DEFAULT_STORY_TYPE,
	arrowRight,
	arrowLeft,
	data,
}: StoryContentTypeProps) {
	const renderDates = data.fromDate || data.toDate;
	const renderToDate = data.toDate && data.toDate !== data.fromDate;
	return (
		<div className='relative bg-black break-words p-3 pt-9 flex flex-col items-center mx-2 mb-10 border border-white rounded-sm'>
			{arrowRight && (
				<StoryComponent.Arrow className='h-4 text-white absolute top-7 -right-2.5 border-2 border-transparent box-border' />
			)}
			{arrowLeft && (
				<StoryComponent.Arrow className='h-4 text-white absolute top-7 -left-2.5 border-2 border-transparent box-border rotate-180' />
			)}
			<div className='flex self-start text-xs gap-1 items-center absolute bg-white text-black py-1 px-2 -top-[1px] -left-[1px] rounded-br-sm rounded-tl-sm border border-white'>
				<p className='font-medium'>
					{storyTypes[storyType as keyof typeof storyTypes].title}
				</p>
				{renderDates && (
					<>
						<BsDot />
						<div className='flex items-center self-start gap-1'>
							<p className='font-normal'>{data.fromDate}</p>
							{renderToDate && (
								<>
									<BsArrowRight className='text-2xs' />
									<p className='font-normal'>{data.toDate}</p>
								</>
							)}
						</div>
					</>
				)}
			</div>
			<div className='flex flex-col gap-3 items-start w-full transition-all duration-200'>
				{storyType === 'education' && (
					<Education {...(data as EducationProps)} />
				)}
				{storyType === 'experience' && (
					<Experience {...(data as ExperienceProps)} />
				)}
				{storyType === 'project' && (
					<Project {...(data as ProjectProps)} />
				)}
				{storyType === 'certificate' && (
					<Certificate {...(data as CertificateProps)} />
				)}
				{storyType === 'achievement' && (
					<Achievement {...(data as AchievementProps)} />
				)}
				{storyType === 'other' && <Other {...(data as OtherProps)} />}
			</div>
		</div>
	);
}
