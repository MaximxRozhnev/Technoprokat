import { RequestForm } from '@/types/RequestForm.type'
import Image from 'next/image'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Heading } from '../../components/Heading'
import { ToolsData } from '../tools.data'
import { RequestFormField } from './RequestFormField'
import { RequestFormFieldsBlock } from './RequestFormFieldsBlock'
import { RequestFormToolsMenu } from './RequestFormToolsMenu'

export function RequestFormBlock() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<RequestForm>({
		mode: 'onChange',
	})

	const [isToolsModalOpen, setIsToolsModalOpen] = useState(false)

	const selectedTools = watch('tools')

	const onSubmit: SubmitHandler<RequestForm> = data => {
		console.log('Форма отправлена:', data)
	}

	return (
		<div
			id='rent'
			className='relative rounded-2xl overflow-hidden md:w-[50%] md:mx-auto mx-4 my-4'
		>
			{/* Фоновое изображение */}
			<Image
				src='/request.jpg'
				alt='Заявка'
				fill
				className='object-cover'
				priority
			/>

			{/* Затемняющий слой для читаемости */}
			<div className='absolute inset-0 bg-gradient-to-r from-gray-800/80 via-gray-700/70 to-gray-600/60'></div>

			{/* Карточка заявки */}
			<div className='relative p-4 flex flex-col gap-2 z-10 max-w-[400px] mx-auto'>
				{/* Заголовок */}
				<Heading className='text-xl font-semibold text-white mb-4 text-center'>
					Оставьте заявку
				</Heading>

				{/* Форма */}
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
					{/* Основные поля */}
					<RequestFormFieldsBlock register={register} errors={errors} />

					{/* Выбор инструмента */}
					<button
						type='button'
						onClick={() => setIsToolsModalOpen(true)}
						className='w-full bg-[#1f1f1f] text-white border border-[#ff6600] rounded-lg py-2 px-4 hover:ring-2 hover:text-[#ff6600] transition'
					>
						{selectedTools?.length > 0
							? selectedTools.join(', ')
							: 'Выберите инструменты'}
					</button>

					{/* Модальное окно выбора инструментов */}
					<RequestFormToolsMenu
						isToolsModalOpen={isToolsModalOpen}
						setIsToolsModalOpen={setIsToolsModalOpen}
						register={register}
						tools={ToolsData}
						errors={errors}
					/>

					{/* Согласие на обработку данных */}
					<RequestFormField
						label='Согласие на обработку данных'
						error={errors.agreement}
					>
						{/* Кастомный чекбокс */}
						<label className='flex items-center gap-2 cursor-pointer select-none'>
							<input
								{...register('agreement', {
									required: 'Вы должны согласиться!',
								})}
								type='checkbox'
								id='agreement'
								className='peer appearance-none w-5 h-5 border border-[#ff6600] cursor-pointer checked:bg-[#ff6600] rounded-sm'
							/>
							<label
								htmlFor='agreement'
								className='ml-2 text-sm font-medium text-white'
							/>
							<span className='text-white text-sm'>
								Я согласен на обработку данных
							</span>
						</label>
					</RequestFormField>

					{/* Кнопка отправки формы */}
					<button
						type='submit'
						className='w-full bg-[#ff6600] hover:bg-[#bf2d15] text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300'
					>
						Отправить
					</button>
				</form>
			</div>
		</div>
	)
}
