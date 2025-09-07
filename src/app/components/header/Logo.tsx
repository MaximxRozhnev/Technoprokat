'use client'
import Image from 'next/image'

export default function Logo() {
	const scrollToTop = () => {
		window.scroll({ top: 0, behavior: 'smooth' })
	}
	return (
		<div onClick={scrollToTop}>
			{/* 788 x 788 original size */}
			<Image
				src='/logo.png'
				alt='Логотип'
				width={788}
				height={788}
				className='w-8 sm:block sm:w-14 md:w-16'
			></Image>
		</div>
	)
}
