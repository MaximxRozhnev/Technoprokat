import React from 'react'
import { twMerge } from 'tailwind-merge'

type HeaderMenuItemProps = {
	color?: 'orange' | 'light-gray' | 'gray' | 'default' // ограничим список
	href?: string
	className?: string
	children: React.ReactNode
}

export function HeaderMenuItem({
	color = 'default',
	href = '',
	className,
	children,
}: HeaderMenuItemProps) {
	let colorTheme = ''

	switch (color) {
		case 'orange':
			colorTheme = 'text-[#ff6600] hover:text-[#bf2d15]'
			break
		case 'light-gray':
			colorTheme = 'text-[#a8a9ad]'
			break
		case 'gray':
			colorTheme = 'text-[#6d7278]'
			break
		default:
			colorTheme = 'text-white hover:text-gray-400'
			break
	}

	return (
		<a
			href={href}
			className={twMerge(
				`text-base sm:text-lg md:text-xl transition-colors duration-300`,
				colorTheme,
				className
			)}
		>
			{children}
		</a>
	)
}
