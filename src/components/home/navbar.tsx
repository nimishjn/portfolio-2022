import React, { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

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
			className='w-full fixed top-0 bg-gray-900 px-20 py-1 h-16 flex justify-between items-center transition-all duration-300'
			style={{ marginTop: display ? 0 : '-64px' }}
		>
			<LinkScroll
				spy={true}
				smooth={true}
				offset={-64}
				duration={200}
				to='herosection'
				onSetActive={removeNavbar}
				className="font-league font-semibold tracking-wide text-xl"
			>
				NIMISH
			</LinkScroll>
			<div className='flex gap-2 items-center justify-center'>
				{navbarData.map((e, i) => (
					<LinkScroll
						activeClass='nav-link-active'
						className='nav-link'
						spy={true}
						smooth={true}
						offset={-64}
						duration={200}
						to={e.section}
						onSetActive={displayNavbar}
						key={i}
					>
						<span>{e.title}</span>
					</LinkScroll>
				))}
			</div>
			<button>dark</button>
		</nav>
	);
}

const navbarData = [
	{
		title: 'About',
		section: 'about',
	},
	{
		title: 'Tools & Skills',
		section: 'skills',
	},
	{
		title: 'Projects',
		section: 'projects',
	},
	{
		title: 'Research',
		section: 'research',
	},
	{
		title: 'Hire me',
		section: 'contact',
	},
];
