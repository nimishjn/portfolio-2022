import { Transition } from '@headlessui/react';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import { ImSpinner10 } from 'react-icons/im';

export default function PageLoader() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		Router.events.on('routeChangeStart', (url, state) => {
			if (state?.shallow) return;
			setIsLoading(true);
		});

		Router.events.on('routeChangeComplete', (url, state) => {
			if (state?.shallow) return;
			setIsLoading(false);
		});

		Router.events.on('routeChangeError', (url, state) => {
			if (state?.shallow) return;
			setIsLoading(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [Router]);

	return (
		<>
			{
				<Transition
					show={isLoading}
					enter='transition duration-100'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
					unmount={false}
					className='fixed top-0 right-0 h-screen w-screen z-100 bg-zinc-900 flex-col-center gap-2'
					id='page-loader-backdrop'
				>
					<ImSpinner10 className='animate-spin text-5xl' />
					Loading Page
				</Transition>
			}
		</>
	);
}
