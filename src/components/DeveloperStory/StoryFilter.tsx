import React, { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { storyTypes } from 'utils/developerStory';
import { developerStoryData } from 'utils/developerStoryData';
import { useRouter } from 'next/router';

interface DeveloperStoryFilterProps {
	setFilteredStoryData: Function;
}

export const DeveloperStoryFilter = ({
	setFilteredStoryData,
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
								(checked ? 'bg-white text-black' : 'bg-black') +
								' px-1.5 md:px-2 py-0.5 text-sm md:text-base md:py-1 border-1 cursor-pointer box-border block'
							}
						>
							all
						</span>
					)}
				</RadioGroup.Option>
				{Object.keys(storyTypes).map((key, index) => {
					return (
						<RadioGroup.Option value={key} key={index}>
							{({ checked }) => (
								<span
									className={
										(checked ? 'bg-white text-black' : '') +
										' px-1.5 md:px-2 py-0.5 text-sm md:text-base md:py-1 border-1 cursor-pointer box-border block'
									}
								>
									{
										storyTypes[
											key as unknown as keyof typeof storyTypes
										].title
									}
								</span>
							)}
						</RadioGroup.Option>
					);
				})}
			</div>
		</RadioGroup>
	);
};
