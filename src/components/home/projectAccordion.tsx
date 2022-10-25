import { Disclosure } from '@headlessui/react';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	description?: string;
	image?: string;
	link?: string;
}

export default function ProjectAccordion(props: ProjectProps) {
	return (
		<Disclosure>
			{({ open }) => (
				<>
					<Disclosure.Button className='flex w-full justify-between'>
						<h2 className='h2'>Project 1</h2>
						<FaArrowUp
							className={`${
								open ? 'rotate-180 transform' : ''
							} h-5 w-5 transition duration-300`}
						/>
					</Disclosure.Button>
					<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
						{`If you're unhappy with your purchase for any reason,
						email us within 90 days and we'll refund you in full, no
						questions asked.`}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
