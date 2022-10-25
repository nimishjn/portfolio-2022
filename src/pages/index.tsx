import type { NextPage } from 'next';
import Head from 'next/head';

import HeroSection from 'components/home/herosection';
import Navbar from 'components/home/navbar';
import About from 'components/home/about';
import Skills from 'components/home/skills';
import Projects from 'components/home/projects';
import Research from 'components/home/research';
import Footer from 'components/footer';

const Home: NextPage = () => {
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
					content='A Full-Stack Developer & a Data Analytics Researcher'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='min-h-screen min-w-full'>
				<HeroSection />
				<Navbar />
				<About />
				<Skills />
				<Projects />
				<Research />
			</main>
			<Footer />
		</>
	);
};

export default Home;
