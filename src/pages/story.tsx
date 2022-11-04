import Story from 'components/Story';
import Head from 'next/head';
import React from 'react';

export default function story() {
	return (
		<>
			<Head>
				<title>Nimish Jain | Developer Story</title>
				<meta
					name='description'
					content='A Full-Stack Developer | A Data Analytics Researcher'
				/>
			</Head>
			<Story />
		</>
	);
}
