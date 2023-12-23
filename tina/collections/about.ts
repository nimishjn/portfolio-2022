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
			type: 'string',
			required: true,
			searchable: true,
			ui: {
				component: 'textarea',
			},
		},
	],
};
