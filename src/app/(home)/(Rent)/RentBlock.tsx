import { ButtonCustom } from '@/app/components/ButtonCustom'
import Image from 'next/image'
import { Heading } from '../../components/Heading'
import { RentCardItem } from './RentCardItem'
import { RentCards } from './cards.data'

export function RentBlock() {
	return (
		<div className='relative m-4 rounded-2xl overflow-hidden mt-15 md:mt-30 shadow-lg md:mx-[15%]'>
			{/* Фоновое изображение */}
			<Image
				src='/rent.jpg'
				alt='Аренда'
				fill
				className='object-cover'
				priority
			/>

			{/* Затемняющий слой для читаемости */}
			<div className='absolute inset-0 bg-gradient-to-r from-gray-800/80 via-gray-700/70 to-gray-600/60'></div>

			{/* Контент */}
			<div className='relative p-4'>
				{/* Описание */}
				<div className='py-6 text-center'>
					<Heading className='text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2'>
						Аренда оборудования и инструментов в республике Хакасия
					</Heading>
					<p className='text-neutral-300 text-xs sm:text-sm lg:text-xl mb-4'>
						Доставка или самовывоз
					</p>
					<div className='flex justify-center'>
						<ButtonCustom
							variant='secondary'
							size='md'
							className='text-white'
							clickScroll='rent'
						>
							Оставить заявку
						</ButtonCustom>
					</div>
				</div>

				{/* Карточки */}
				<div className='p-1.5 flex flex-col sm:flex-row items-stretch gap-3 mt-2 md:gap-8 transition-transform duration-300'>
					{RentCards.map((card, index) => (
						<RentCardItem
							key={card.id}
							title={card.title}
							description={card.description}
							icon={card.icon} // уже компонент
						/>
					))}
				</div>
			</div>
		</div>
	)
}
