import { OtherProps } from 'utils/developerStory';
import blog1Img from '/public/images/other/blog1-logo.jpeg';
import ieeexploreLogo from '/public/images/other/ieee-xplore-logo.jpeg';
import elsevierLogo from '/public/images/other/elsevier-logo.png';
import springerLogo from '/public/images/other/springer-logo.png';

export const allOthers: { [key: string]: OtherProps } = {
	blog1: {
		fromDate: 'Oct 18, 2021',
		toDate: 'Oct 18, 2021',
		title: 'Toggle Theme in ReactJs',
		type: 'Medium Blog',
		imageURL: blog1Img,
		url: 'https://nimishjn.medium.com/4095dd35c69d',
		description: `
![medium](https://miro.medium.com/max/720/1*pHyoYMDC4OURM7KmZy3qAQ.png)

This blog is a comprehensive guide to toggle between dark theme and light theme in ReactJs. 
Developers use several methods to toggle between dark mode and light mode. 
However, most of them make use of excess lines of code or have unnecessary complications. 
Having struggled with the same issue in my initial projects, I decided to write this article.
        `,
	},
	blog2: {
		fromDate: 'May 11, 2023',
		toDate: 'May 11, 2023',
		title: 'Enhancing Login Security: A New Authentication Schema Using Password and Image Patterns',
		type: 'Medium Blog',
		imageURL: blog1Img,
		url: 'https://nimishjn.medium.com/a37a3e599009',
		description: `
![medium](/images/other/blog2-logo.webp)

In today’s digital age, user authentication plays a crucial role in securing sensitive 
information and preventing unauthorized access to it. Traditional password-based 
authentication systems have been widely used, but they are increasingly vulnerable 
to brute-force attacks and other cyber threats. This has led to the development of 
new and innovative authentication methods that combine the best of both worlds: 
security and user friendliness.
        `,
	},
	res1: {
		fromDate: 'Apr 21, 2021',
		toDate: 'Apr 21, 2021',
		title: 'Modeling of Predictable Variations in Multi-Time Instant Ambient Temperature Time Series',
		type: 'Conference Publication',
		imageURL: ieeexploreLogo,
		url: 'https://ieeexplore.ieee.org/document/9404497',
		description: `
**Abstract**

This paper effectively devised a novel approach to characterize the predictable 
variations in a multi-time instant ambient temperature time series. A multiple 
linear regression model is used to capture the annual predictable variations 
accurately. The clues for predictable variations upon detailed analysis of 
multi-time instant daily time resolution ambient temperature data led to the 
invention of a set of theoretical relevant deterministic regressors forming a 
reducing order model. A detailed result analysis has established that the proposed 
model is a suitable candidate for multi-time instant daily time step data and can 
be extended for the risk assessment of system analysis that accounts for the 
temperature effect. Further, probabilistic forecasting using regression-based 
methods can easily combat the above-limited number of theoretical relevant 
regressors for decent interval forecasts. The proposed model's effectiveness 
is analyzed using historical ambient temperature records collected from three 
distinct places in India.
        `,
	},
	res2: {
		fromDate: 'Nov 2, 2021',
		toDate: 'Nov 2, 2021',
		title: 'Performance Comparison of Two Statistical Parametric Methods for Outlier Detection and Correction',
		type: 'Book Chapter',
		imageURL: elsevierLogo,
		url: 'https://www.sciencedirect.com/science/article/pii/S2405896321014919',
		description: `
**Abstract**

Outlier detection and correction referred to as data preprocessing, 
is crucial in time series analysis and modeling. It has been a challenge 
to preprocess a volatile time series data possessing intricate trend 
characteristics. Two well-established statistical parametric methods, such 
as improved sliding window prediction and portrait dataset-based, perform 
adequate data preprocessing. While the former is equipped with an optimal 
window width selection approach, the latter, on the other hand, is based 
on a data visualization approach named portrait. This paper compares both 
methods’ preprocessing performance when applied to seasonal time series 
data with varying time resolutions and complex trend patterns for different 
content of outliers through detailed result analyses. Further, a new metric 
to measure outlier correction capability is suggested.
        `,
	},
	res3: {
		fromDate: 'Mar 25, 2022',
		toDate: 'Mar 25, 2022',
		title: 'New Performance Evaluation Metrics for Outlier Detection and Correction',
		type: 'Conference Publication',
		imageURL: springerLogo,
		url: 'https://link.springer.com/chapter/10.1007/978-981-16-9033-4_63',
		description: `
**Abstract**

This paper proposes novel metrics for the numeric evaluation of outlier detection 
and correction. The downsides of the existing comparison approaches are detailed, 
and substitute metrics, complemented normalized sum of absolute deviations (CNSAD) 
and overall preprocessing performance (OPP) are proposed. Also, the suitability of 
two derived metrics in revealing methods’ capability in handling extreme outliers 
is detailed. The merits of CNSAD and OPP are critically analyzed by applying to a 
set of polluted data with the synthetically embedded trend and volatility effects.
        `,
	},
};
