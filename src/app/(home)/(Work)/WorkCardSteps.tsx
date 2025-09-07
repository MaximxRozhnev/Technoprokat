import { ButtonCustom } from '@/app/components/ButtonCustom'
import { WorkStepCard } from './WorkStepCard'
import { Steps } from './workStep.data'

export function WorkCardSteps() {
	return (
		<div className='flex-1 rounded-lg p-6 flex flex-col gap-5 items-center justify-center'>
			{Steps.map(s => (
				<WorkStepCard
					key={s.step}
					step={s.step}
					title={s.title}
					description={s.description}
				>
					{s.action && (
						<ButtonCustom variant='secondary' size='md' clickScroll='rent'>
							Оставить заявку
						</ButtonCustom>
					)}
				</WorkStepCard>
			))}
		</div>
	)
}
