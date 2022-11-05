import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PageLoader from 'components/common/PageLoader';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<PageLoader />
		</>
	);
}

export default MyApp;
