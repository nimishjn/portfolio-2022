import { SocialUrls } from 'utils/constants/urls';

export const redirects = [
	{
		source: '/about',
		destination: '/#about',
		permanent: true,
	},
	{
		source: '/skills',
		destination: '/#skills',
		permanent: true,
	},
	{
		source: '/contact',
		destination: '/#contact',
		permanent: true,
	},
	{
		source: '/research',
		destination: '/#research',
		permanent: true,
	},
	{
		source: '/resume',
		destination: SocialUrls.resume,
		permanent: true,
	},
];
