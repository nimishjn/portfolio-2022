import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

// Story Square Logo Image
interface StorySquareLogoProps {
	imageURL?: StaticImageData;
}

function SquareLogo({ imageURL }: StorySquareLogoProps) {
	return (
		<>
			{imageURL && (
				<div className='w-16 md:w-24 overflow-hidden aspect-squar shrink-0'>
					<Image
						src={imageURL}
						alt='Logo'
						height={200}
						width={200}
						objectFit='cover'
						placeholder='blur'
					/>
				</div>
			)}
		</>
	);
}

// Story Content Arrow on left or right
const Arrow = (props: React.HTMLAttributes<HTMLOrSVGElement>) => {
	return (
		<svg
			viewBox='0 0 417 693'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M408.917 328.307L34.4385 5.35902C20.4742 -6.63845 0.0195312 4.17894 0.0195312 23.5519V669.448C0.0195312 688.821 20.4742 699.639 34.4385 687.641L408.917 364.693C419.636 355.449 419.636 337.551 408.917 328.307Z'
				fill='currentColor'
			/>
		</svg>
	);
};

// Empty Story Content
const EmptySpace = () => <div className='w-full h-full' />;

// Common Button for all Developer Story Content Types
interface StoryButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
	url?: string;
	children?: React.ReactNode;
}

const Button = ({ url, children = 'View', ...props }: StoryButtonProps) => {
	return (
		<>
			{url && (
				<Link passHref href={url}>
					<a
						target='_blank'
						className='text-sm bg-white uppercase hover:bg-blue-900 hover:text-white border-1 transition text-black px-2 py-0.5 rounded-sm flex-center'
						{...props}
					>
						{children}
					</a>
				</Link>
			)}
		</>
	);
};

// Story Content Header Wrapper
interface HeaderWrapperProps {
	children?: React.ReactNode;
}

const HeaderWrapper = ({ children }: HeaderWrapperProps) => {
	return (
		<div className='flex items-center justify-start gap-1.5 md:gap-2'>
			{children}
		</div>
	);
};

// Story Subheader
interface SubheaderProps {
	children?: React.ReactNode;
}

const Subheader = ({ children }: SubheaderProps) => {
	return (
		<div className='text-base md:text-lg text-white font-semibold mb-1'>
			{children}
		</div>
	);
};

function StoryComponent() {
	return <></>;
}

StoryComponent.SquareLogo = SquareLogo;
StoryComponent.Arrow = Arrow;
StoryComponent.EmptySpace = EmptySpace;
StoryComponent.Button = Button;
StoryComponent.HeaderWrapper = HeaderWrapper;
StoryComponent.Subheader = Subheader;

export default StoryComponent;
