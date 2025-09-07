'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
	size?: 'sm' | 'md' | 'lg'
	fullWidth?: boolean
	leftIcon?: ReactNode
	rightIcon?: ReactNode
	clickScroll?: string
}

export function ButtonCustom({
	variant = 'primary',
	size = 'md',
	fullWidth = false,
	leftIcon,
	rightIcon,
	children,
	className,
	clickScroll,
	...props
}: ButtonCustomProps) {
	const baseClasses =
		'rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-center'

	const sizeClasses = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-2 text-base',
		lg: 'px-8 py-3 text-lg',
	}

	const variantClasses = {
		primary: 'bg-[#ff6600] hover:bg-[#bf2d15] text-black',
		secondary: 'bg-[#ff6600] hover:bg-[#bf2d15] text-black shadow-md',
		outline:
			'border border-[#ff6600] hover:border-[#bf2d15] text-[#ff6600] hover:text-[#bf2d15]',
		ghost:
			'bg-transparent text-[#ff6600] hover:text-[#bf2d15] hover:border-[#bf2d15] border border-[#ff6600]',
	}

	return (
		<button
			onClick={() => {
				if (clickScroll) {
					document.getElementById(clickScroll)?.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
					})
				}
			}}
			className={twMerge(
				baseClasses,
				sizeClasses[size],
				variantClasses[variant],
				fullWidth && 'w-full',
				className
			)}
			{...props}
		>
			{leftIcon && <span className='mr-2'>{leftIcon}</span>}
			{children}
			{rightIcon && <span className='ml-2'>{rightIcon}</span>}
		</button>
	)
}
