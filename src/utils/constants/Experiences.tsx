import { ExperienceProps } from 'utils/developerStory';
import csivitImg from '/public/images/experience/csi-logo.jpeg';
import adgvitImg from '/public/images/experience/adg-logo.jpeg';
import designAndCodeImg from '/public/images/experience/dc-logo.jpeg';
import nishkaeraImg from '/public/images/experience/nishkaera-logo.jpeg';
import disectoImg from '/public/images/experience/disecto-logo.jpeg';

export const allExperiences: { [key: string]: ExperienceProps } = {
	disecto: {
		fromDate: 'Nov 2022',
		toDate: 'Present',
		positionHeld: 'Frontend Engineer Intern',
		orgName: 'Disecto',
		orgLocation: 'Ahmedabad, India',
		url: 'https://www.disecto.com',
		imageURL: disectoImg,
		description: `
I am working on the frontend of various Disecto products.
This is a remote, part-time internship.

**About the Company:**
Disecto designs tools that enable Digital Security without compromising privacy and confidentiality. 
Our breakthrough technological innovations facilitate data sharing and unlock insights into sensitive data.

**Ekaant Project:**
Our state-of-the-art Decentralised Privacy preserving framework, Ekaant maximizes data 
utility and minimises the security risks. Ekaant is modular, scalable, and packs an array 
of Privacy Enhancing Technologies (PET). Our framework is quantum safe and future proof.

[Source](https://www.disecto.com/solution)
		`,
		featured: true,
	},
	csivit: {
		fromDate: 'Jan 2021',
		toDate: 'Present',
		positionHeld: 'Senior Core Member',
		orgName: 'Computer Society of India',
		orgLocation: 'Developer Student Clubs, VIT Vellore',
		url: 'https://csivit.com',
		imageURL: csivitImg,
		description: `
Working with the Computer Society of India has always been a great experience.
I understood how different teams like developers, designers, and writers work together to make a project or event successful.
I have also learned how to manage a team and the definition of **leadership**.

Our motto stands strong in whatever we do - **"When we build, it matters"**.

- Developed skills like Web Developement, Project Management, and Team Management.
- Devspace'21 organising committee member, an annual flagship hackathon with over 1400 registrations.
- Collaborated with four other people to develop the 'Spacey' Discord bot for Devspace'21.
- Organizing committee member of Riddler'21, an annual cryptic hunt with over 1100 registrations.
- As part of a four-person team, we created the front-end of the Riddler'21 website, that had over 700 active players.
- Organized Bugédex, a workshop, report writing, and blog writing competition on cyber security hosted by CloudSEK, with over 1000 registrations.
- Organizing committee member of CaSScade, a CSS battle, with over 200 registrations.
- Coordinator of Core Committee Selections, where we did one online quiz round and two interview rounds. In addition, we conducted over 200 interviews in two days.
- Organizing committee member of Devspace'22, an annual flagship hackathon with over 1200 registrations.
- Mentored junior developers to build LaserTag Slot Booking Website.
        `,
	},
	adgvit: {
		fromDate: 'Jan 2021',
		toDate: 'Present',
		positionHeld: 'Senior Core Member',
		orgName: 'Apple Developer Group',
		orgLocation: 'Developer Student Clubs, VIT Vellore',
		url: 'https://adgvit.com',
		imageURL: adgvitImg,
		description: `
The Apple Developer Group is a community of developers from a variety of fields, including iOS Dev, Web Dev, Machine Learning, and more.
We have a common goal of learning and sharing knowledge with each other.

Here is what I did at ADG:
- Worked in a team of 5 to build a static responsive tutorial website for ADG Connect App.
- Worked in a team of 3 to build the official website of ADG, 2022.
        `,
	},
	designAndCode: {
		fromDate: 'Nov 2021',
		toDate: 'Aug 2022',
		positionHeld: 'Core Team',
		orgName: 'Design and Code Community',
		orgLocation: 'Discord Server',
		url: 'https://designandcode.us',
		imageURL: designAndCodeImg,
		description: `
Design and Code is a community of developers and designers who are passionate about learning and sharing knowledge with each other.

- Managed open-source projects for Hacktoberfest'21, a month-long open-source event.
- Took administrative decisions for the community alongside the Founder.
- Maintained Linkify, an open-source ReactJs project, by Design and Code.
- Maintained and contributed to DC-Bot, the official Discord Bot of Design and Code.
- Moderated the official Discord server with over 4300 members.
- Did over 20 Resume Reviews for the community.
        `,
	},
	nishkaera: {
		fromDate: 'Aug 2021',
		toDate: 'Oct 2021',
		positionHeld: 'Web Developer Intern',
		orgName: 'Nishkaera',
		orgLocation: 'Mumbai, India',
		url: 'https://nishkaera.com',
		imageURL: nishkaeraImg,
		description: `
My first internship was with Nishkaera, a fintech startup that attempts to bring back those special virtues of India's golden age by blending best-in-class technology with financial know-how.

- Responsible for developing the company’s website, apps, and other related work.
- Developed the webinar section, consisting of a list of webinars, webinar details, and webinar registration.
- Developed the website for the company’s flagship product, the Detailed Financial Pulse.
- The Detailed Financial Pulse is a comprehensive financial report that provides a detailed analysis of the financial health of an individual.
        `,
	},
};
