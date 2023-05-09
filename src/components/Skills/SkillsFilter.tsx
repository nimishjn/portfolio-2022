import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiFilter } from 'react-icons/hi';
import { FcFilledFilter } from 'react-icons/fc';
import { Categories } from 'utils/constants/Skills';

function SkillsFilter({
	selectedCategory,
	setSelectedCategory,
	AllCategories,
}: {
	selectedCategory: (typeof Categories)[0];
	setSelectedCategory: React.Dispatch<
		React.SetStateAction<{
			name: string;
			id: string;
		}>
	>;
	AllCategories: typeof Categories;
}) {
	return (
		<Listbox value={selectedCategory} onChange={setSelectedCategory}>
			<div className='relative w-fit'>
				<Listbox.Button className='relative w-full cursor-default rounded-xs bg-white border-1 border-white py-0.5 md:py-1.5 pl-2 pr-10 text-sm text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300'>
					<span className='block truncate text-black'>
						{selectedCategory.name}
					</span>
					<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
						<FcFilledFilter
							className='h-5 w-5 text-gray-400'
							aria-hidden='true'
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave='transition ease-in duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<Listbox.Options className='absolute right-0 mt-1 max-h-60 overflow-auto rounded-xs bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
						{AllCategories.map((category, categoryIdx) => (
							<Listbox.Option
								key={categoryIdx}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-10 pr-4 ${
										active
											? 'bg-amber-100 text-amber-900'
											: 'text-gray-900'
									}`
								}
								value={category}
							>
								{({ selected }) => (
									<span
										className={`block text-left truncate ${
											selectedCategory.id === category.id
												? 'font-semibold'
												: 'font-normal'
										}`}
									>
										{category.name}
									</span>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);

	return (
		<div className='flex border-1 font-bold items-center rounded-xs py-0.5 md:py-1 px-1.5 md:px-2 gap-1 min-w-fit cursor-pointer hover:scale-110 transition ease-linear text-gray-900 text-sm md:text-base bg-white'>
			<HiFilter />
			<li className='list-none'>Filter</li>
		</div>
	);
}

export default SkillsFilter;
