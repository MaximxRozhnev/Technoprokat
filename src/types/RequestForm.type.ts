export interface RequestForm {
	fio: string
	phone: string
	date: string
	timeCount: number
	agreement: boolean
	typeCount: 'day' | 'hour'
	tools: string[]
}
