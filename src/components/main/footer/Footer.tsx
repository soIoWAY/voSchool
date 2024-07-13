import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
const Footer = () => {
	return (
		<div className='w-11/12 m-auto mt-24 flex flex-col sm:flex-row gap-20 bg-white py-5'>
			<div className='w-full sm:w-5/12'>
				<div className='flex items-center'>
					<Image src='/vologo.svg' width={70} height={70} alt='logo' />
					<h2 className='font-semibold text-2xl'>V&O SCHOOL</h2>
				</div>
				<div className='mt-3 w-full'>
					<p>Contact you on Telegram? Then enter the phone number.</p>
					<form className='mt-4 flex gap-3'>
						<input
							type='text'
							placeholder='Enter your phone number'
							className='border border-black py-3 text-center outline-none w-1/2'
						/>
						<input
							type='submit'
							value='Apply'
							className='border border-rose-600 w-1/2 py-3 font-semibold text-rose-600 hover:bg-rose-600 hover:text-white transition-all'
						/>
					</form>
				</div>
			</div>
			<div className='w-full sm:w-7/12 flex flex-wrap gap-10 sm:gap-0 justify-between'>
				<div className='flex flex-col gap-3'>
					<h2 className='font-semibold text-xl'>About</h2>
					<ul className='flex flex-col gap-2'>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/#about'>About</Link>
						</li>
						<li>Materials</li>
						<li>
							<Link href='/#contacts'>Contacts</Link>
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-3'>
					<h2 className='font-semibold text-xl'>Materials</h2>
					<ul className='flex flex-col gap-2'>
						<li>CEFR Courses Adults</li>
						<li>NMT English Test</li>
						<li>Lesson for kids</li>
						<li>TRIAL Lessons</li>
						<li>Lesson for kids</li>
						<li>TRIAL Lessons</li>
					</ul>
				</div>
				<div className='flex flex-col gap-3'>
					<h2 className='font-semibold text-xl'>Follow Me</h2>
					<ul className='flex flex-col gap-2'>
						<li className=''>
							<a
								href='https://www.instagram.com/viktoria_olehivna_/'
								className='flex items-center gap-2'
								target='_blank'
							>
								<FaInstagram className='text-2xl' />
								Instagram
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer
