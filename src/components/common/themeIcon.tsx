import React from 'react';

// Todo: Add a theme switcher
export default function ThemeIcon() {
	return (
		<div className='w-1em h-1em'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='currentColor'
				stroke='currentColor'
				className='w-full h-full'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M12 3v1m0 16v1m9-9h-1m-16 0h-1m4.304-4.304l.707-.707m6.364 6.364l.707.707m-6.364-.707l-.707.707m6.364-6.364l-.707-.707M12 12a9 9 0 100-18 9 9 0 000 18z'
				/>
			</svg>
		</div>
	);
}
