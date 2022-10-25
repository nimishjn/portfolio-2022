import React from 'react';
import Lottie from 'lottie-react';
import PageNotFoundAnimation from '../assets/lottie/404-dino.json';
import Button from 'components/common/Button';
import Link from 'next/link';

export default function Error404() {
	return (
		<div className='home-section flex flex-col gap-2 items-center justify-center'>
			<Lottie
				animationData={PageNotFoundAnimation}
				className='max-w-xs'
			/>
			<div className='flex items-center justify-center gap-2'>
				<Button onClick={() => window.history.back()}>Go Back</Button>
				<Button>
					<Link href='/'>Home</Link>
				</Button>
			</div>
		</div>
	);
}
