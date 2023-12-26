import Link from 'next/link';
import React from 'react';

interface SkillProps {
	skill: {
		name: string;
		icon: string;
		bgcolor: string;
		link: string;
		color?: string;
	};
	index?: number;
}

export default function SkillBadge({ skill, index }: SkillProps) {
	return (
		<Link href={skill.link} key={index} legacyBehavior>
			<a
				target='_blank'
				style={{
					border: `1.2px solid ${skill.bgcolor}`,
				}}
				className='flex items-center rounded-xs py-0.5 md:py-1 px-1.5 md:px-2 gap-1 min-w-fit cursor-pointer hover:scale-110 transition ease-linear text-gray-200 text-sm md:text-base bg-black'
			>
				<div dangerouslySetInnerHTML={{ __html: skill.icon }} />
				<li className='list-none'>{skill.name}</li>
			</a>
		</Link>
	);
}

/** Note:
 *  'skill.bgcolor' is used for the border color of the badge.
 *  'skill?.color' is used for the text color of the badge.
 */
