import { ProductItem } from '@/types/ProductItem.type'
import Image from 'next/image'
import { ExampleCardItem } from './ExampleCardItem'

export function ExampleProductItem({
	title,
	description,
	price,
	type = '',
	minCount = '',
	imageSrc = '',
	position = 'left',
}: ProductItem) {
	const isRight = position === 'right'

	return (
		<div
			className={`relative overflow-hidden flex flex-col sm:flex-row mb-4 md:mb-8 ${
				isRight ? 'sm:flex-row-reverse' : ''
			} items-stretch gap-5 p-3 sm:p-0 bg-[#2f2f2f] sm:bg-transparent rounded-lg`}
		>
			{/* Описание предмета */}
			<ExampleCardItem
				type={type}
				title={title}
				description={description}
				price={price}
				minCount={minCount}
			/>

			{/* Картинка предмета */}
			<div className='relative w-full sm:w-1/2 h-64 sm:h-auto rounded-lg overflow-hidden shadow-2xl flex-shrink-0'>
				<Image
					src={imageSrc}
					alt={title}
					fill
					className='object-cover transition-transform duration-500 hover:scale-105'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent'></div>
			</div>
		</div>
	)
}
