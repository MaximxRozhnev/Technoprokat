'use client'
import { Contacts } from './(Contacts)/Contacts'
import { ExampleProductsBlock } from './(Example)/ExampleProductsBlock'
import { RentBlock } from './(Rent)/RentBlock'
import { RequestFormBlock } from './(Request)/RequestFormBlock'
import { WorkBlock } from './(Work)/WorkBlock'

export default function Home() {
	return (
		<>
			<RentBlock />
			<ExampleProductsBlock />
			<WorkBlock />
			<RequestFormBlock />
			<Contacts></Contacts>
		</>
	)
}
