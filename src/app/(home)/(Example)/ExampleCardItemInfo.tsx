import { ProductItem } from '@/types/ProductItem.type'

interface ExampleCardItemInfoProps
	extends Pick<ProductItem, 'description' | 'price' | 'minCount'> {}

export function ExampleCardItemInfo({
	description,
	price,
	minCount,
}: ExampleCardItemInfoProps) {
	return (
		<div className='mt-2'>
			<p>
				<b className='text-[#ff6600] lg:text-lg'>Описание:</b> {description}
			</p>
			<span className='mt-1 flex items-center gap-2'>
				<b className='text-[#ff6600] lg:text-lg'>Цена:</b> {price}{' '}
				<span className='text-gray-400 lg:text-lg'>{minCount}</span>
			</span>
		</div>
	)
}
