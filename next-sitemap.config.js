/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://nimish-jain.com",
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
