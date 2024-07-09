import Image from 'next/image'
import { FaMoon } from 'react-icons/fa'
const Header = () => {
	const liStyles = 'hover:text-rose-600 transition-all'
	return (
		<header className='bg-white py-2'>
			<div className='w-11/12 m-auto flex items-center justify-between'>
				<Image src='/vologo.svg' width={90} height={90} alt='logo' />
				<nav>
					<ul className='flex gap-10 font-semibold italic text-lg'>
						<li className={liStyles}>Home</li>
						<li className={liStyles}>About me</li>
						<li className={liStyles}>Materials</li>
						<li className={liStyles}>Contacts</li>
					</ul>
				</nav>
				<button className='bg-blue-950 border-2 border-blue-400 px-3 py-3 rounded-full'>
					<FaMoon className='text-xl fill-yellow-500' />
				</button>
			</div>
		</header>
	)
}

export default Header
