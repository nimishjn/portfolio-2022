import React, { ReactNode, useRef } from 'react';

interface Props {
	children?: ReactNode;
	variant?: 'primary' | 'secondary';
}

export default function Button({ children, variant, ...props }: Props) {
	switch (variant) {
		case 'secondary':
			return <ButtonSecondary {...props}>{children}</ButtonSecondary>;
		default:
			return <ButtonPrimary {...props}>{children}</ButtonPrimary>;
	}
}

function ButtonPrimary({ children, ...props }: Props) {
	const spanElement = useRef<HTMLSpanElement>(null);

	const mouseEnterLeaveHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		const relX = e.pageX - spanElement.current?.offsetParent?.offsetLeft;
		const relY = e.pageY - spanElement.current?.offsetParent?.offsetTop;
		spanElement.current.style.left = relX + "px";
		spanElement.current.style.top = relY + "px";
	};

	return (
		<button
			className='primary-button'
			onMouseEnter={mouseEnterLeaveHandler}
			onMouseOut={mouseEnterLeaveHandler}
			{...props}
		>
			{children}
			<span ref={spanElement}></span>
		</button>
	);
}

function ButtonSecondary({ children, ...props }: Props) {
	return (
		<button className='secondary-button' {...props}>
			{children}
			<span></span>
		</button>
	);
}
