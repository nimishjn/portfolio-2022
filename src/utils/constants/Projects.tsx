import { ProjectProps } from 'utils/developerStory';
import portfolioImg from '/public/images/project/portfolio-logo.jpeg';
import laserTag2022Img from '/public/images/project/lasertag-logo.jpeg';
import ccs2022Img from '/public/images/project/ccs-logo.png';
import cmsImg from '/public/images/project/cms-logo.png';
import otobusImg from '/public/images/project/otobus-logo.jpeg';
import adgLogo from '/public/images/project/adg-logo.jpeg';
import riddlerImg from '/public/images/project/riddler-logo.png';

export const allProjects: { [key: string]: ProjectProps } = {
	portfolio2022: {
		fromDate: 'Oct 2022',
		toDate: 'Present',
		projectName: 'Portfolio Website',
		orgName: 'Personal Project',
		imageURL: portfolioImg,
		description: `
A portfolio website to showcase my projects, skills, and research works.

![](/banner.png)

### Home Page
- Designed and built hero, about, skills, projects, research and contact sections.
- Implemented a working contact form using **Mailjet API**.
- Made use of **lottie animations** for efficient loading of SVGs.

### Developer Story
- Originally offered by [StackOverFlow](https://stackoverflow.com/users/story/join)
- This allows you to showcase your achievements, certificates, education, experience, projects, and research works.

### Other Features
- **Dynamic SEO** for Twitter, Facebook, and Open Graph using **next-sitemap**.
- Implemented 404 - Page Not Found page.
- Implemented page loading transitions.
- Lazy image loading for better **user experience**.
- The website is hosted on **Vercel** and the source code is available on GitHub.
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
		imageURL: laserTag2022Img,
		description: `
A great disturbance in the force can be felt again. Is it the rise of a skywalker or the rise of a phantom menace?
Come join CSI-VIT in a battle of LaserTag lightsabers to help restore balance to the force.

![LaserTag 2022](https://user-images.githubusercontent.com/63140632/196228176-3b8deccf-b0a6-4fd8-93d0-a485799c5bb1.gif)

### Homepage
- A landing page with event details, FAQs, and contact information.
- Used **Lottie animations** for efficient loading of SVG animations.

### Slot booking page
- Protected route accessible only by registered users.
- Users can choose from any of the slots spread across 3 days.

### Profile section
- Protected route accessible only by registered users.
- Users can view their details, payment status, booked slots, and also have the option to cancel them.

### Admin panel
- Protected route accessible only by admins.
- Admins can view all the registered users, their details, payment status, booked slots, and also have the option to modify them.

### Other features
- Integration with **[accounts.csivit.com](accounts.csivit.com)** for authentication
- Global error handling.
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
		imageURL: ccs2022Img,
		description: `
The recruitment portal for CSI Core Committee Selections, 2022.
A candidate can take a 30-minute subjective quiz in four different domains: i.e. Tech, Management, Design and Video.
After clearing round 1, the candidate can view different problem statements and submit links to their projects.
This would be followed by two rounds of interviews, lasting 45 to 60 minutes each.

![CCS](https://camo.githubusercontent.com/bd65f1466e2886efc63fd2dcab2170ea2bd661bb3c7f0479138d00db0248549a/68747470733a2f2f692e696d6775722e636f6d2f7a72616b3741582e706e67)

### Homepage
- A landing page with information about the chapter, domain descriptions, FAQs, and contact information.
- User details are fetched on the server side using **Next.js**.

### Quiz page
- A page where the candidate can take the quiz.
- The quiz is divided into 4 domains, and each domain has 10 questions.
- Implemented a custom color palette for each domain.
- The answers are auto-submitted every minute.

### Tasks page
- Users can view design and technical tasks and submit links to their projects.
- Tasks are only visible if they cleared round 1 and they have applied for the respective domain.

### Admin panel
- Protected route accessible only by admins.
- Admins can view all the registered users, their details, quiz scores, task submissions, and also have the option to modify them.
- Admins can also view the quiz answers and give scores to the candidates.

### Other features
- Global toast notifications for a better user experience.
- Global error handling and form validation.
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
		imageURL: cmsImg,
		description: `
This Java project titled Contact Management System aims to manage the contact information for a particular user.

![](https://user-images.githubusercontent.com/63140632/181920605-8017c89a-5eaf-423a-a641-281cb955ac67.png)

### Features
- Sign up
- Login
- Delete user
- Change Password
- Add contacts
- Display contacts
- Search contacts
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
		imageURL: otobusImg,
		description: `
The backend of otôbus, a bus management system, is a web-based application built by a team of three.

Features of the backend system include:
- Signup Route
- Login Route
- Sends JWT upon login and signup
- List of buses and route
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
		imageURL: otobusImg,
		description: `
The frontend of otôbus, a bus management system, is a web-based application built by a team of three.

Features of backend includes:
- Home Page 
- About Page 
- Navbar and Footer 
- A 404 error page 
- Signup 
- Login 
- Stores JWT for future sessions 
- List of buses 
- Display the details of individual buses
- Book a Bus 
- View Bookings 
- Delete a Booking 
- Theme toggle (Dark and Light Theme) 
- Data validation
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
		imageURL: adgLogo,
		description: `
The official website of ADG-VIT, a student community at VIT that brings together like-minded individuals who are interested in pursuing their dreams.
This project was built by a team of 3.

![adgvit](https://user-images.githubusercontent.com/63140632/200138524-1e337754-a103-4bc6-9b4a-7d3947f59a62.png)

The website consists of the following features:
- A landing page consisting of a hero section and a summary of important routes.

### Events page
- A user can view the details and register for events conducted by ADG-VIT.
- The events are listed in timeline format.
- The user can register if they are logged in.

### Project page
- Consist of details of projects built by ADG-VIT over the past years.
- Projects are displayed in alternate card fashion.

### Partners page
- Consist of a list of companies that collaborated with ADG-VIT.
- The list is displayed in a grid format.

### Domains page
- Consists of student domains present at ADG-VIT.

### Team page
- Consist of details of board members of ADG-VIT for the years 2021–22.
- User can also find contact details of the board members on hover.

### Other features
- Signup and login functionality.
- Global toast notifications for a better user experience.
- Global error handling and form validation.
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
		imageURL: riddlerImg,
		description: `
Riddler is a one-of-a-kind online cryptic hunt where players dive into the depths of the internet and 
navigate their way to the top of the leaderboard by cracking exhilarating riddles spread across various 
themes. The last 9 years have seen hundreds try their best every season, only to get bested themselves.

![Logo](https://user-images.githubusercontent.com/63140632/130457523-848b20e3-6ee9-4aeb-8058-919f95cc5681.gif)

This website consisted of two sections, namely the registration website and the game website.

### Registration website
- This has the landing page, rules, and registration form.
- Integrated with accounts.csivit.com for authentication.

### Game website
- This has the [guides](https://riddler-sample.vercel.app/guide), [leaderboard](https://riddler-sample.vercel.app/leaderboard), and the [game](https://riddler-sample.vercel.app/play) itself.
- This route is protected and can only be accessed by registered users.

### Game features
- The game starts with a tutorial for what the page contains.
- Then a map with 40 interconnected nodes can be seen.
- The user has to choose a starting node and unlock the next node by solving a riddle.
- The user can also use hints to solve the riddle; however, each hint costs a certain amount of points.
- The user has to freeze a node before solving.
- The user can unfreeze a node twice per day.
- Live leaderboard is also available.

### Other features
- Global toast notifications for a better user experience.
- Global error handling and form validation.
- Used redux for authentication and state management.

***Ps:** The deployment link is a sample deployment of the game website.*
        `,
		repoUrl: 'https://github.com/csivitu/riddler-frontend-2021',
		viewUrl: 'https://riddler-sample.vercel.app/',
		techStack: ['skill_reactjs', 'skill_materialui'],
	},

	portfolio2021: {
		fromDate: 'Jul 2021',
		toDate: 'Jul 2021',
		projectName: 'Portfolio Website (old)',
		orgName: 'Personal Project',
		imageURL: portfolioImg,
		description: `
A portfolio website to showcase my projects, skills, and research works.

![](https://user-images.githubusercontent.com/63140632/200137632-32794466-5f5a-4698-9c65-27e24473b003.png)

### Features
- Single page static landing page.
- Responsive design.
- Theme toggle (Dark and Light Themes).
- Skills and Project Section are rendered dynamically using JavaScript.
        `,
		repoUrl: 'https://github.com/nimishjn/portfolio-2022',
		viewUrl: 'https://nimish-jain.com',
		techStack: ['skill_html', 'skill_css', 'skill_javascript'],
	},
};
