import { Collection } from 'tinacms';

export const achievementCollection: Collection = {
	label: 'Achievement',
	name: 'achievement',
	path: 'content/achievement',
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
