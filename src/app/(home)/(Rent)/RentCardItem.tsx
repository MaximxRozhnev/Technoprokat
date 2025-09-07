import { LucideIcon } from 'lucide-react' // если используешь lucide-react
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Heading } from '../../components/Heading'

interface Card {
	title: string
	description?: string
	className?: string
	children?: React.ReactNode
	icon?: LucideIcon // передаем иконку как компонент
}

export function RentCardItem({
	title,
	description,
	className,
	children,
	icon: Icon,
}: Card) {
	return (
		<div
			className={twMerge(
				'relative bg-[#082032] text-center w-full flex-1 rounded-xl p-4 text-sm sm:text-base md:text-lg lg:text-xl text-white shadow-md hover:shadow-xl flex flex-col justify-between hover:scale-105 transition-all duration-300 hover:bg-[#14344d]',
				className
			)}
		>
			{/* Жёлтый кружок с иконкой */}
			{Icon && (
				<div className='absolute -top-3 -left-3 lg:-top-5 lg:-left-5 bg-yellow-400 text-black rounded-full w-10 h-10 lg:w-15 lg:h-15 flex items-center justify-center shadow-md'>
					<Icon className='lg:hidden' size={20} />
					<Icon className='hidden lg:block' size={25} />
				</div>
			)}

			<div>
				<Heading className='pt-4 font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>
					{title}
				</Heading>
				<p className='text-xs sm:text-base lg:text-md text-gray-400 p-2'>
					{description}
				</p>
				{children}
			</div>
		</div>
	)
}
