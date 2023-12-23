import { Collection } from 'tinacms';

export const testimonialCollection: Collection = {
	label: 'Testimonial',
	name: 'testimonial',
	path: 'content/testimonial',
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
			label: 'Designation',
			name: 'designation',
			type: 'string',
			required: true,
			searchable: true,
		},
		{
			label: 'Linkedin URL',
			name: 'linkedin',
			type: 'string',
		},
		{
			label: 'Company',
			name: 'company',
			type: 'string',
		},
		{
			label: 'Company URL',
			name: 'companyURL',
			type: 'string',
		},
		{
			label: 'Relation',
			name: 'relation',
			type: 'string',
			required: true,
		},
		{
			label: 'Testimonial URL',
			name: 'testimonialURL',
			type: 'string',
		},
		{
			label: 'Message',
			name: 'message',
			type: 'string',
			required: true,
			searchable: true,
			ui: {
				component: 'textarea',
			},
		},
		{
			label: 'date',
			name: 'date',
			type: 'string',
			required: true,
			description: 'Options: 01 Jan 2020, Jan 2020, 2020, Present',
		},
	],
	// ui: {
	// 	// This is an DEMO router. You can remove this to fit your site
	// 	router: ({ document }) =>
	// 		`/demo/blog/${document._sys.filename}`,
	// },
};
