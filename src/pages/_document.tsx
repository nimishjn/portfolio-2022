import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	const BASE_URL = process.env.BASE_URL || 'https://nimish-jain.com';

	return (
		<Html>
			<Head>
				{/* Favicon */}
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon/favicon-16x16.png'
				/>
				<link rel='manifest' href='/favicon/site.webmanifest' />

				{/* SEO - Facebook */}
				<meta property='og:url' content={`${BASE_URL}`} />
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content='Nimish Jain | Portfolio Website'
				/>
				<meta
					property='og:description'
					content='A Full-Stack Developer | A Data Analytics Researcher'
				/>
				<meta property='og:image' content={`${BASE_URL}/banner.png`} />

				{/* SEO - Twitter */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content={`${BASE_URL}`} />
				<meta
					property='twitter:title'
					content='Nimish Jain | Portfolio Website'
				/>
				<meta
					property='twitter:description'
					content='A Full-Stack Developer | A Data Analytics Researcher'
				/>
				<meta
					property='twitter:image'
					content={`${BASE_URL}/banner.png`}
				/>

				{/* SEO - Google */}
				<meta
					name='description'
					content='A Full-Stack Developer | A Data Analytics Researcher'
				/>
				<meta
					name='keywords'
					content='Nimish Jain, Portfolio, Developer, Full-Stack Development'
				/>
				<meta name='author' content='Nimish Jain' />

				{/* Loading Fonts - League Spartan and Montserrat */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
