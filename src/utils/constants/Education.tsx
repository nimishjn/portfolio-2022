import { EducationProps } from 'utils/developerStory';

export const allEducation: { [key: string]: EducationProps } = {
	smsslg: {
		fromDate: '2009',
		toDate: '2018',
		orgName: "St. Michael's School",
		orgLocation: 'Siliguri, India',
		imageURL: '/images/education/smsslg-logo.jpeg',
		url: 'https://smsslg.com/',
	},
	dpsrkp: {
		fromDate: '2018',
		toDate: '2020',
		orgName: 'Delhi Public School',
		orgLocation: 'R. K. Puram, India',
		imageURL: '/images/education/dpsrkp-logo.jpeg',
		url: 'https://dpsrkp.net/',
	},
	vit: {
		fromDate: '2020',
		toDate: '2024',
		orgName: 'Vellore Institute of Technology',
		orgLocation: 'Vellore, India',
		imageURL: '/images/education/vit-logo.jpeg',
		url: 'https://vit.ac.in/',
	},
};
