'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { MdClose, MdMenu } from 'react-icons/md'
const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const liStyles = 'hover:text-rose-600 transition-all'
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	return (
		<header className='bg-white py-2'>
			<div className='w-11/12 m-auto flex items-center justify-between'>
				<Image
					src='/vologo.svg'
					width={90}
					height={90}
					alt='logo'
					className='w-[70px] sm:w-[90px]'
				/>
				<nav>
					<ul
						className={`fixed top-0 right-0 h-full w-2/4 bg-white shadow-lg transform ${
							isMenuOpen ? 'translate-x-0' : 'translate-x-full'
						} transition-transform sm:static sm:flex sm:gap-10 sm:font-semibold sm:italic sm:text-lg sm:shadow-none sm:translate-x-0 z-[1000]`}
					>
						<li className='p-4 sm:hidden flex justify-end border-b'>
							<button onClick={toggleMenu}>
								<MdClose className='text-3xl' />
							</button>
						</li>
						<li className={`${liStyles} p-4 sm:p-0`} onClick={toggleMenu}>
							<Link href='/'>Home</Link>
						</li>
						<li className={`${liStyles} p-4 sm:p-0`} onClick={toggleMenu}>
							<Link href='/#about'>About</Link>
						</li>
						<li className={`${liStyles} p-4 sm:p-0`} onClick={toggleMenu}>
							<Link href='/courses'>Courses</Link>
						</li>
						<li className={`${liStyles} p-4 sm:p-0`} onClick={toggleMenu}>
							<Link href='/#contacts'>Contacts</Link>
						</li>
					</ul>
				</nav>
				<div className='flex items-center gap-4'>
					<button className='hidden sm:block bg-blue-950 border-2 border-blue-400 px-3 py-3 rounded-full'>
						<FaMoon className='text-base sm:text-xl fill-yellow-500' />
					</button>
					<button onClick={toggleMenu} className='block sm:hidden'>
						<MdMenu className='text-3xl' />
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
