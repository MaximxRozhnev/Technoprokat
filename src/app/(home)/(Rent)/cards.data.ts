import type { LucideIcon } from 'lucide-react'
import { Gavel, ShoppingCart, ToolCase } from 'lucide-react'

interface IRentCards {
	id: number
	title: string
	description: string
	icon: LucideIcon // теперь сразу компонент
}

export const RentCards: IRentCards[] = [
	{
		id: 1,
		title: 'Собственное оборудование и инструменты',
		description:
			'Мы собственники всех предлагаемых инструментов и оборудования',
		icon: ToolCase,
	},
	{
		id: 2,
		title: 'Своевременное обслуживание',
		description:
			'Будьте уверены, всё оборудование и инструменты соответствуют нормам и стандартам и полностью обслужены',
		icon: Gavel,
	},
	{
		id: 3,
		title: 'Большой выбор',
		description:
			'На ваш вкус и цвет предлагаем различный ассортимент товаров, от линеек до 3D-принтеров',
		icon: ShoppingCart,
	},
]
