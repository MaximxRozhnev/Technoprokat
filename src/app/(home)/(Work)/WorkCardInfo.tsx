import { Heading } from '@/app/components/Heading'
import { WORK_INFO_TEXTS } from '@/constants/workInfo.constant'
import Image from 'next/image'

export function WorkCardInfo() {
	return (
		<div className='relative w-full sm:w-1/2 rounded-lg overflow-hidden flex flex-col flex-[2]'>
			<Image
				src='/khakasia.png'
				alt='Карта'
				fill
				className='object-cover rounded-lg opacity-30'
			/>
			<div className='absolute inset-0 bg-black/55'></div>

			<div className='relative p-4 flex flex-col gap-2 z-10'>
				<div>
					<Heading className='text-white text-xl lg:text-2xl font-semibold'>
						Мы работаем на территории всей
					</Heading>
					<Heading className='text-[#ff6600] text-xl lg:text-2xl font-semibold'>
						республики Хакасия
					</Heading>
				</div>

				{WORK_INFO_TEXTS.map((text, idx) => (
					<span
						key={idx}
						className='text-neutral-100 text-xs sm:text-sm md:text-base lg:text-lg text-justify'
					>
						{text}
					</span>
				))}
			</div>
		</div>
	)
}
