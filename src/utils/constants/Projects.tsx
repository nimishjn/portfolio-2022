import { ProjectProps } from 'utils/developerStory';

export const allProjects: { [key: string]: ProjectProps } = {
	portfolio: {
		fromDate: 'Oct 2022',
		toDate: 'current',
		projectName: 'Portfolio Website',
		orgName: 'Personal Project',
		imageURL: '/images/project/portfolio-logo.jpeg',
		description: `
- A portfolio website built using Next.js, Tailwind CSS, and TypeScript.
- The website is hosted on Vercel and the source code is available on GitHub.
        `,
		repoUrl: 'https://github.com/nimishjn/portfolio-2022',
		viewUrl: 'https://nimish-jain.com',
		techStack: ['skill_nextjs', 'skill_tailwindcss', 'skill_typescript'],
	},

	laserTag2022: {
		fromDate: 'Oct 2022',
		toDate: 'Oct 2022',
		projectName: 'LaserTag Frontend',
		orgName: 'Computer Society of India',
		imageURL: '/images/project/lasertag-logo.jpeg',
		description: `
A great disturbance in the force can be felt again. Is it the rise of a skywalker or the rise of a phantom menace? Come join CSI-VIT in a battle of LaserTag lightsabers to help restore balance to the force.

Some features include:
- Homepage
- Integration with accounts.csivit.com for auth
- Slot booking page (Accessible on login)
- Profile section (Accessible on login)
- Admin panel (Accessible by admins)
        `,
		repoUrl: 'https://github.com/csivitu/LaserTag-Frontend',
		// viewUrl: 'https://nimish-jain.com',
		techStack: ['skill_reactjs', 'skill_tailwindcss', 'skill_materialui'],
	},

	ccs2022: {
		fromDate: 'Feb 2022',
		toDate: 'Mar 2022',
		projectName: 'Core Committee Selections',
		orgName: 'Computer Society of India',
		imageURL: '/images/project/ccs-logo.png',
		description: `
The recruitment portal for CSI Core Committee Selections, 2022. A candidate can take 30 minutes subjective quiz in 4 different domains. After clearing round 1, a candidate can view different problem statements and submit links to their projects. There is a profile section, where a user may submit links to their works in all 4 domains.

Some features include:
- Register, Login, Forgot Password Routes (Accessible by all)
- Profile Section (display and edit)
- Dynamic Landing page
- Subjective quiz for four domains
- Tasks display and submission
- Admin panel which could be accessed by specific users only
        `,
		repoUrl: 'https://github.com/csivitu/LaserTag-Frontend',
		// viewUrl: 'https://nimish-jain.com',
		techStack: ['skill_nextjs', 'skill_tailwindcss', 'skill_materialui'],
	},

	cms2022: {
		fromDate: 'Dec 2021',
		toDate: 'Dec 2021',
		projectName: 'Contact Management System',
		orgName: 'Academic Project',
		imageURL: '/images/project/cms-logo.png',
		description: `
An academic project which is used to perform the following functionalities:
- Sign up
- Login
- Delete user
- Change Password
- Add contacts
- Display contacts
- Edit contacts
- Delete contacts
- Delete all contacts
        `,
		repoUrl:
			'https://github.com/nimishjn/contact-management-system-mysql-javafx',
		// viewUrl: 'https://nimish-jain.com',
		techStack: ['skill_favafx', 'skill_mysql', 'skill_java'],
	},

	otobusBackend2022: {
		fromDate: 'Dec 2021',
		toDate: 'Dec 2021',
		projectName: 'Otôbus Backend',
		orgName: 'Academic Project',
		imageURL: '/images/project/otobus-logo.jpeg',
		description: `
The backend of otôbus, a bus management system, a web based application. 

Features of backend includes:
- Signup Route 
- Login Route 
- Sends JWT upon login and signup 
- List of buses Route 
- Bus Details Route 
- Booking a Bus Route 
- View Bookings Route 
- Delete Booking Route 
- User Details Route 
- Backend data validation 
- Responds with error or success codes for consistency
        `,
		repoUrl: 'https://github.com/nimishjn/otobus-backend',
		// viewUrl: 'https://nimish-jain.com',
		techStack: ['skill_nodejs', 'skill_mongodb', 'skill_expressjs'],
	},

	otobusFrontend2022: {
		fromDate: 'Dec 2021',
		toDate: 'Dec 2021',
		projectName: 'Otôbus Frontend',
		orgName: 'Academic Project',
		imageURL: '/images/project/otobus-logo.jpeg',
		description: `
The frontend of otôbus, a bus management system, a web based application. 

Features of backend includes:
- Home Page 
- About Page 
- Navbar and Footer 
- A 404 error page 
- Signup 
- Login 
- Stores JWT for future login 
- Listing of buses 
- Displaying the details of individual Buses 
- Booking a Bus 
- View Bookings 
- Delete a Booking 
- Theme toggle (Dark and Light Theme) 
- Frontend validation 
- Fully Responsive view to support all screen sizes
- Response handling i.e. Success and error code handling
        `,
		repoUrl: 'https://github.com/nimishjn/otobus-frontend',
		// viewUrl: 'https://nimish-jain.com',
		techStack: [
			'skill_angularjs',
			'skill_html',
			'skill_css',
			'skill_javascript',
		],
	},

	adgWebsite2022: {
		fromDate: 'Jul 2021',
		toDate: 'Sep 2021',
		projectName: 'Official ADG-VIT Website',
		orgName: 'Apple Developer Group',
		imageURL: '/images/project/adg-logo.jpeg',
		description: `
The official website of ADG-VIT, a student community at VIT that brings together like-minded individuals who are interested in Developing their Dream.

The website consists of the following feature:
- A landing page consisting of a hero section and a summary of important routes.
- Events page: A user can view the details and register for events conducted by ADG-VIT.
- Project page: Consist of details of projects built by ADG-VIT over the past years.
- Partners page: Consist of a list of companies that collaborated with ADG-VIT.
- Domains page: COnsists of student domains present at ADG-VIT.
- Teams page: Consist of details of board members of ADG-VIT for the years 2021-22.
- Signup and Login functionality.
        `,
		repoUrl: 'https://github.com/ADG-VIT/ADG-VIT-Website',
		viewUrl: 'https://adgvit.com/',
		techStack: ['skill_reactjs', 'skill_materialui'],
	},

	riddlerWebsite2022: {
		fromDate: 'Aug 2021',
		toDate: 'Aug 2021',
		projectName: 'Riddler Frontend',
		orgName: 'Computer Society of India',
		description: `
Riddler is a one-of-a-kind online cryptic hunt where players dive into the depths of the internet and navigate their way to the top of the leaderboard by cracking exhilarating riddles spread across various themes. The last 9 years have seen hundreds try their best every season, only to get bested themselves.

This website consisted of two sections, namely the registrations website and the game website. The whole website was made using react.js framework, along with the various packages that provided by the same. Check out the documentation for other details and the screenshots.
        `,
		repoUrl: 'https://github.com/csivitu/riddler-frontend-2021',
		viewUrl: 'https://riddler-sample.vercel.app/',
		techStack: ['skill_reactjs', 'skill_materialui'],
	},
};
