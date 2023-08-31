import { ExperienceProps } from 'utils/developerStory';
import csivitImg from '/public/images/experience/csi-logo.jpeg';
import adgvitImg from '/public/images/experience/adg-logo.jpeg';
import designAndCodeImg from '/public/images/experience/dc-logo.jpeg';
import nishkaeraImg from '/public/images/experience/nishkaera-logo.jpeg';
import disectoImg from '/public/images/experience/disecto-logo.jpeg';
import kwikpicImg from '/public/images/experience/kwikpic-logo.jpeg';
import luganodesImg from '/public/images/experience/luganodes-logo.jpeg';

export const allExperiences: { [key: string]: ExperienceProps } = {
	luganodes: {
		fromDate: 'Sep 2023',
		toDate: 'Present',
		positionHeld: 'SDE Intern',
		orgName: 'Luganodes',
		orgLocation: 'Lugano, CH',
		url: 'https://www.luganodes.com/',
		imageURL: luganodesImg,
		description: `
Our mission is to provide leading blockchain infrastructure for Proof of Stake (PoS) 
networks and to build a thriving web3 ecosystem.

Proof-of-Stake consensus based blockchains have validators instead of miners. 

Validators are servers (nodes) running blockchain software responsible for proposing, 
verifying transactions, and adding new blocks to the blockchain. It is technically challenging 
to run, manage and maintain validator nodes. That's where we come in to provide hassle-free staking services. 
		`,
		featured: true,
	},
	kwikpic: {
		fromDate: 'Jun 2023',
		toDate: 'Aug 2023',
		positionHeld: 'MERN Stack Developer Intern',
		orgName: 'Kwikpic',
		orgLocation: 'Mumbai, India',
		url: 'https://www.kwikpic.in/',
		imageURL: kwikpicImg,
		description: `
All-in-1 AI based photo sharing platform, enabling users to get their photos 
from public events and locations in just 1 tap and intelligently share pictures 
with friends and family in High Quality without messing up their gallery.

- Developed Customer Relationship Management (CRM) using NextJs and MongoDB.
- Built dynamic mongo aggregate queries to develop efficient pipelines reducing response time by 60%.
- Developed Data Table using AntD consisting of server-side pagination, filtering, sorting, single and bulk operations.
- Built a dynamic customer conversation and issue components with filtering, sorting and CRUD functionality.
- Added a bulk import page where users can upload,. view and edit CSV files.
- Developed an admin panel to edit team members.
		`,
		featured: true,
	},
	disecto: {
		fromDate: 'Nov 2022',
		toDate: 'Jun 2023',
		positionHeld: 'Frontend Engineer Intern',
		orgName: 'Disecto',
		orgLocation: 'Ahmedabad, India',
		url: 'https://www.disecto.com',
		imageURL: disectoImg,
		description: `
Disecto designs tools that enable Digital Security without compromising privacy and confidentiality. 
Our breakthrough technological innovations facilitate data sharing and unlock insights into sensitive data.

- Led the frontend team of INCOG Data Classification project and implemented an efficient SDLC that led to successful component implementation.
- Contributed over 20,000 lines of code to INCOG Project that helped to shape the product's functionality and user experience.
- Created a dynamic dashboard with real-time data visualization, enhancing decision-making processes for users.
- Developed a robust user and role management system, enabling seamless access control and user permissions.
- Implemented an SQL schema viewer using React Flow, allowing users to easily navigate and understand complex database structures.
- Developed a robust reports section utilizing Nivo Rocks and the D3 library resulting in visually appealing and engaging reports.

[Source](https://www.disecto.com)
		`,
		featured: true,
	},
	csivit: {
		fromDate: 'Jan 2021',
		toDate: 'Dec 2022',
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
		toDate: 'Jun 2023',
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

- Developed and implemented a responsive customer portal and an efficient admin panel for the webinar section, resulting in a 10x increase in the speed of handling the webinar process.
- Designed and incorporated a participant list feature along with email reminders, allowing easy management of webinar attendees.
- Led the successful reconstruction of the Detailed Financial Pulse, a critical tool utilized by thousands of users on a daily basis.
        `,
	},
};
