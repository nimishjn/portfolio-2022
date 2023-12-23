import { Collection } from 'tinacms';

const categoryOptions = [
	{ id: 'language', name: 'Programming Language' },
	{ id: 'frontend', name: 'Frontend Development' },
	{ id: 'backend', name: 'Backend Development' },
	{ id: 'framework', name: 'Framework' },
	{ id: 'database', name: 'Database System' },
	{ id: 'software', name: 'Software' },
	{ id: 'tool', name: 'Development Tool' },
	{ id: 'os', name: 'Operating System' },
	{ id: 'design', name: 'Design Tool' },
	{ id: 'hosting', name: 'Hosting Platform' },
	{ id: 'editor', name: 'Code Editor' },
	{ id: 'ide', name: 'IDE' },
	{ id: 'scripting', name: 'Scripting Language' },
	{ id: 'library', name: 'Software Library' },
	{ id: 'misc', name: 'Miscellaneous' },
];

export const skillCollection: Collection = {
	label: 'Skill',
	name: 'skill',
	path: 'content/skill',
	format: 'json',
	fields: [
		{
			label: 'Name',
			name: 'name',
			type: 'string',
			required: true,
			isTitle: true,
			searchable: true,
		},
		{
			label: 'Icon',
			name: 'icon',
			type: 'image',
			required: true,
		},
		{
			label: 'Background color',
			name: 'bgcolor',
			type: 'string',
			required: true,
			ui: {
				component: 'color',
			},
		},
		{
			label: 'Link',
			name: 'link',
			type: 'string',
			required: true,
		},
		{
			label: 'Category',
			name: 'category',
			type: 'string',
			required: true,
			list: true,
			options: categoryOptions.map((category) => ({
				label: category.name,
				value: category.id,
			})),
		},
	],
};
