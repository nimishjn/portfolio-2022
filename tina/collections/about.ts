import { Collection } from 'tinacms';

export const aboutCollection: Collection = {
	label: 'About',
	name: 'about',
	path: 'content/about',
	format: 'json',
	fields: [
		{
			name: 'content',
			label: 'Content',
			type: 'rich-text',
			required: true,
			searchable: true,
		},
	],
};
