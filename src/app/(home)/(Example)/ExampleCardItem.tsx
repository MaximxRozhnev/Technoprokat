import { ButtonCustom } from '@/app/components/ButtonCustom'
import { ProductItem } from '@/types/ProductItem.type'
import { ExampleCardItemHeader } from './ExampleCardItemHeader'
import { ExampleCardItemInfo } from './ExampleCardItemInfo'

export function ExampleCardItem({
	type = '',
	title,
	description,
	minCount = '',
	price,
}: ProductItem) {
	return (
		<div className='flex-1 text-white bg-[#1f1f1f]/80 p-6 text-sm sm:text-base sm:bg-[#2f2f2f] flex flex-col justify-between rounded-lg'>
			<div>
				{/* Заголовок */}
				<ExampleCardItemHeader type={type} title={title} />

				{/* Информация о продукте */}
				<ExampleCardItemInfo
					description={description}
					price={price}
					minCount={minCount}
				/>
			</div>

			{/* Кнопки */}
			<div className='flex flex-wrap justify-center sm:justify-start gap-4 mt-4 w-full'>
				<ButtonCustom
					variant='primary'
					size='md'
					className='flex-1'
					clickScroll='rent'
				>
					Арендовать
				</ButtonCustom>

				<ButtonCustom
					variant='outline'
					size='md'
					className='flex-1'
					clickScroll='contacts'
				>
					Задать вопрос
				</ButtonCustom>
			</div>
		</div>
	)
}
