import React from 'react';

// TODO: Figure out an alternative to 'any' type
export const StoryArrow = (props: React.HTMLAttributes<HTMLOrSVGElement>) => {
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
