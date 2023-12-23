import { Collection } from 'tinacms';

export const projectCollection: Collection = {
	label: 'Project',
	name: 'project',
	path: 'content/project',
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
			label: 'Project name',
			name: 'projectName',
			type: 'string',
			required: true,
			isTitle: true,
			searchable: true,
		},
		{
			label: 'Organization name',
			name: 'orgName',
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
			type: 'rich-text',
			required: true,
		},
		{
			label: 'Repository URL',
			name: 'repoUrl',
			type: 'string',
		},
		{
			label: 'Deployment URL',
			name: 'viewUrl',
			type: 'string',
		},
		{
			label: 'Tech stack',
			name: 'techStack',
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
			label: 'Featured',
			name: 'featured',
			type: 'boolean',
		},
	],
	defaultItem: {
		featured: false,
	},
};
