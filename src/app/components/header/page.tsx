'use client'
import { MenuIcon, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ButtonCustom } from '../ButtonCustom'
import { HeaderMenuItem } from './HeaderMenuItem'
import Logo from './Logo'

interface MenuItem {
	href: string
	label: string
	color?: 'orange' | 'light-gray' | 'gray' | 'default'
}

const CONTACT_ITEMS: MenuItem[] = [
	{ href: '#rent', label: 'Черногорск, Чапаева 255Б' },
	{ href: 'tel:+79235945607', label: '+7 (999) 000-99-99', color: 'orange' },
]

const MENU_ITEMS: MenuItem[] = [
	{ href: '#about-us', label: 'О нас' },
	{ href: '#tech', label: 'Техника' },
	{ href: '#rent', label: 'Арендовать' },
]

export default function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const [atTop, setAtTop] = useState(true)

	useEffect(() => {
		const handleScroll = () => setAtTop(window.scrollY === 0)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const headerClasses = twMerge(
		'fixed top-0 left-0 w-full z-50 py-2 px-4 sm:px-8 sm:py-4 backdrop-blur-md transition-colors duration-300',
		atTop && !isMenuOpen ? 'bg-transparent' : 'bg-black/90',
		'text-white'
	)

	return (
		<header className={headerClasses}>
			<div className='container mx-auto flex items-center justify-between'>
				{/* Логотип */}
				<Logo />

				{/* Основное меню для xl */}
				<nav className='hidden xl:flex items-center space-x-6'>
					{MENU_ITEMS.map(item => (
						<HeaderMenuItem key={item.href} href={item.href}>
							{item.label}
						</HeaderMenuItem>
					))}
				</nav>

				{/* Контакты и кнопка */}
				<nav className='hidden xl:flex items-center space-x-6'>
					{CONTACT_ITEMS.map(item => (
						<HeaderMenuItem key={item.href} href={item.href} color={item.color}>
							{item.label}
						</HeaderMenuItem>
					))}
					<ButtonCustom variant='secondary' size='md' clickScroll='rent'>
						Оставить заявку
					</ButtonCustom>
				</nav>

				{/* Бургер для мобильных */}
				<button
					onClick={() => setMenuOpen(prev => !prev)}
					className='xl:hidden'
				>
					{isMenuOpen ? <X /> : <MenuIcon />}
				</button>
			</div>

			{/* Мобильное меню */}
			{isMenuOpen && (
				<div className='xl:hidden px-4 py-6 bg-black/90 backdrop-blur-md'>
					<nav className='flex flex-col space-y-4'>
						{[...MENU_ITEMS, ...CONTACT_ITEMS].map(item => (
							<HeaderMenuItem
								key={item.href + item.label}
								href={item.href}
								color={item.color}
							>
								{item.label}
							</HeaderMenuItem>
						))}
						<ButtonCustom variant='secondary' size='md' clickScroll='rent'>
							Оставить заявку
						</ButtonCustom>
					</nav>
				</div>
			)}
		</header>
	)
}
