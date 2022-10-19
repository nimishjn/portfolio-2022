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
				'0.5': '0.5px',
				1: '1px',
			}
		},
	},
	plugins: [],
};
