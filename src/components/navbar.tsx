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
			>
				Nimish
			</LinkScroll>
			<div className='flex gap-2 items-center justify-center'>
				<LinkScroll
					activeClass='nav-link-active'
					spy={true}
					smooth={true}
					offset={-64}
					duration={200}
					to='about'
					onSetActive={displayNavbar}
				>
					About
				</LinkScroll>
				<LinkScroll
					activeClass='nav-link-active'
					spy={true}
					smooth={true}
					offset={-64}
					duration={200}
					to='skills'
					onSetActive={displayNavbar}
				>
					Tools and Skills
				</LinkScroll>
				<LinkScroll
					activeClass='nav-link-active'
					spy={true}
					smooth={true}
					offset={-64}
					duration={200}
					to='projects'
					onSetActive={displayNavbar}
				>
					Projects
				</LinkScroll>
				<LinkScroll
					activeClass='nav-link-active'
					spy={true}
					smooth={true}
					offset={-64}
					duration={200}
					to='research'
					onSetActive={displayNavbar}
				>
					Research
				</LinkScroll>
				<LinkScroll
					activeClass='nav-link-active'
					spy={true}
					smooth={true}
					offset={-64}
					duration={200}
					to='contact'
					onSetActive={displayNavbar}
				>
					Hire Me
				</LinkScroll>
			</div>
			<button>dark</button>
		</nav>
	);
}
