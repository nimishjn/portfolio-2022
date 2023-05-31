export type RecommendationsType = {
	name: string;
	designation: string;
	company?: string;
	companyURL?: string;
	relation: string;
	testimonialURL?: string;
	message: string;
    date: string;
};

export const recommendations: RecommendationsType[] = [
	{
		name: 'Shreyan Ghosh',
		designation: 'Software Developer',
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
		company: 'Nishkaera',
		companyURL: 'https://nishkaera.com',
		relation: 'Was a senior to Nimish',
		testimonialURL: 'https://in.linkedin.com/in/nimishjn/#recommendations',
        date: 'Jan 2022',
		message:
			'Nimish worked with our Web Development team and made major contribution in developing key features of the website. He is pro-active, knowledgeable and sincere with his work. He would be an excellent addition to any team that he will work in future.',
	},
];
