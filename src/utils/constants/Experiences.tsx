import { ExperienceProps } from 'utils/developerStory';
import csivitImg from '/public/images/experience/csi-logo.jpeg';
import adgvitImg from '/public/images/experience/adg-logo.jpeg';
import designAndCodeImg from '/public/images/experience/dc-logo.jpeg';
import nishkaeraImg from '/public/images/experience/nishkaera-logo.jpeg';

export const allExperiences: { [key: string]: ExperienceProps } = {
	csivit: {
		fromDate: 'Jan 2021',
		toDate: 'Present',
		orgName: 'Computer Society of India',
		orgLocation: 'Developer Student Clubs, VIT Vellore',
		url: 'https://csivit.com',
		imageURL: csivitImg,
		description: `
- Organizing committee member of Devspace'21, an annual flagship hackathon with over 1400 registrations.
- Worked in a team of 4 to create 'Spacey' discord bot for Devspace'21.
- Organizing committee member of Riddler'21, an annual cryptic hunt with over 1100 registrations.
- Worked on a team of 4 to create the front-end of the Riddler'21 website with over 700 active players.
- Organizing committee member of Bugédex, a workshop, report writing competition, and blog writing competition conducted by CloudSEK on Cyber Security with over 1000 registrations.
- Organizing committee member of CaSScade, a CSS battle, with over 200 registrations.
- Coordinator of Core Committee Selections, where we conducted one online quiz round and two interview rounds. We also conducted over 200 interviews in 2 days.
- Organizing committee member of Devspace'22, an annual flagship hackathon with over 1200 registrations.
        `,
	},
	adgvit: {
		fromDate: 'Jan 2021',
		toDate: 'Present',
		orgName: 'Apple Developer Group',
		orgLocation: 'Developer Student Clubs, VIT Vellore',
		url: 'https://adgvit.com',
		imageURL: adgvitImg,
		description: `
- Worked in a team of 5 to build a static responsive tutorial website for ADG Connect App.
- Worked in a team of 3 to build the official website of ADG, 2022.
        `,
	},
	designAndCode: {
		fromDate: 'Nov 2021',
		toDate: 'Aug 2022',
		orgName: 'Design and Code Community',
		orgLocation: 'Discord Server',
		url: 'https://designandcode.us',
		imageURL: designAndCodeImg,
		description: `
- Take administrative decisions for the community alongside the Founder.
- Moderating the official discord server with over 4000 members.
- Maintainer of Linkify, an open-source ReactJs Project by Design and Code.
- Maintainer of and contributor to DC-Bot, the official Discord Bot of Design and Code.
        `,
	},
	nishkaera: {
		fromDate: 'Aug 2021',
		toDate: 'Oct 2021',
		orgName: 'Nishkaera',
		orgLocation: 'Mumbai, India',
		url: 'https://nishkaera.com',
		imageURL: nishkaeraImg,
		description: `
- Responsible for developing company’s website, apps and other related work.
- Developed the webinar section.
- Developed the website for the company’s flagship product, the Detailed Financial Pulse.
        `,
	},
};
