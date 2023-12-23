import type { NextPage } from 'next';
import Head from 'next/head';

import HeroSection from 'components/home/herosection';
import Navbar from 'components/home/navbar';
import About from 'components/home/about';
import Skills from 'components/Skills';
import Projects from 'components/home/projects';
import Research from 'components/home/research';
import Footer from 'components/footer';
import Testimonials from 'components/home/testimonials';
import { fetchDeveloperStoryData } from 'utils/fetchDeveloperStoryData';
import { DeveloperStoryDataProps } from 'utils/developerStoryData';

const Home = ({
	developerStoryData,
}: {
	developerStoryData: DeveloperStoryDataProps;
}) => {
	if (typeof window !== 'undefined') {
		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	}
	return (
		<>
			<Head>
				<title>Nimish Jain | Home</title>
				<meta
					name='description'
					content='A Full-Stack Developer | A Data Analytics Researcher'
				/>
			</Head>
			<main className='min-h-screen min-w-full'>
				<HeroSection />
				<Navbar />
				<About />
				<Skills />
				<Projects developerStoryData={developerStoryData} />
				<Research />
				<Testimonials />
			</main>
			<Footer />
		</>
	);
};

export async function getStaticProps() {
	const data = await fetchDeveloperStoryData();
	return {
		props: {
			developerStoryData: data,
		},
	};
}

export default Home;
