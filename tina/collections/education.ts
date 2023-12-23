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
			type: 'datetime',
			required: true,
		},
		{
			label: 'To date',
			name: 'toDate',
			type: 'datetime',
			required: true,
		},
		{
			label: 'Title',
			name: 'title',
			type: 'string',
			required: true,
		},
		{
			label: 'Organization name',
			name: 'orgName',
			type: 'string',
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
