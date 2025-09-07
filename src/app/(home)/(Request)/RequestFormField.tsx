'use client'
import { FieldError } from 'react-hook-form'

interface RequestFormFieldProps {
	label?: string
	type?: string
	placeholder?: string
	error?: FieldError
	children?: React.ReactNode
	register?: any
	className?: string
	showError?: boolean
}

export function RequestFormField({
	label = '',
	type = 'text',
	placeholder = '',
	error,
	children,
	register,
	className,
	showError = true,
}: RequestFormFieldProps) {
	return (
		<div className='flex flex-col'>
			{/* Заголовок */}
			{label && (
				<label className='text-sm font-medium text-white mb-1'>{label}</label>
			)}

			{/* Кастомные внутренности либо input по умолчанию */}
			{children ? (
				children
			) : (
				<input
					type={type}
					placeholder={placeholder}
					{...register}
					className={`w-full px-4 py-2 rounded-lg border bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6600] transition ${
						error ? 'border-red-500' : 'border-[#ff6600]'
					} ${className || ''}`}
				/>
			)}

			{/* Ошибка */}
			{showError && error && (
				<p className='text-red-500 text-sm mt-1'>{error.message}</p>
			)}
		</div>
	)
}
