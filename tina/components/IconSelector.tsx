import React from 'react';
import { wrapFieldsWithMeta } from 'tinacms';

export const IconSelector = wrapFieldsWithMeta((props) => {
	return (
		<div className='flex flex-col gap-2'>
			<textarea {...props.input} />
			<div className='flex gap-2 text-lg'>
				<div>View icon:</div>
				<div dangerouslySetInnerHTML={{ __html: props.input.value }} />
			</div>
		</div>
	);
});
