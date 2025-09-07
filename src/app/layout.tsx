import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Header from './components/header/page'
import './globals.css'

// Подключаем Rubik с вариантами веса и латинскими+кириллицей
const rubik = Rubik({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '700'], // обычный, medium, bold
	variable: '--font-rubik', // CSS-переменная для использования в стилях
	display: 'swap', // предотвращает мигание шрифта
})

export const metadata: Metadata = {
	title: 'Аренда оборудования',
	description: 'Аренда оборудования в Черногорске',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' className={rubik.variable}>
			<body className='antialiased'>
				<Header></Header>
				{children}
			</body>
		</html>
	)
}
