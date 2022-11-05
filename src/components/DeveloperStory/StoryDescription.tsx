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
	const descElement = React.useRef<HTMLDivElement>(null);

	const height = descElement.current?.scrollHeight;

	return (
		<div className='relative'>
			<h3 className='font-medium text-gray-300'>Description</h3>
			<div
				style={{ maxHeight: readMoreExpanded ? height : '11rem' }}
				className='overflow-hidden transition-all duration-200'
			>
				<div ref={descElement}>
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
						className='story-description-react-markdown'
					>
						{children}
					</ReactMarkdown>
				</div>
			</div>
			{(height || 0) > 176 && (
				<>
					{readMoreExpanded ? (
						<span
							className='flex-center gap-1 text-sm text-center w-full cursor-pointer text-gray-300'
							onClick={() => setReadMoreExpanded(false)}
						>
							Read Less <MdOutlineExpandLess />
						</span>
					) : (
						<span
							className='absolute bottom-0 flex-center gap-1 text-sm pt-3 text-center text-gray-300 w-full bg-gradient-to-t from-black via-[rgba(0,0,0,75%)] to-transparent] cursor-pointer'
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
