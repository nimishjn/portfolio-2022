import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import React from 'react';
import Image from 'next/image';
import Button from 'components/common/Button';
import {
	FaGithub,
	FaHackerrank,
	FaLinkedinIn,
	FaTwitter,
} from 'react-icons/fa';
import { AiOutlineDownCircle } from 'react-icons/ai';
import { SocialUrls } from 'utils/urls';

export default function HeroSection() {
	return (
		<section
			className='home-section flex flex-col-reverse sm:flex-row gap-5 sm:gap-1 items-center justify-center relative'
			id='herosection'
		>
			{/* Left */}
			<div>
				<div>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-5 inline-block'>
						Hi, I am{' '}
						<span className='animate-text-bg before:bg-white hover:text-black'>
							Nimish
						</span>
					</h1>
					<h2 className='text-sm md:text-lg lg:text-xl font-light mb-1'>
						A Full-Stack Developer
					</h2>
					<h2 className='text-sm md:text-lg lg:text-xl font-light mb-2 sm:mb-3 md:mb-5'>
						A Data Analytics Researcher
					</h2>
				</div>
				<div className='flex gap-1 md:gap-2 mb-4 text-xl md:text-2xl'>
					<Link passHref href={SocialUrls.github}>
						<a
							target='_blank'
							rel='noopener noreferrer'
							className='p-2 hover:bg-slate-100 hover:bg-opacity-25 rounded-full'
						>
							<FaGithub />
						</a>
					</Link>
					<Link passHref href={SocialUrls.linkedin}>
						<a
							target='_blank'
							rel='noopener noreferrer'
							className='p-2 hover:bg-slate-100 hover:bg-opacity-25 rounded-full'
						>
							<FaLinkedinIn />
						</a>
					</Link>
					<Link passHref href={SocialUrls.twitter}>
						<a
							target='_blank'
							rel='noopener noreferrer'
							className='p-2 hover:bg-slate-100 hover:bg-opacity-25 rounded-full'
						>
							<FaTwitter />
						</a>
					</Link>
					<Link passHref href={SocialUrls.hackerrank}>
						<a
							target='_blank'
							rel='noopener noreferrer'
							className='p-2 hover:bg-slate-100 hover:bg-opacity-25 rounded-full'
						>
							<FaHackerrank />
						</a>
					</Link>
				</div>
				<div className='flex gap-2 item-center justify-center w-fit text-sm sm:text-base'>
					<Button variant='primary'>
						<Link href='https://resume.nimish-jain.com'>
							View Resume
						</Link>
					</Button>
					<Button variant='primary'>
						<LinkScroll
							spy={true}
							smooth={true}
							offset={-64}
							duration={200}
							to='contact'
						>
							Hire me
						</LinkScroll>
					</Button>
				</div>
			</div>
			{/* Right */}
			<div className='w-3/4 sm:w-fit'>
				<Image
					className='rounded-full'
					height={500}
					width={500}
					src='/images/nimish-nobg.png'
					alt='Nimish Jain'
				/>
			</div>
			<LinkScroll
				className='absolute bottom-4 text-xl opacity-40 animate-bounce'
				spy={true}
				smooth={true}
				offset={-64}
				duration={200}
				to='about'
			>
				<AiOutlineDownCircle />
			</LinkScroll>
		</section>
	);
}
