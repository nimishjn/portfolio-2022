import { CertificateProps } from 'utils/developerStory';
import fccImg from '/public/images/certificates/fcc.png';
import llImg from '/public/images/certificates/linkedin-learning.png';

export const allCertificates: { [key: string]: CertificateProps } = {
	fcc1: {
		fromDate: 'May 2021',
		toDate: 'May 2021',
		title: 'Responsive Web Design',
		url: 'https://freecodecamp.org/certification/nimishjn/responsive-web-design',
		imageURL: fccImg,
		description: `
![](https://user-images.githubusercontent.com/63140632/200138672-e0552ba4-c234-409d-bacd-1cde19f3b98b.png)

In this Responsive Web Design Certification, I learnt the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.

First, I built a cat photo app to learn the basics of HTML and CSS. Later, I learnt modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a web form.

Finally, I learnt how to make webpages that respond to different screen sizes by building a Twitter card with Flexbox, and a complex blog layout with CSS Grid.
		`,
		skills: ['skill_html', 'skill_css'],
		orgName: 'FreeCodeCamp',
	},
	fcc2: {
		fromDate: 'Jun 2021',
		toDate: 'Jun 2021',
		title: 'JavaScript Algorithms and Data Structures',
		url: 'https://freecodecamp.org/certification/nimishjn/javascript-algorithms-and-data-structures',
		imageURL: fccImg,
		description: `
![](https://user-images.githubusercontent.com/63140632/200138670-030898f2-3cfd-4015-b7c0-6592beb0f299.png)

While HTML and CSS control the content and styling of a page, JavaScript is used to make it interactive. In the JavaScript Algorithm and Data Structures Certification, I learnt the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.

Once I had the fundamentals down, I applied that knowledge by creating algorithms to manipulate strings, factorialize numbers, and even calculate the orbit of the International Space Station.

Along the way, I also learnt two important programming styles or paradigms: Object Oriented Programming (OOP) and Functional Programming (FP).		
`,
		skills: ['skill_javascript'],
		orgName: 'FreeCodeCamp',
	},
	ll1: {
		fromDate: 'May 2023',
		toDate: 'May 2023',
		title: 'Writing a Tech Resume',
		url: 'https://www.linkedin.com/learning/certificates/e224243c2d71e7c96e5a49693842d039dcf269364bf088c05b4687cb2126fb8e',
		imageURL: llImg,
		description: `
![](https://github.com/nimishjn/portfolio-2022/assets/63140632/b0b2db69-7429-4d97-835a-6f0c708a9450)

## Objectives
- The optimal resume length
- Resume content
- Choosing the right words
- Creating a resume in a word processor vs. a dedicated tool
- Design dos and don’ts: from font to format
- Including extra information
- Creating a profile on LinkedIn or GitHub
`,
		skills: [],
		orgName: 'LinkedIn Learning',
	},
	ll2: {
		fromDate: 'May 2023',
		toDate: 'May 2023',
		title: 'Enterprise Architecture Foundations',
		url: 'https://www.linkedin.com/learning/certificates/1fad461c4eda7ea6196c75b59adfa6fccfa41edf229568d80977a712fb74b7dc',
		imageURL: llImg,
		description: `
![](https://github.com/nimishjn/portfolio-2022/assets/63140632/946535e5-e1dd-47b0-be74-b2e89a5cd404)

## Objectives
- Why do enterprises need architecture?
- How do enterprise architects add value in an organization?
- Application, solution, and enterprise architecture
- Pursuing EA as a career
- Working with EA frameworks and practices
- Integrating EA with process systems
- Creating a new EA organization
`,
		skills: [],
		orgName: 'LinkedIn Learning',
	},
	ll3: {
		fromDate: 'Jun 2023',
		toDate: 'Jun 2023',
		title: 'Learning Docker',
		url: 'https://www.linkedin.com/learning/certificates/58d28a8ee9aa240011034b113a9ec6d00edaed1f45f2a3c16646670f1ebf81fb',
		imageURL: llImg,
		description: `
![](https://github.com/nimishjn/portfolio-2022/assets/63140632/3debd869-968e-4719-a8cf-05cb75706f5c)
`,
		skills: ['skill_docker'],
		orgName: 'LinkedIn Learning',
	},
	ll4: {
		fromDate: 'Jun 2023',
		toDate: 'Jun 2023',
		title: 'React: Testing and Debugging',
		url: 'https://www.linkedin.com/learning/certificates/6d457ca86e8ae2588032cd3338ed0696c48593df732134d4a0dac473dd89c119',
		imageURL: llImg,
		description: `
![](https://github.com/nimishjn/portfolio-2022/assets/63140632/93b38a55-39b5-4266-a67a-126f136f16d5)

## Objectives
- Setting up for React testing and debugging
- Testing with Jest
- Snapshot testing
- Debugging with Chrome and Chrome extensions
- Optimizing React code with ESLINT
- Type checking
`,
		skills: ['skill_reactjs'],
		orgName: 'LinkedIn Learning',
	},
	ll5: {
		fromDate: 'Jun 2023',
		toDate: 'Jun 2023',
		title: 'Agile Software Development',
		url: 'https://www.linkedin.com/learning/certificates/ca2fcc4608e01594976101837e82f0a5e324c2cfb370116df4f160cfae8f60f3',
		imageURL: llImg,
		description: `
![](https://github.com/nimishjn/portfolio-2022/assets/63140632/cedc10d8-dc1d-4130-b546-69a5a4c5807d)

## Objectives
- Agile principles
- Scrum roles, artifacts, and rules
- Common myths and misconceptions about agile approaches
- Agile software engineering techniques
- Extreme programming (XP) and test-driven development (TDD)
- Kanban for developers
- Limiting work in progress (WIP)
- Scaling the output of agile teams
`,
		skills: [],
		orgName: 'LinkedIn Learning',
	},
};
