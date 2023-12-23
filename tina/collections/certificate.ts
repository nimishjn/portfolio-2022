import { Collection } from 'tinacms';

export const certificateCollection: Collection = {
	label: 'Certificate',
	name: 'certificate',
	path: 'content/certificate',
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
