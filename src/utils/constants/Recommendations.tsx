export type RecommendationsType = {
	name: string;
	designation: string;
	linkedin?: string;
	company?: string;
	companyURL?: string;
	relation: string;
	testimonialURL?: string;
	message: string;
	date: string;
};

export const recommendations: RecommendationsType[] = [
	{
		name: 'Harsh Khaitan',
		designation: 'Founder',
		linkedin: 'https://www.linkedin.com/in/harsh-khaitan',
		company: 'Kwikpic',
		companyURL: 'https://kwikpic.in/',
		relation: 'Managed Nimish directly',
		testimonialURL: 'https://in.linkedin.com/in/nimishjn/#recommendations',
		date: 'Oct 2023',
		message:
			'Nimish is very hard working and reliable. He built the entire frontend of our sales CRM using Next.Js. Designs were not provided to him however he was very proactive to find the best frameworks and design libraries for our use case and built the CRM with a very good UX, that will also be scalable in the future!',
	},
	{
		name: 'Shreyan Ghosh',
		designation: 'Software Developer',
		linkedin: 'https://www.linkedin.com/in/shreyan-ghosh-0329bb196',
		company: 'Disecto',
		companyURL: 'https://disecto.com',
		relation: 'Managed Nimish directly',
		testimonialURL: 'https://in.linkedin.com/in/nimishjn/#recommendations',
		date: 'Feb 2023',
		message:
			'Nimish is an excellent asset in the domain of JavaScript/Typscript. He helped me come up with solutions for complex bugs in a time crunch. His fundamentals on react and NextJS is remarkable. I really recommend him as a React/NextJS developer.',
	},
	{
		name: 'Mukesh Vijayvergia',
		designation: 'Founder',
		linkedin: 'https://www.linkedin.com/in/mukesh-vijayvergia-b3aa85b',
		company: 'Nishkaera',
		companyURL: 'https://nishkaera.com',
		relation: 'Was a senior to Nimish',
		testimonialURL: 'https://in.linkedin.com/in/nimishjn/#recommendations',
		date: 'Jan 2022',
		message:
			'Nimish worked with our Web Development team and made major contribution in developing key features of the website. He is pro-active, knowledgeable and sincere with his work. He would be an excellent addition to any team that he will work in future.',
	},
];
