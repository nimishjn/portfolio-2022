/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: "'Montserrat', sans-serif",
				league: "'League Spartan', sans-serif",
			},
			borderWidth: {
				0.5: '0.5px',
				1: '1px',
			},
			height: {
				'1em': '1em',
				mscreen: 'calc(var(--vh, 1vh) * 100) 100vh',
			},
			minHeight: {
				mscreen: 'calc(var(--vh, 1vh) * 100) 100vh',
				6: '1.5rem',
				inf: '10000px',
			},
			maxHeight: {
				'12ch': '12ch',
			},
			width: {
				'1em': '1em',
				'1px': '1px',
			},
			colors: {
				'dark-gray': '#101010',
				'gray-1000': '#0d121c',
			},
			fontSize: {
				'2xs': '0.625rem',
			},
			aspectRatio: {
				a4: '1 / 1.414',
			},
		},
	},
	plugins: [],
};
