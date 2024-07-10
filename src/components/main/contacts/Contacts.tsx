import { FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'

const Contacts = () => {
	return (
		<div
			className='w-11/12 m-auto flex flex-col items-center text-center mt-16 mb-5'
			id='contacts'
		>
			<div className='flex flex-col gap-5'>
				<h3>I aim to respond to all messages within 24 hours.</h3>
				<h1 className='text-4xl text-rose-600 font-semibold'>Contact me</h1>
				<h2 className='text-xl'>
					Feel free to reach out to me for any inquiries or to schedule a
					lesson.
				</h2>
			</div>
			<div className='flex justify-between mt-12 sm:mt-6 gap-10 sm:gap-20'>
				<div className='flex flex-col items-center gap-3'>
					<FaInstagram className='text-4xl fill-pink-600' />
					<h2 className='text-xl sm:text-2xl'>Instagram</h2>
					<a
						href='https://www.instagram.com/viktoria_olehivna_/'
						className='underline font-semibold text-rose-600'
						target='_blank'
					>
						click
					</a>
				</div>
				<div className='flex flex-col items-center gap-3'>
					<FaTelegram className='text-4xl fill-blue-500' />
					<h2 className='text-xl sm:text-2xl'>Telegram</h2>
					<a
						href='https://t.me/viktoria_olehivna'
						target='_blank'
						className='underline font-semibold text-rose-600'
					>
						click
					</a>
				</div>
				<div className='flex flex-col items-center gap-3'>
					<FaPhone className='text-4xl fill-green-500' />
					<h2 className='text-xl sm:text-2xl'>Phone</h2>
					<a
						href='tel:+380 96 046 77 35'
						className='underline font-semibold text-rose-600'
					>
						click
					</a>
				</div>
			</div>
		</div>
	)
}

export default Contacts
