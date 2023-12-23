import { Collection } from 'tinacms';

export const educationCollection: Collection = {
	label: 'Education',
	name: 'education',
	path: 'content/education',
	format: 'json',
	fields: [
		{
			label: 'From date',
			name: 'fromDate',
			type: 'string',
			required: true,
			description: 'Options: 01 Jan 2020, Jan 2020, 2020, Present',
		},
		{
			label: 'To date',
			name: 'toDate',
			type: 'string',
			required: true,
			description: 'Options: 01 Jan 2020, Jan 2020, 2020, Present',
		},
		{
			label: 'Organization name',
			name: 'orgName',
			type: 'string',
			required: true,
			isTitle: true,
			searchable: true,
		},
		{
			label: 'Image',
			name: 'imageURL',
			type: 'image',
		},
		{
			label: 'Description',
			name: 'description',
			type: 'rich-text',
		},
		{
			label: 'Skills',
			name: 'skills',
			type: 'string',
			list: true,
		},
		{
			label: 'URL',
			name: 'url',
			type: 'string',
			required: true,
		},
		{
			label: 'Featured',
			name: 'featured',
			type: 'boolean',
		},
	],
	defaultItem: {
		featured: false,
	},
};
