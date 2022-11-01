import React from 'react';
import { BsArrowRight, BsDot } from 'react-icons/bs';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
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
	STORY_TYPES,
} from 'utils/developerStory';
import { StoryArrow } from './StoryArrow';
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
	return (
		<div className='relative bg-black break-words p-2 pt-4 flex flex-col items-center mx-2 mb-2 border rounded-sm'>
			{arrowRight && (
				<StoryArrow className='h-4 text-white absolute top-7 -right-2.5 border-2 border-transparent box-border' />
			)}
			{arrowLeft && (
				<StoryArrow className='h-4 text-white absolute top-7 -left-2.5 border-2 border-transparent box-border rotate-180' />
			)}
			<div className='flex self-start text-xs gap-1 items-center absolute bg-white text-black py-0.5 px-1 top-0 left-0 rounded-br-sm'>
				<p>{storyTypes[storyType as keyof typeof storyTypes].title}</p>
				{(data.fromDate || data.toDate) && (
					<>
						<BsDot />
						<div className='flex items-center self-start gap-1'>
							<p className='font-extralight'>{data.fromDate}</p>
							{data.toDate && data.toDate && (
								<BsArrowRight className='text-2xs' />
							)}
							<p className='font-extralight'>{data.toDate}</p>
						</div>
					</>
				)}
			</div>
			{storyType === 'education' && (
				<Education {...(data as EducationProps)} />
			)}
			{storyType === 'experience' && (
				<Experience {...(data as ExperienceProps)} />
			)}
			{storyType === 'project' && <Project {...(data as ProjectProps)} />}
			{storyType === 'certificate' && (
				<Certificate {...(data as CertificateProps)} />
			)}
			{storyType === 'achievement' && (
				<Achievement {...(data as AchievementProps)} />
			)}
			{storyType === 'other' && <Other {...(data as OtherProps)} />}
		</div>
	);
}
