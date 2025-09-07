import { ButtonCustom } from '@/app/components/ButtonCustom'
import { RequestForm } from '@/types/RequestForm.type'
import { X } from 'lucide-react'
import Image from 'next/image'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { Heading } from '../../components/Heading'
import { ToolsData } from '../tools.data'

interface RequestFormToolsMenuProps {
	isToolsModalOpen: boolean
	setIsToolsModalOpen: (open: boolean) => void
	register: UseFormRegister<RequestForm>
	errors: FieldErrors<RequestForm>
	tools: typeof ToolsData
}

export function RequestFormToolsMenu({
	isToolsModalOpen,
	setIsToolsModalOpen,
	register,
	errors,
	tools,
}: RequestFormToolsMenuProps) {
	if (!isToolsModalOpen) return null

	return (
		<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4'>
			<div className='bg-gray-900 rounded-2xl w-full lg:max-w-4xl max-h-[70vh] flex flex-col'>
				{/* Header */}
				<div className='flex items-center justify-between p-6 border-b border-gray-700'>
					<Heading className='text-white md:text-xl'>
						Выберите инструменты:
					</Heading>
					<button
						type='button'
						onClick={() => setIsToolsModalOpen(false)}
						className='text-gray-400 hover:text-white transition'
					>
						<X className='w-5 h-5 text-red-500' />
					</button>
				</div>

				{/* Content */}
				<div className='p-6 overflow-y-scroll'>
					<div className='flex flex-col gap-4'>
						{tools.map((tool, index) => (
							<div
								key={index}
								className='flex items-center gap-3 bg-gray-800 p-3 rounded flex-shrink-0 w-full'
							>
								{/* Чекбокс */}
								<div className='flex items-center'>
									<input
										value={tool.name}
										{...register('tools')}
										type='checkbox'
										id={`tool-checkbox-${index}`}
										className='peer appearance-none w-5 h-5 border rounded-sm border-[#ff6600] cursor-pointer checked:bg-[#ff6600]'
									/>
									<label
										htmlFor={`tool-checkbox-${index}`}
										className='ml-2 text-sm font-medium text-white'
									/>
								</div>

								{/* Картинка */}
								{tool.image && (
									<div className='hidden lg:block w-12 h-12 relative flex-shrink-0 rounded overflow-hidden'>
										<Image
											src={tool.image}
											alt={tool.name}
											fill
											className='object-cover'
										/>
									</div>
								)}

								{/* Основная информация */}
								<div className='flex-1 flex flex-col justify-between'>
									{/* Название */}
									<Heading
										className={twMerge(
											'text-white',
											'text-xs md:text-base lg:text-lg'
										)}
									>
										{tool.name}
									</Heading>

									{/* Описание */}
									{tool.description && (
										<p className='text-gray-400 text-xs sm:text-sm line-clamp-2'>
											{tool.description}
										</p>
									)}
								</div>

								{/* Цена */}
								{tool.price && (
									<div className='flex flex-col items-end text-xs sm:text-sm ml-auto'>
										{tool.discount ? (
											<>
												<span className='text-gray-400 line-through'>
													{tool.price.toFixed(0)} ₽/час
												</span>
												<span className='text-red-500 font-bold mt-0.5'>
													{(tool.price - tool.discount).toFixed(0)} ₽/час
												</span>
											</>
										) : (
											<span className='text-green-500 font-bold'>
												{tool.price.toFixed(0)} ₽/час
											</span>
										)}
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Footer */}
				<div className='p-4 border-t border-gray-700 flex justify-center'>
					<ButtonCustom
						variant='ghost'
						size='sm'
						onClick={() => setIsToolsModalOpen(false)}
					>
						Закрыть
					</ButtonCustom>
				</div>
			</div>
		</div>
	)
}
