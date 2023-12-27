import { ResearchProfiles } from './urls';

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
		icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"></path></svg>`,
		bgcolor: '#A6CE39',
		link: ResearchProfiles.orcid,
	},
	{
		name: 'Google Scholar',
		icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"></path></svg>`,
		bgcolor: '#356ac3',
		link: ResearchProfiles.googleScholar,
	},
	{
		name: 'Research Gate',
		icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32v448h448V32H0zm262.2 334.4c-6.6 3-33.2 6-50-14.2-9.2-10.6-25.3-33.3-42.2-63.6-8.9 0-14.7 0-21.4-.6v46.4c0 23.5 6 21.2 25.8 23.9v8.1c-6.9-.3-23.1-.8-35.6-.8-13.1 0-26.1.6-33.6.8v-8.1c15.5-2.9 22-1.3 22-23.9V225c0-22.6-6.4-21-22-23.9V193c25.8 1 53.1-.6 70.9-.6 31.7 0 55.9 14.4 55.9 45.6 0 21.1-16.7 42.2-39.2 47.5 13.6 24.2 30 45.6 42.2 58.9 7.2 7.8 17.2 14.7 27.2 14.7v7.3zm22.9-135c-23.3 0-32.2-15.7-32.2-32.2V167c0-12.2 8.8-30.4 34-30.4s30.4 17.9 30.4 17.9l-10.7 7.2s-5.5-12.5-19.7-12.5c-7.9 0-19.7 7.3-19.7 19.7v26.8c0 13.4 6.6 23.3 17.9 23.3 14.1 0 21.5-10.9 21.5-26.8h-17.9v-10.7h30.4c0 20.5 4.7 49.9-34 49.9zm-116.5 44.7c-9.4 0-13.6-.3-20-.8v-69.7c6.4-.6 15-.6 22.5-.6 23.3 0 37.2 12.2 37.2 34.5 0 21.9-15 36.6-39.7 36.6z"></path></svg>`,
		bgcolor: '#00cab9',
		link: ResearchProfiles.researchGate,
	},
	{
		name: 'Publons',
		icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M0 0v24h24V0zm10.34 5.1c.083.014.114.096.156.158.054.354.1.71.154 1.065.157-.162.31-.328.49-.464.867-.666 2.05-.94 3.11-.63.72.21 1.315.72 1.756 1.316.187.263.348.547.45.855.198.582.225 1.206.198 1.815-.053 1.12-.433 2.244-1.169 3.103a4.029 4.029 0 01-2.616 1.41 4.418 4.418 0 01-2.188-.317c.019 1.01.032 2.018.038 3.028.021.465-.021.938.087 1.396.031.14.123.292.28.308.302.036.608.013.912.02.057 0 .13.037.126.101.004.186.009.373-.004.56-.046.092-.17.07-.255.072a44.358 44.358 0 00-4.437 0l-.07-.056c-.004-.22-.063-.467.034-.671.3-.035.606.02.904-.032.191-.048.268-.26.295-.434.04-.32.027-.642.042-.963V8.348c0-.156.006-.31-.008-.465a.888.888 0 00-.34-.656c-.203-.158-.438-.265-.662-.388-.082-.052-.181-.097-.229-.187a.985.985 0 01.008-.337c.056-.066.144-.086.219-.122.73-.315 1.456-.636 2.185-.952.17-.068.346-.144.533-.144zm1.99 1.146c-.053 0-.104 0-.156.013a2.12 2.12 0 00-1.493.86c.005 1.44 0 2.88.003 4.32.005.327.073.676.302.924.524.512 1.302.692 2.014.593.577-.096 1.037-.538 1.279-1.054.344-.736.395-1.571.335-2.371-.053-.655-.181-1.312-.449-1.915-.184-.407-.442-.793-.811-1.054a1.717 1.717 0 00-1.024-.313z"></path></svg>`,
		bgcolor: '#2d5c88',
		link: ResearchProfiles.publons,
	},
	{
		name: 'SciProfiles',
		icon: `<svg viewBox="0 0 200 200" fill="none"  height="1em" width="1em"   xmlns="http://www.w3.org/2000/svg">     <path d="M37.909 109.175C38.1512 93.6354 40.7452 70.6469 45.2536 51.3706L7 71.2157L46.2876 178.581L130.494 189.858L138.134 181.364C114.54 180.471 72.5463 163.947 50.7252 148.884C41.1884 142.291 37.7612 119.994 37.909 109.175Z" fill="#337A87"/>     <path d="M190.687 59.7859C187.768 42.1302 164.688 24.7498 146.489 19.8267C115.361 11.3872 74.3428 3.52258 59.033 18.2C53.4315 23.5695 48.7753 36.351 45.2715 51.3464L88.7603 28.7922L178.946 49.8114L186.037 128.091L138.134 181.364C140.719 181.497 143.31 181.362 145.869 180.96C160.682 178.422 181.197 162.002 186.568 144.811C191.762 128.195 195.415 88.4007 190.687 59.7859Z" fill="#9FD6E0"/>     <path d="M178.947 49.8112L88.761 28.8164L45.2722 51.3707C40.7638 70.6714 38.1817 93.6354 37.9276 109.175C37.7621 119.994 41.1892 142.291 50.726 148.884C72.5236 163.947 114.541 180.471 138.135 181.364L186.038 128.091L178.947 49.8112Z" fill="#35C5DF"/>     <path d="M56.2266 128.238L63.1221 119.829C67.8492 124.44 74.1125 127.541 80.1749 127.541C87.4959 127.541 91.4902 124.128 91.4902 118.9C91.4902 113.396 87.2832 111.628 81.333 109.017L72.3811 104.999C65.8815 102.21 59.1041 96.8771 59.1041 86.9454C59.1041 76.0903 68.3691 67.7119 81.2384 67.7119C88.8451 67.7268 96.1388 70.8475 101.535 76.396L95.461 84.1689C91.2716 80.4996 86.8341 78.3591 81.2384 78.3591C75.0755 78.3591 71.0695 81.3252 71.0695 86.2299C71.0695 91.5015 76.0269 93.4463 81.4867 95.758L90.3144 99.5863C98.1436 102.95 103.58 108.087 103.58 117.933C103.58 128.972 94.7164 138.194 79.9444 138.194C71.0869 138.202 62.5766 134.629 56.2266 128.238Z" fill="black"/>     <path d="M110.776 111.432C110.776 94.4117 122.423 84.5901 135.594 84.5901C140.932 84.5448 146.089 86.592 150.029 90.3204L144.321 98.2217C141.721 95.8672 139.263 94.5524 136.208 94.5524C128.308 94.5524 122.86 101.279 122.86 111.462C122.86 121.645 128.243 128.292 135.859 128.292C139.683 128.292 143.193 126.354 145.994 123.92L150.768 131.913C146.308 135.967 140.573 138.199 134.636 138.187C121.129 138.187 110.776 128.366 110.776 111.432Z" fill="black"/>     <path d="M157.267 70.1331C157.267 66.0602 160.357 63.2837 164.505 63.2837C168.653 63.2837 171.744 66.0602 171.744 70.1331C171.744 74.2061 168.653 76.9826 164.505 76.9826C160.357 76.9826 157.267 74.1266 157.267 70.1331ZM158.584 85.838H170.349V136.94H158.609L158.584 85.838Z" fill="black"/> </svg>`,
		bgcolor: '#34c5df',
		link: ResearchProfiles.sciProfiles,
	},
];
