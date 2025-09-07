export interface ProductItem {
	title: string
	description: string
	price: string
	type?: string
	minCount?: string
	imageSrc?: string // Для продуктов с картинкой
	position?: 'left' | 'right' // Для расположения карточки
}
