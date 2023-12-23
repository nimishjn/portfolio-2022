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
			type: 'rich-text',
			required: true,
			searchable: true,
		},
		{
			label: 'date',
			name: 'date',
			type: 'datetime',
			required: true,
		},
	],
	// ui: {
	// 	// This is an DEMO router. You can remove this to fit your site
	// 	router: ({ document }) =>
	// 		`/demo/blog/${document._sys.filename}`,
	// },
};
