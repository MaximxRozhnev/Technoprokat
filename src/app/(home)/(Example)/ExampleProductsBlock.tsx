import { ExampleProductItem } from './ExampleProductItem'
import { ExampleProducts } from './products.data'

export function ExampleProductsBlock() {
	return (
		<div
			id='tech'
			className='relative rounded-2xl overflow-hidden md:mx-[15%] m-4 md:my-10'
		>
			{/* Примеры оборудования */}
			{ExampleProducts.map((product, index) => (
				<ExampleProductItem
					key={index}
					type={product.type}
					title={product.title}
					description={product.description}
					price={product.price}
					minCount={product.minCount}
					imageSrc={product.imageSrc}
					position={product.position}
				/>
			))}
		</div>
	)
}
