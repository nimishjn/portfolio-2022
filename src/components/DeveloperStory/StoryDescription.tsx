import React from 'react';
import ReactMarkdown from 'react-markdown';

interface StoryDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
	children: string;
}

export default function StoryDescription({
	children,
	...props
}: StoryDescriptionProps) {
	return (
		<ReactMarkdown
			components={{
				h4: 'h3',
				h5: 'h3',
				h6: 'h3',
			}}
			allowedElements={[
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6',
				'p',
				'ul',
				'ol',
				'li',
				'blockquote',
				'pre',
				'code',
				'a',
				'img',
			]}
			linkTarget='_blank'
			skipHtml
			className='story-description-react-markdown max-h-44 overflow-auto'
		>
			{children}
		</ReactMarkdown>
	);
}

// Allowed components:
// 1. Heading 1 --> # Heading 1
// 2. Heading 2 --> ## Heading 2
// 3. Heading 3 --> ### Heading 3
// 4. Paragraph --> Paragraph
// 5. Ordered List --> 1. Ordered List
// 6. Unordered List --> - Unordered List
// 7. Links --> [Link](https://link.com)
// 8. Images --> ![Image](https://image.com)
// 9. Bold, Italics and Underline --> **Bold**, *Italics*, __Underline__
// 10. Code --> `Code` or ```Code```
// 11. Blockquote --> > Blockquote
