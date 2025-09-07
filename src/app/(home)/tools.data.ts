interface ToolsData {
	id: number
	name: string
	image: string
	price?: number
	description?: string
	discount?: number
}

export const ToolsData: ToolsData[] = [
	{
		id: 1,
		name: '3D принтер Bambu Lab A1 Combo',
		image: '/tools/default.png',
		price: 150,
		description: 'Современный 3D принтер',
		discount: 10,
	},
	{
		id: 2,
		name: 'Сварочный лазерный аппарат Razortek',
		image: '/tools/default.png',
		price: 500,
		description:
			'Плата 4 в 1 имеет четыре функции резки, сварки, очистки и очистки сварки одновременно',
	},
	{
		id: 3,
		name: 'Кран гаражный складной',
		image: '/tools/default.png',
		price: 500,
		description:
			'Силовой цилиндр усилием 8 тонн. Для подъема и транспортировки автомобильных узлов, агрегатов и любых других грузов как внутри помещения, так и на улице.',
		discount: 50,
	},
	{
		id: 4,
		name: 'Болгарка Makita 9557HN',
		image: '/tools/default.png',
		price: 200,
		description:
			'Угловая шлифовальная машина для резки и шлифовки металла и камня',
	},
	{
		id: 5,
		name: 'Дрель-шуруповерт Bosch GSR 12V',
		image: '/tools/default.png',
		price: 180,
		description: 'Компактная аккумуляторная дрель для сверления и завинчивания',
		discount: 20,
	},
	{
		id: 6,
		name: 'Лазерный уровень Dewalt DW088K',
		image: '/tools/default.png',
		price: 120,
		description:
			'Самовыравнивающийся лазерный уровень для точных строительных работ',
	},
	{
		id: 7,
		name: 'Перфоратор Hitachi DH28PC',
		image: '/tools/default.png',
		price: 350,
		description: 'Электроинструмент для сверления бетона и кирпича с ударом',
		discount: 30,
	},
	{
		id: 8,
		name: 'Термовоздушный пистолет Steinel HG 2320E',
		image: '/tools/default.png',
		price: 90,
		description: 'Идеален для сварки пластика, снятия краски и термоусадки',
	},
	{
		id: 9,
		name: 'Пневматический гайковерт Ingersoll Rand 2235TiMAX',
		image: '/tools/default.png',
		price: 600,
		description:
			'Мощный пневматический инструмент для автомобилей и промышленных целей',
	},
	{
		id: 10,
		name: 'Строительный пылесос Makita VC4210L',
		image: '/tools/default.png',
		price: 250,
		description:
			'Высокая мощность всасывания для сухой и влажной уборки строительных площадок',
		discount: 40,
	},
]
