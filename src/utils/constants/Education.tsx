import { EducationProps } from 'utils/developerStory';
import smsslgImg from '/public/images/education/smsslg-logo.jpeg';
import dpsrkpImg from '/public/images/education/dpsrkp-logo.jpeg';
import vitImg from '/public/images/education/vit-logo.jpeg';

export const allEducation: { [key: string]: EducationProps } = {
	smsslg: {
		fromDate: '2009',
		toDate: '2018',
		orgName: "St. Michael's School",
		orgLocation: 'Siliguri, India',
		imageURL: smsslgImg,
		url: 'https://smsslg.com/',
	},
	dpsrkp: {
		fromDate: '2018',
		toDate: '2020',
		orgName: 'Delhi Public School',
		orgLocation: 'R. K. Puram, India',
		imageURL: dpsrkpImg,
		url: 'https://dpsrkp.net/',
	},
	vit: {
		fromDate: '2020',
		toDate: 'Present (2024)',
		orgName: 'Vellore Institute of Technology',
		orgLocation: 'Vellore, India',
		imageURL: vitImg,
		url: 'https://vit.ac.in/',
		description: `
I am a third-year B. Tech undergrad majoring in Information Technology.

**CGPA:** 8.03/10.0

### Academics courses
- Data Structures and Algorithms
- Object Oriented Programming
- Database Management Systems
- Operating Systems
- Software Engineering
- Computer Architecture and Organization
- Data communication and Networks
- Computer Networks and Security
- Web Development (MEAN Stack)
- Human Computer Interaction
- Software Testing and Quality Assurance
- Statistics and Probability
- Discrete Mathematics
		`,
	},
};
