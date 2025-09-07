import { Heading } from '@/app/components/Heading'

export function Contacts() {
	return (
		<div
			id='contacts'
			className='relative rounded-2xl overflow-hidden md:mx-[15%] m-4 md:my-10 flex flex-col gap-6 p-6 bg-[#1f1f1f] text-white'
		>
			{/* Заголовок */}
			<Heading
				className='text-2xl md:text-3xl  mb-4 text
			-center'
			>
				Контакты
			</Heading>

			{/* Контактная информация */}
			<div className='flex flex-col md:flex-row gap-6'>
				{/* Слева: текстовые контакты */}
				<div className='flex-1 flex flex-col gap-4'>
					<div>
						<Heading className='font-semibold text-lg md:text-xl lg:text-2xl text-[#ff6600]'>
							Адрес:
						</Heading>
						<p>г. Черногорск, ул. Чапаева, 255Б</p>
					</div>
					<div>
						<Heading className='font-semibold text-lg md:text-xl lg:text-2xl text-[#ff6600]'>
							Телефон:
						</Heading>
						<p>+7 (999) 000-99-99</p>
					</div>
					<div>
						<Heading className='font-semibold text-lg md:text-xl lg:text-2xl text-[#ff6600]'>
							Email:
						</Heading>
						<p>technoProkat@prokat.ru</p>
					</div>
					<div>
						<Heading className='font-semibold text-lg md:text-xl lg:text-2xl text-[#ff6600]'>
							Время работы:
						</Heading>
						<p>Ежедневно: 10:00 — 20:00</p>
					</div>
				</div>

				{/* Справа: карта */}
				<div className='flex-1 mx-auto md:h-auto rounded overflow-hidden shadow-lg'>
					<iframe
						src='https://yandex.ru/map-widget/v1/?um=constructor%3Acc8aafda1fd1d14df0e5f951fd43da4b8e31afe498fa7b57d7bf6102febc1fb7&amp;source=constructor'
						width='400'
						height='256'
					></iframe>
				</div>
			</div>
		</div>
	)
}
