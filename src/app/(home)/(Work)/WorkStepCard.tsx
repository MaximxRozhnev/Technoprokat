import React from 'react'
import { Heading } from '../../components/Heading'

interface StepCardProps {
	step: number | React.ReactNode
	title: string
	description: string
	children?: React.ReactNode
}

export function WorkStepCard({
	step,
	title,
	description,
	children,
}: StepCardProps) {
	return (
		<div className='relative bg-[#2f2f2f] rounded-xl p-6 shadow-lg flex flex-col gap-2 hover:scale-105 transition-transform duration-300'>
			{/* Круг с шагом */}
			<StepCircle>{step}</StepCircle>

			{/* Заголовок */}
			<Heading className='text-white text-lg'>{title}</Heading>

			{/* Описание */}
			<p className='text-gray-400 text-sm'>{description}</p>

			{/* Другие компоненты */}
			{children}
		</div>
	)
}

function StepCircle({ children }: { children: React.ReactNode }) {
	return (
		<div className='absolute -top-3 -left-3 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold shadow-md'>
			{children}
		</div>
	)
}
