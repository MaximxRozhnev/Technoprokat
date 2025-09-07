import { WorkCardInfo } from './WorkCardInfo'
import { WorkCardSteps } from './WorkCardSteps'

export function WorkBlock() {
	return (
		<div
			id='about-us'
			className='relative rounded-2xl overflow-hidden md:mx-[15%] m-4 md:my-10 flex flex-col sm:flex-row gap-4 items-stretch'
		>
			{/* Левый блок описания */}
			<WorkCardInfo></WorkCardInfo>

			{/* Правый блок инструкции */}
			<WorkCardSteps></WorkCardSteps>
		</div>
	)
}
