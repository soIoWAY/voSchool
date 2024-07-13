import Image from 'next/image'
import Link from 'next/link'
import courses from '../../../data/courses.json'
export default function MaterialsPage() {
	const createSlug = (name: string) => name.replace(/\s+/g, '-').toLowerCase()
	return (
		<div className='w-9/12 mx-auto mt-16'>
			<h2 className='text-3xl text-center font-semibold tracking-wider'>
				Courses
			</h2>
			<div className='w-full mt-12'>
				{Object.keys(courses).map(course => (
					<Link
						href={`/courses/${createSlug(course)}`}
						className='bg-rose-400 w-2/12 h-72 rounded-md flex flex-col items-center justify-center px-2 text-center gap-3'
					>
						<h3 className='text-white text-xl font-semibold'>
							CEFR Courses Adults
						</h3>
						<Image src='/vologo.svg' width={100} height={100} alt='logo' />
					</Link>
				))}
			</div>
		</div>
	)
}
