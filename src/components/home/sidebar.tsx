import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
	FaEnvelope,
	FaGithub,
	FaHackerrank,
	FaLinkedinIn,
	FaTimes,
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link as LinkScroll } from 'react-scroll';
import { SocialUrls } from 'utils/constants/urls';
import { navbarData } from './navbar';
import nimishNoBg from '/public/images/nimish-nobg.png';

export default function NavbarDropdown(props: JSX.IntrinsicAttributes) {
	const [display, setDisplay] = useState(false);

	const onOpen = () => {
		setDisplay(true);
	};

	const onClose = () => {
		setDisplay(false);
	};

	const onBackdropClose = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if ((e.target as HTMLInputElement).id === 'sidebar-backdrop') {
			setDisplay(false);
		}
	};

	return (
		<>
			<GiHamburgerMenu
				onClick={onOpen}
				className='text-xl cursor-pointer'
			/>
			<Transition
				show={display}
				enter='transition duration-300'
				enterFrom='translate-x-full'
				enterTo='translate-x-0'
				leave='transition duration-200'
				leaveFrom='translate-x-0'
				leaveTo='translate-x-full'
				unmount={false}
				className='fixed inline-block top-0 right-0 h-screen bottom-0 w-full z-20'
				id='sidebar-backdrop'
				onClick={onBackdropClose}
			>
				<div className='ml-auto p-5 w-60 h-full flex flex-col items-center bg-gray-900'>
					{/* Cancel Icon on top-right */}
					<FaTimes
						className='transition text-xl cursor-pointer self-start'
						onClick={onClose}
					/>
					{/* Logo */}
					<div className='w-3/4 sm:w-fit'>
						<Image
							className='rounded-full'
							height={500}
							width={500}
							src={nimishNoBg}
							alt='Nimish Jain'
							loading='lazy'
							placeholder='blur'
						/>
					</div>
					<LinkScroll
						spy={true}
						smooth={true}
						offset={-32}
						duration={200}
						to='herosection'
						onSetActive={onClose}
					>
						<h1 className='text-xl font-bold mb-2 cursor-pointer'>
							Nimish Jain
						</h1>
					</LinkScroll>
					{/* Social Links */}
					<div className='flex gap-1 md:gap-2 mb-4 text-xl md:text-2xl'>
						<Link passHref legacyBehavior href={SocialUrls.github}>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 hover:bg-slate-100 hover:bg-opacity-25 rounded-full'
							>
								<FaGithub />
							</a>
						</Link>
						<Link
							passHref
							legacyBehavior
							href={SocialUrls.linkedin}
						>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 hover:bg-slate-100 hover:bg-opacity-25 rounded-full'
							>
								<FaLinkedinIn />
							</a>
						</Link>
						<Link passHref legacyBehavior href={SocialUrls.email}>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 hover:bg-slate-100 hover:bg-opacity-25 rounded-full'
							>
								<FaEnvelope />
							</a>
						</Link>
						<Link
							passHref
							legacyBehavior
							href={SocialUrls.hackerrank}
						>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 hover:bg-slate-100 hover:bg-opacity-25 rounded-full'
							>
								<FaHackerrank />
							</a>
						</Link>
					</div>
					{/* Navbar Links */}
					{navbarData.map((e, i) => {
						if (e.route || e.external) {
							return (
								<Link
									key={i}
									href={e.to}
									passHref
									legacyBehavior
								>
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
			</Transition>
		</>
	);
}
