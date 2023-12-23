import {
	DEFAULT_STORY_TYPE,
	storyTypes,
	STORY_TYPES,
} from 'utils/developerStory';

interface StorySeperatorProps {
	firstIndex?: boolean;
	lastIndex?: boolean;
	storyType?: STORY_TYPES;
}

export const StorySeperator = ({
	firstIndex = false,
	lastIndex = false,
	storyType = DEFAULT_STORY_TYPE,
	...props
}: StorySeperatorProps) => {
	return (
		<div className='flex-col-center w-full h-full'>
			{firstIndex ? (
				<span className='w-1px bg-transparent h-6' />
			) : (
				<span className='w-1px bg-white h-6' />
			)}
			<div
				style={
					{
						backgroundColor: storyTypes[storyType]?.color,
						// borderColor: storyTypes[storyType]?.color,
					}
				}
				className='w-6 h-6 aspect-square border-1 border-white box-border rounded-full flex-center'
			>
				{storyTypes[storyType as keyof typeof storyTypes]?.icon}
			</div>
			{lastIndex ? (
				<span className='w-1px bg-transparent grow' />
			) : (
				<span className='w-1px bg-white grow min-h-6' />
			)}
		</div>
	);
};
