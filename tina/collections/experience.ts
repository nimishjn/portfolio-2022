import { Collection } from 'tinacms';
import { skillCollection } from './skill';

export const experienceCollection: Collection = {
	label: 'Experience',
	name: 'experience',
	path: 'content/experience',
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
			label: 'Position held',
			name: 'positionHeld',
			type: 'string',
			required: true,
			searchable: true,
		},
		{
			label: 'Organization name',
			name: 'orgName',
			type: 'string',
			required: true,
			isTitle: true,
		},
		{
			label: 'Organization location',
			name: 'orgLocation',
			type: 'string',
			required: true,
		},
		{
			label: 'Image',
			name: 'imageURL',
			type: 'image',
		},
		{
			label: 'Description',
			name: 'description',
			type: 'string',
			ui: {
				component: 'textarea',
			},
		},
		{
			label: 'Skills',
			name: 'skills',
			type: 'object',
			description: 'Match corresponding IDs from the Skills collection',
			list: true,
			ui: {
				itemProps: (item) => {
					return {
						label: item?.skill,
					};
				},
			},
			fields: [
				{
					label: 'Skill',
					name: 'skill',
					type: 'reference',
					collections: ['skill'],
				},
			],
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