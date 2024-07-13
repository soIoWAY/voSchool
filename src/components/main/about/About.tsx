import Image from 'next/image'
const About = () => {
	return (
		<div
			className='w-10/12 mt-12 m-auto flex-col-reverse sm:flex-row flex items-center justify-between gap-10 sm:gap-0'
			id='about'
		>
			<div className='sm:w-1/2'>
				<h2 className='text-rose-600 text-3xl font-semibold'>
					Hello, I`m Victoria
				</h2>
				<div className='flex flex-col'>
					<p className='mt-3 text-lg leading-7'>
						Привіт, друже! Гайда знайомитись! Я - Вікторія, яка з раннього
						дитинства має хист до вивчення мов і свою любов прагне передати саме
						тобі. Я не вимагатиму вивчення ста слів чи виконання двадцяти вправ
						за один день, зовсім НІ! Навчання зі мною - це безперечно крута
						можливість пізнати світ англійської швидко, цікаво та результативно.
						Тобі не варто хвилюватись про нудні уроки, схожі до традиційної
						школи, адже на своїх заняттях використовую різні інтерактивні та
						розмовні ігри.
					</p>
					<h3 className='mt-2 text-lg'>Основні мої правила:</h3>
					<ul className='text-lg mt-2'>
						<li>• викладач - твій друг!</li>
						<li>• помилятись - нормально!</li>
						<li>• систематичність - ключ до нових звершень!</li>
					</ul>
					<p className='mt-2 text-lg'>
						Саме ТЕБЕ хочу запросити у свою «маленьку Країну Знань»! Не упусти
						круту можливість! З нетерпінням чекатиму!
					</p>
				</div>
				<button className='mt-10 bg-rose-600 px-6 py-2 text-white font-semibold hover:bg-rose-500 transition-all'>
					Get Started
				</button>
			</div>
			<div className=''>
				<Image
					src='/author4.jpg'
					width={400}
					height={400}
					alt='author'
					className='rounded-full'
				/>
			</div>
		</div>
	)
}

export default About
