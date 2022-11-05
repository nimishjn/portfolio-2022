import { CertificateProps } from 'utils/developerStory';
import fccImg from '/public/images/certificates/fcc.png';

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
	},
};
