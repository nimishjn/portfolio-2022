import React, { ReactNode, useRef } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
	children?: ReactNode;
	className?: string;
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

function ButtonPrimary({ children, className, ...props }: Props) {
	const spanElement = useRef<HTMLSpanElement>(null);

	const mouseEnterLeaveHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (spanElement.current && spanElement.current.offsetParent) {
			const relX = e.pageX - (spanElement.current.offsetParent as unknown as {offsetLeft: number}).offsetLeft;
			const relY = e.pageY - (spanElement.current.offsetParent as unknown as {offsetTop: number}).offsetTop;
			spanElement.current.style.left = relX + 'px';
			spanElement.current.style.top = relY + 'px';
		}
	};

	return (
		<button
			className={'primary-button' + (className ? ' ' + className : '')}
			onMouseEnter={mouseEnterLeaveHandler}
			onMouseOut={mouseEnterLeaveHandler}
			{...props}
		>
			{children}
			<span ref={spanElement}></span>
		</button>
	);
}

function ButtonSecondary({ children, className, ...props }: Props) {
	return (
		<button
			className={'primary-button' + (className ? ' ' + className : '')}
			{...props}
		>
			{children}
			<span></span>
		</button>
	);
}
