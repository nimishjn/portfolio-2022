import { storyTypes } from 'utils/developerStory';

export const StorySeperator = ({
	firstIndex = false,
	lastIndex = false,
	storyType = 'other',
}) => {
	return (
		<div className='flex-col-center w-full h-full'>
			{firstIndex ? (
				<span className='w-0.5 bg-transparent h-6' />
			) : (
				<span className='w-0.5 bg-gray-500 h-6' />
			)}
			<div className='w-6 h-6 aspect-square border-2 border-gray-500 box-border rounded-full flex-center'>
				{storyTypes[storyType as keyof typeof storyTypes].icon}
			</div>
			{!lastIndex && <span className='w-0.5 bg-gray-500 grow min-h-6' />}
		</div>
	);
};
