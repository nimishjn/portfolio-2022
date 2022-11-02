import { FaResearchgate } from 'react-icons/fa';
import { SiGooglescholar, SiOrcid, SiPublons } from 'react-icons/si';
import { ResearchProfiles } from './urls';
import SciProfiles from '../../assets/icons/sci-profiles.svg';

export const allResearchPapers = [
	{
		id: 'paper1',
		img: '/images/Paper1.jpg',
		title: 'Modeling of Predictable Variations in Multi-Time Instant Ambient Temperature Time Series',
		abstract:
			"This paper effectively devised a novel approach to characterize the predictable variations in a multi-time instant ambient temperature time series. A multiple linear regression model is used to capture the annual predictable variations accurately. The clues for predictable variations upon detailed analysis of multi-time instant daily time resolution ambient temperature data led to the invention of a set of theoretical relevant deterministic regressors forming a reducing order model. A detailed result analysis has established that the proposed model is a suitable candidate for multi-time instant daily time step data and can be extended for the risk assessment of system analysis that accounts for the temperature effect. Further, probabilistic forecasting using regression-based methods can easily combat the above-limited number of theoretical relevant regressors for decent interval forecasts. The proposed model's effectiveness is analyzed using historical ambient temperature records collected from three distinct places in India.",
		link: 'https://ieeexplore.ieee.org/document/9404497',
		publisher: 'IEEE',
		date: 'Apr 21, 2021',
	},
	{
		id: 'paper2',
		img: '/images/Paper2.jpg',
		title: 'Performance Comparison of Two Statistical Parametric Methods for Outlier Detection and Correction',
		abstract:
			'Outlier detection and correction referred to as data preprocessing, is crucial in time series analysis and modeling. It has been a challenge to preprocess a volatile time series data possessing intricate trend characteristics. Two well-established statistical parametric methods, such as improved sliding window prediction and portrait dataset-based, perform adequate data preprocessing. While the former is equipped with an optimal window width selection approach, the latter, on the other hand, is based on a data visualization approach named portrait. This paper compares both methods’ preprocessing performance when applied to seasonal time series data with varying time resolutions and complex trend patterns for different content of outliers through detailed result analyses. Further, a new metric to measure outlier correction capability is suggested.',
		link: 'https://www.sciencedirect.com/science/article/pii/S2405896321014919',
		publisher: 'Elsevier',
		date: 'Nov 2, 2021',
	},
	{
		id: 'paper3',
		img: '/images/Paper3.jpg',
		title: 'New Performance Evaluation Metrics for Outlier Detection and Correction',
		abstract:
			'This paper proposes novel metrics for the numeric evaluation of outlier detection and correction. The downsides of the existing comparison approaches are detailed, and substitute metrics, complemented normalized sum of absolute deviations (CNSAD) and overall preprocessing performance (OPP) are proposed. Also, the suitability of two derived metrics in revealing methods’ capability in handling extreme outliers is detailed. The merits of CNSAD and OPP are critically analyzed by applying to a set of polluted data with the synthetically embedded trend and volatility effects.',
		link: 'https://link.springer.com/chapter/10.1007/978-981-16-9033-4_63',
		publisher: 'Springer',
		date: 'Mar 25, 2022',
	},
];

export const allResearchUrls = [
	{
		name: 'ORCID iD',
		icon: <SiOrcid />,
		bgcolor: '#A6CE39',
		link: ResearchProfiles.orcid,
	},
	{
		name: 'Google Scholar',
		icon: <SiGooglescholar />,
		bgcolor: '#356ac3',
		link: ResearchProfiles.googleScholar,
	},
	{
		name: 'Research Gate',
		icon: <FaResearchgate />,
		bgcolor: '#00cab9',
		link: ResearchProfiles.researchGate,
	},
	{
		name: 'Publons',
		icon: <SiPublons />,
		bgcolor: '#2d5c88',
		link: ResearchProfiles.publons,
	},
	{
		name: 'SciProfiles',
		icon: <SciProfiles height='1em' />,
		bgcolor: '#34c5df',
		link: ResearchProfiles.sciProfiles,
	},
];
