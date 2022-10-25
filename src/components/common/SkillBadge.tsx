import Link from 'next/link';
import React from 'react';

interface SkillProps {
	skill: {
		name: string;
		icon: React.ReactNode;
		bgcolor: string;
		link: string;
		color?: string;
	};
	key: number;
}

export default function SkillBadge({ skill, key }: SkillProps) {
	return (
		<Link href={skill.link} key={key}>
			<a
				target='_blank'
				style={{
					border: `1.2px solid ${skill.bgcolor}`,
				}}
				className='flex items-center rounded-xs py-1 px-2 gap-1 min-w-fit cursor-pointer hover:scale-110 transition ease-linear text-gray-200 text-sm md:text-base'
			>
				{skill.icon}
				<li className='list-none'>{skill.name}</li>
			</a>
		</Link>
	);
}
