/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://nimish-portfolio.vercel.app",
	changefreq: 'daily',
	exclude: ['/api/*'],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
			{
				userAgent: '*',
				disallow: ['/api', '/images'],
			},
		],
	},
};
