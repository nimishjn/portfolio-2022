import React from 'react';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

export default function Navbar() {
	return (
		<nav className='sticky top-0 bg-gray-900 px-20 py-5 flex justify-between'>
			<h1>{'<Nimish>'}</h1>
			<div className='flex gap-2 items-center justify-center'>
				<LinkScroll
					activeClass='nav-link-active'
					spy={true}
					smooth={true}
					offset={-64}
					duration={200}
					to='about'
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
				>
					Research
				</LinkScroll>
				<LinkScroll
					activeClass='nav-link-active'
					spy={true}
					smooth={true}
					offset={-64}
					duration={200}
					to='hireMe'
				>
					Hire Me
				</LinkScroll>
			</div>
			<button>dark</button>
		</nav>
	);
}
