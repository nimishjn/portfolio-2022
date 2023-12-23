import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	'main';

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'public',
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			{
				name: 'testimonials',
				label: 'Testimonials',
				path: 'content/testimonials',
				format: 'json',
				fields: [
					{
						type: 'string',
						name: 'name',
						label: 'Name',
						required: true,
						isTitle: true,
						searchable: true,
					},
					{
						type: 'string',
						name: 'designation',
						label: 'Designation',
						required: true,
						searchable: true,
					},
					{
						type: 'string',
						name: 'linkedin',
						label: 'Linkedin URL',
					},
					{
						type: 'string',
						name: 'company',
						label: 'Company',
					},
					{
						type: 'string',
						name: 'companyURL',
						label: 'Company URL',
					},
					{
						type: 'string',
						name: 'relation',
						label: 'Relation',
						required: true,
					},
					{
						type: 'string',
						name: 'testimonialURL',
						label: 'Testimonial URL',
					},
					{
						type: 'rich-text',
						name: 'message',
						label: 'Message',
						required: true,
						searchable: true,
					},
					{
						type: 'datetime',
						name: 'date',
						label: 'date',
						required: true,
					},
				],
				// ui: {
				// 	// This is an DEMO router. You can remove this to fit your site
				// 	router: ({ document }) =>
				// 		`/demo/blog/${document._sys.filename}`,
				// },
			},
			{
				name: 'about',
				label: 'About',
				path: 'content/about',
				format: 'json',
				fields: [
					{
						type: 'rich-text',
						name: 'content',
						label: 'Content',
						required: true,
						searchable: true,
					},
				],
			},
		],
	},
});
