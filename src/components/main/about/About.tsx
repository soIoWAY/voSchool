import Image from 'next/image'
const About = () => {
	return (
		<div className='w-10/12 mt-12 m-auto flex items-center justify-between'>
			<div className='w-1/2'>
				<h2 className='text-rose-600 text-3xl font-semibold'>
					Hello, I`m Victoria
				</h2>
				<p className='mt-3 text-lg'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					mollitia id, velit doloremque, commodi iste quo aliquam possimus qui
					in incidunt nulla voluptatibus est, quam quidem sit deleniti minima!
					Nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
					ipsam tenetur vitae veritatis sapiente. Praesentium quisquam repellat
					autem debitis quaerat voluptatem laboriosam iure eaque.
				</p>
				<button className='mt-10 bg-rose-600 px-6 py-2 text-white font-semibold hover:bg-rose-500 transition-all'>
					Get Started
				</button>
			</div>
			<div className=''>
				<Image
					src='/author.jpg'
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
