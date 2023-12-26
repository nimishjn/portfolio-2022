import { renderToStaticMarkup } from 'react-dom/server';
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
import { DeveloperStoryDataProps } from 'utils/fetchDeveloperStoryData';
import { fetchResearchData } from 'utils/graphQL/research';
import { fetchSkillData } from 'utils/graphQL/skill';
import { fetchTestimonialData } from 'utils/graphQL/testimonial';
import { fetchAboutData } from 'utils/graphQL/about';

const Home = ({
	developerStoryData,
	researchData,
	skillData,
	testimonialData,
	aboutData,
}: {
	developerStoryData: DeveloperStoryDataProps;
	researchData: any;
	skillData: any;
	testimonialData: any;
	aboutData: string;
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
				<About aboutContent={aboutData} />
				<Skills allSkills={skillData} />
				<Projects developerStoryData={developerStoryData} />
				<Research allResearchPapers={researchData} />
				<Testimonials recommendations={testimonialData} />
			</main>
			<Footer />
		</>
	);
};

export async function getStaticProps() {
	const [
		researchData,
		skillData,
		testimonialData,
		developerStoryData,
		aboutData,
	] = await Promise.all([
		fetchResearchData(),
		fetchSkillData(),
		fetchTestimonialData(),
		fetchDeveloperStoryData(),
		fetchAboutData(),
	]).then((res) => res);

	return {
		props: {
			researchData,
			skillData,
			testimonialData,
			developerStoryData,
			aboutData,
		},
	};
}

export default Home;
