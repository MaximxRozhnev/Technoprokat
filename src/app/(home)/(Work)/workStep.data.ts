interface ISteps {
	step: number
	title: string
	description: string
	action?: boolean
}

export const Steps: ISteps[] = [
	{
		step: 1,
		title: 'Выбор оборудования',
		description:
			'Подбираем инструмент и оборудование под ваши задачи и сроки аренды.',
		action: true,
	},
	{
		step: 2,
		title: 'Заключение договора',
		description:
			'Быстро оформляем аренду, учитывая все ваши пожелания и требования.',
	},
	{
		step: 3,
		title: 'Доставка или самовывоз',
		description:
			'Доставляем оборудование, обеспечиваем поддержку и надежность работы.',
	},
]
