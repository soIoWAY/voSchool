'use client'
import Image from 'next/image'
import { useState } from 'react'

const Hero = () => {
	// мап масиву і перевірка по індексу
	const [activeHero, setActiveHero] = useState(0)
	const images = ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg']
	return (
		<div className='w-11/12 sm:w-10/12 m-auto flex flex-col sm:flex-row justify-center gap-20 mt-24'>
			<div className='w-full sm:w-5/12 relative overflow-hidden h-96'>
				{images.map((src, index) => (
					<Image
						key={index}
						src={src}
						alt='hero'
						layout='fill'
						objectFit='cover'
						className={`absolute transition-opacity duration-500 ${
							index === activeHero ? 'opacity-100' : 'opacity-0'
						}`}
					/>
				))}
			</div>
			<div className='w-full sm:w-5/12 flex flex-col gap-4 sm:gap-0 justify-between'>
				<div
					className={`flex flex-col gap-5 border-l-[3px]  ${
						activeHero === 0 ? 'border-black' : 'border-transparent'
					} pl-5  cursor-pointer`}
					onClick={() => setActiveHero(0)}
				>
					<h2 className='text-3xl font-medium'>Expert English Instruction</h2>
					<p>High-quality English lessons tailored to your needs</p>
				</div>
				<div
					className={`flex flex-col gap-5 border-l-[3px]  ${
						activeHero === 1 ? 'border-black' : 'border-transparent'
					} pl-5  cursor-pointer`}
					onClick={() => setActiveHero(1)}
				>
					<h2 className='text-3xl font-medium'>
						Personalized Feedback and Progress Tracking
					</h2>
					<p>Personalized feedback and progress tracking</p>
				</div>
				<div
					className={`flex flex-col gap-5 border-l-[3px]  ${
						activeHero === 2 ? 'border-black' : 'border-transparent'
					} pl-5  cursor-pointer`}
					onClick={() => setActiveHero(2)}
				>
					<h2 className='text-3xl font-medium'>
						Customized Learning Experience
					</h2>
					<p>Engaging and interactive learning materials</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
