import React from 'react'
import { twMerge } from 'tailwind-merge'

type HeadingProps = {
	children: React.ReactNode
	className?: string
}

export function Heading({ children, className }: HeadingProps) {
	return (
		<h1
			className={twMerge(
				`text-base
		`,
				className
			)}
		>
			{children}
		</h1>
	)
}
