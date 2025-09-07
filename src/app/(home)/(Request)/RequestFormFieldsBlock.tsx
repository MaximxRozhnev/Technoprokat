'use client'
import { RequestForm } from '@/types/RequestForm.type'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { RequestFormField } from './RequestFormField'

interface RequestFormFieldsBlockProps {
	register: UseFormRegister<RequestForm>
	errors: FieldErrors<RequestForm>
}

export function RequestFormFieldsBlock({
	register,
	errors,
}: RequestFormFieldsBlockProps) {
	return (
		<>
			{/* ФИО */}
			<RequestFormField
				placeholder='ФИО'
				label='Контактные данные:'
				error={errors.fio}
				register={register('fio', {
					required: 'Это поле обязательно!',
					minLength: { value: 2, message: 'Введите минимум 2 символа' },
				})}
			/>

			{/* Телефон */}
			<RequestFormField
				type='tel'
				placeholder='Номер телефона'
				error={errors.phone}
				register={register('phone', {
					required: 'Это поле обязательно!',
					minLength: { value: 10, message: 'Введите номер телефона!' },
					pattern: {
						value: /^(\+7|8)\d{10}$/,
						message:
							'Введите корректный номер телефона в формате: +7xxxxxxxxxx!',
					},
				})}
			/>

			{/* Дата аренды */}
			<RequestFormField
				type='date'
				label='Предполагаемая дата аренды:'
				error={errors.date}
				className='text-white'
				register={register('date', {
					required: 'Укажите дату аренды!',
					validate: value => {
						const selectedDate = new Date(value)
						const today = new Date()
						today.setHours(0, 0, 0, 0)
						return (
							selectedDate >= today ||
							'Дата должна быть сегодняшней или будущей!'
						)
					},
				})}
			/>

			{/* Количество времени */}
			<div className='flex flex-col'>
				<label className='text-sm font-medium text-white mb-1'>
					Количество времени:
				</label>

				<div className='flex gap-2'>
					<RequestFormField
						type='number'
						placeholder='Введите число'
						error={errors.timeCount}
						register={register('timeCount', {
							valueAsNumber: true,
							required: 'Укажите количество!',
							min: { value: 1, message: 'Аренда минимум на 1 час!' },
						})}
						className='flex-1'
						showError={false} // убираем вывод ошибки внутри
					/>

					<select
						{...register('typeCount', { required: true })}
						className='flex-1 px-3 py-2 rounded-lg border border-[#ff6600] bg-[#1f1f1f] text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6600]'
					>
						<option value='hour'>Часы</option>
						<option value='day'>Дни</option>
					</select>
				</div>

				{/* Ошибка под flex-блоком */}
				{errors.timeCount && (
					<p className='text-red-500 text-sm mt-1'>
						{errors.timeCount.message}
					</p>
				)}
			</div>
		</>
	)
}
