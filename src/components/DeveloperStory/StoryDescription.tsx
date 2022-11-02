import React, { useState } from 'react';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import ReactMarkdown from 'react-markdown';

interface StoryDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
	children: string;
}

export default function StoryDescription({
	children,
	...props
}: StoryDescriptionProps) {
	const [readMoreExpanded, setReadMoreExpanded] = useState(false);

	return (
		<div className='relative'>
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
				className={
					(readMoreExpanded ? 'max-h-fit' : 'max-h-44') +
					' story-description-react-markdown overflow-hidden'
				}
			>
				{children}
			</ReactMarkdown>
			{children.length > 400 && (
				<>
					{readMoreExpanded ? (
						<span
							className='flex-center gap-1 text-sm text-center w-full cursor-pointer'
							onClick={() => setReadMoreExpanded(false)}
						>
							Read Less <MdOutlineExpandLess />
						</span>
					) : (
						<span
							className='absolute flex-center gap-1 text-sm pt-3 text-center w-full bottom-0 bg-gradient-to-t from-black via-[rgba(0,0,0,70%)] to-transparent cursor-pointer'
							onClick={() => setReadMoreExpanded(true)}
						>
							Read More <MdOutlineExpandMore />
						</span>
					)}
				</>
			)}
		</div>
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
