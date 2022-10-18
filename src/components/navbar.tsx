import React from 'react';
import Link from 'next/link';

export default function Navbar() {
	return <nav className='sticky top-0 bg-gray-900 px-20 py-5 flex justify-between'>
		<h1>{"<Nimish>"}</h1>
		<ul className='flex gap-2 items-center justify-center'>
			<Link href="/">Home</Link>
			<Link href="/?section=about">About</Link>
			<Link href="/?section=skills">Tools and Skills</Link>
			<Link href="/?section=projects">Projects</Link>
			<Link href="/?section=research">Research</Link>
			<Link href="/?section=hireMe">Hire Me</Link>
		</ul>
		<button>dark</button>
	</nav>
}
