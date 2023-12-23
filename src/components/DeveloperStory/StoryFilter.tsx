import React, { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { storyTypes } from 'utils/developerStory';
import {
	DeveloperStoryDataProps,
	developerStoryData,
} from 'utils/developerStoryData';
import { useRouter } from 'next/router';

interface DeveloperStoryFilterProps {
	setFilteredStoryData: Function;
	developerStoryData: DeveloperStoryDataProps;
}

export const DeveloperStoryFilter = ({
	setFilteredStoryData,
	developerStoryData,
}: DeveloperStoryFilterProps) => {
	const router = useRouter();
	const [chosenType, setChosenType] = useState('all');

	const filterData = () => {
		switch (chosenType) {
			case 'all':
				setFilteredStoryData(developerStoryData);
				break;
			default:
				setFilteredStoryData(
					developerStoryData.filter(
						(story) => story.storyType === chosenType
					)
				);
		}
	};

	const handleChoiceChange = (choice: string) => {
		setChosenType(choice);
		router.push(
			{
				pathname: '/story',
				query: { filter: choice },
			},
			undefined,
			{ shallow: true }
		);
	};

	useEffect(() => {
		filterData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chosenType]);

	useEffect(() => {
		if (!router.isReady) return;

		const {
			query: { filter },
		} = router;
		if (Object.keys(storyTypes).includes(filter as string)) {
			handleChoiceChange(filter as string);
		} else {
			handleChoiceChange('all');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.isReady]);

	return (
		<RadioGroup
			value={chosenType}
			onChange={handleChoiceChange}
			className='flex gap-2 items-center mb-5'
		>
			<p className='text-sm md:text-base'>Filter: </p>
			<div className='flex items-center justify-center md:justify-start gap-1 flex-wrap'>
				<RadioGroup.Option value='all'>
					{({ checked }) => (
						<span
							className={
								(checked
									? 'bg-blue-800'
									: 'bg-black') +
								' flex items-center justify-center gap-2 px-1.5 md:px-2 py-0.5 text-sm md:text-base md:py-1 border-1 cursor-pointer box-border'
							}
						>
							all
							<span className='bg-white text-black text-sm px-2 rounded-lg'>
								{developerStoryData?.length}
							</span>
						</span>
					)}
				</RadioGroup.Option>
				{Object.keys(storyTypes).map((key, index) => {
					return (
						<RadioGroup.Option value={key} key={index}>
							{({ checked }) => (
								<span
									className={
										(checked
											? 'bg-blue-800 '
											: '') +
										' flex items-center justify-center gap-2 px-1.5 md:px-2 py-0.5 text-sm md:text-base md:py-1 border-1 cursor-pointer box-border'
									}
								>
									{
										storyTypes[
											key as unknown as keyof typeof storyTypes
										]?.title
									}
									<span className='bg-white text-black text-sm px-2 rounded-lg'>
										{
											developerStoryData.filter(
												(sd) => sd.storyType === key
											)?.length
										}
									</span>
								</span>
							)}
						</RadioGroup.Option>
					);
				})}
			</div>
		</RadioGroup>
	);
};
