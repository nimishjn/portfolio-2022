import Link from 'next/link';
import React, { useState } from 'react';
import { GoRepo } from 'react-icons/go';
import { Link as LinkScroll } from 'react-scroll';
import NavbarDropdown from './sidebar';

export default function Navbar() {
	const [display, setDisplay] = useState(false);

	const displayNavbar = () => {
		setDisplay(true);
	};

	const removeNavbar = () => {
		setDisplay(false);
	};

	return (
		<nav
			className='z-20 w-full fixed top-0 transition-all duration-300'
			style={{ marginTop: display ? 0 : '-64px' }}
		>
			<div className='max-w-6xl backdrop-blur-md rounded-xs md:mx-auto flex justify-between items-center bg-gray-900 bg-opacity-70 px-3 sm:px-6 md:px-10 lg:px-20 py-1 h-12 md:my-2'>
				<LinkScroll
					spy={true}
					smooth={true}
					offset={-32}
					duration={200}
					to='herosection'
					onSetActive={removeNavbar}
					onSetInactive={displayNavbar}
				>
					<span className='animate-text-bg before:bg-white hover:text-black font-league font-semibold tracking-wide text-xl leading-none pt-1 cursor-pointer'>
						NIMISH
					</span>
				</LinkScroll>
				<div className='hidden md:flex gap-2 items-center justify-center'>
					{navbarData.map((e, i) => {
						if (e.route || e.external) {
							return (
								<Link href={e.to} passHref legacyBehavior key={i}>
									<a
										target={e.external ? '_blank' : '_self'}
										rel='noopener noreferrer'
										className='text-sm px-3 py-2 flex items-center justify-center cursor-pointer uppercase hover:text-yellow-200'
										title='Repository URL'
									>
										{e.title}
									</a>
								</Link>
							);
						}
						return (
							<LinkScroll
								activeClass='text-yellow-300'
								className='text-sm px-3 py-2 flex items-center justify-center cursor-pointer uppercase hover:text-yellow-200'
								spy={true}
								smooth={true}
								offset={-32}
								duration={200}
								to={e.to}
								key={i}
							>
								<span>{e.title}</span>
							</LinkScroll>
						);
					})}
				</div>
				<div className='flex gap-3 items-center md:hidden'>
					<div className='md:hidden'>
						<NavbarDropdown />
					</div>
				</div>
				<Link
					href='https://github.com/nimishjn/portfolio-2022'
					passHref
					legacyBehavior
				>
					<a
						target='_blank'
						rel='noopener noreferrer'
						className='hidden md:block'
						title='Repository URL'
					>
						<GoRepo />
					</a>
				</Link>
			</div>
		</nav>
	);
}

export const navbarData = [
	{
		title: 'Developer Story',
		to: 'story',
		route: true,
	},
	{
		title: 'Resume',
		to: 'https://resume.nimish-jain.com',
		external: true,
	},
	{
		title: 'Contact me',
		to: 'contact',
	},
];
