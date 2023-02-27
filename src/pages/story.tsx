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
					content='From "Hello World" to deploying production code, the developer journey is a never-ending quest for knowledge, efficiency, and innovation.'
				/>
				<meta
					name='keywords'
					content='developer story, developer journey, developer story nimish jain, nimish jain developer story, nimish jain dev'
				/>
				<meta
					name='author'
					content='Nimish Jain | https://nimish-jain.com'
				/>
			</Head>
			<Story />
		</>
	);
}
