import type { NextPage } from 'next';
import Head from 'next/head';

import HeroSection from 'components/home/herosection';
import Navbar from 'components/home/navbar';
import About from 'components/home/about';
import Skills from 'components/Skills';
import Featured from 'components/home/featured';
import Research from 'components/home/research';
import Footer from 'components/footer';
import Testimonials from 'components/home/testimonials';

const Home: NextPage = () => {
	if (typeof window !== 'undefined') {
		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			window.document.documentElement.style.setProperty(
				'--vh',
				`${vh}px`
			);
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
				<Featured />
				<Research />
				<Testimonials />
			</main>
			<Footer />
		</>
	);
};

export default Home;
