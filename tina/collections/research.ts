import { Collection } from 'tinacms';

export const researchCollection: Collection = {
	label: 'Research',
	name: 'research',
	path: 'content/research',
	format: 'json',
	fields: [
		{
			label: 'Title',
			name: 'title',
			type: 'string',
			required: true,
			isTitle: true,
			searchable: true,
		},
		{
			label: 'Image',
			name: 'img',
			type: 'image',
			required: true,
		},
		{
			label: 'Abstract',
			name: 'abstract',
			type: 'rich-text',
			required: true,
		},
		{
			label: 'Link',
			name: 'link',
			type: 'string',
			required: true,
		},
		{
			label: 'Publisher',
			name: 'publisher',
			type: 'string',
			required: true,
		},
		{
			label: 'Date',
			name: 'date',
			type: 'datetime',
			required: true,
		},
	],
};
