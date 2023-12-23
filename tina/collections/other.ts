import { Collection } from 'tinacms';

export const otherCollection: Collection = {
	label: 'Other',
	name: 'other',
	path: 'content/other',
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
			label: 'Type',
			name: 'type',
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
			label: 'URL',
			name: 'url',
			type: 'string',
			required: true,
		},
		{
			label: 'Tech stack',
			name: 'techStack',
			type: 'string',
			list: true,
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
