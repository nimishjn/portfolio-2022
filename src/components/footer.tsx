import { Switch } from '@headlessui/react';
import React, { useState } from 'react';
import { GiNothingToSay } from 'react-icons/gi';
import { RiSendPlaneFill } from 'react-icons/ri';
import Lottie from 'lottie-react';
import ConnectionAnimation from '../assets/lottie/social-media-network.json';
import { allSocials } from 'utils/allSocials';
import SkillBadge from './common/SkillBadge';

export default function Footer() {
	const [anonymous, setAnonymous] = useState(false);
	const submitForm = (e: React.FormEvent) => {
		e.preventDefault();
		const scriptURL =
			'https://script.google.com/macros/s/AKfycbxhd-eQtInVaoQ_hWsLtgQSt7oEXjMMUkASrd2k-gObhuGQZx9STGuh_kX13yE9lLeVrA/exec';
		// fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		// 	.then((response) => console.log('Done!', response))
		// 	.catch((error) => console.log('Error!', error.message));

		(e.target as HTMLFormElement).reset();
	};
	return (
		<footer
			className='contact bg-dark-gray min-w-full py-16 px-3 sm:px-6 md:px-10 lg:px-20'
			id='contact'
		>
			<div className='max-section-width flex flex-col md:flex-row items-center justify-center gap-2'>
				<div className='mr-10 hidden md:block'>
					<Lottie
						animationData={ConnectionAnimation}
						className='max-w-sm'
					/>
				</div>
				<div className='w-full md:w-1/2'>
					<div className='relative w-fit m-auto md:m-0'>
						<h1 className='h1 leading-normal animate-text-bg before:bg-white hover:text-dark-gray'>
							Say hi!
						</h1>
						<GiNothingToSay className='absolute top-0 -right-7 text-2xl' />
					</div>
					<ul className='flex flex-wrap items-start justify-center md:justify-start mb-5 gap-3'>
						{allSocials.map((skill, index) => (
							<SkillBadge skill={skill} key={index} />
						))}
					</ul>
					<div className='flex-center gap-2 opacity-10 mb-4'>
						<hr className='w-full border-dashed' />
						<p className='text-sm'>or</p>
						<hr className='w-full border-dashed' />
					</div>
					<form onSubmit={submitForm} className='flex flex-col gap-3'>
						<div className='flex gap-2 items-center'>
							<label
								htmlFor='stay-anonymous'
								onClick={() => setAnonymous(!anonymous)}
							>
								Stay anonymous?
							</label>
							<Switch
								checked={anonymous}
								onChange={setAnonymous}
								className={`${
									anonymous ? 'bg-blue-600' : 'bg-blue-400'
								} relative inline-flex h-6 w-11 items-center rounded-full`}
								id='stay-anonymous'
							>
								<span className='sr-only'>
									Enable notifications
								</span>
								<span
									className={`${
										anonymous
											? 'translate-x-6'
											: 'translate-x-1'
									} inline-block h-4 w-4 transform rounded-full bg-white transition`}
								/>
							</Switch>
						</div>
						<div className='flex flex-col'>
							<label
								htmlFor='name'
								className='text-xs text-gray-400'
							>
								Name<span className='text-red-600'> *</span>
							</label>
							<input
								type='text'
								placeholder='Enter your name'
								className='bg-gray-700 bg-opacity-30 rounded-sm px-2 py-1 outline-none placeholder:text-gray-400 placeholder:text-xs text-sm border-transparent transition-all border ease-linear disabled:opacity-30'
								maxLength={100}
								disabled={anonymous}
								required
							/>
						</div>
						<div className='flex flex-col'>
							<label
								htmlFor='email'
								className='text-xs text-gray-400'
							>
								Email
								<span className='text-red-600'> *</span>
							</label>
							<input
								type='email'
								placeholder='Enter your email'
								className='bg-gray-700 bg-opacity-30 rounded-sm px-2 py-1 outline-none placeholder:text-gray-400 placeholder:text-xs text-sm border-transparent transition-all border ease-linear disabled:opacity-30'
								maxLength={100}
								disabled={anonymous}
								required
							/>
						</div>
						<div className='flex flex-col'>
							<label
								htmlFor='message'
								className='text-xs text-gray-400'
							>
								Message
								<span className='text-red-600'> *</span>
							</label>
							<textarea
								placeholder='Feel free to write anything. Feedback and advice are highly appreciated!'
								className='bg-gray-700 bg-opacity-30 rounded-sm px-2 py-1 outline-none placeholder:text-gray-400 placeholder:text-xs text-sm border-transparent transition-all border ease-linear'
								maxLength={1000}
								rows={5}
								required
							/>
						</div>
						<button className='bg-white text-black rounded-sm py-1 px-2 flex items-center justify-center gap-1'>
							Send <RiSendPlaneFill />
						</button>
					</form>
				</div>
			</div>
			<div className='flex justify-center items-center gap-2 pt-4 mt-10 border-t border-gray-700'>
				© 2022 All rights reserved. Nimish Jain.
			</div>
		</footer>
	);
}
