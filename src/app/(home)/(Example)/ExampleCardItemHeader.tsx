import { Heading } from '@/app/components/Heading'
import { ProductItem } from '@/types/ProductItem.type'

interface IExampleCardItemHeader extends Pick<ProductItem, 'type' | 'title'> {}

export function ExampleCardItemHeader({
	type = '',
	title,
}: IExampleCardItemHeader) {
	return (
		<div className='mb-4'>
			<Heading className='text-xl sm:text-2xl'>{type}</Heading>
			<Heading className='text-xl sm:text-2xl text-[#ff6600]'>{title}</Heading>
		</div>
	)
}
