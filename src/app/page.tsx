import About from '@/components/main/about/About'
import Contacts from '@/components/main/contacts/Contacts'
import Footer from '@/components/main/footer/Footer'
import Header from '@/components/main/header/Header'
import Hero from '@/components/main/hero/Hero'

export default function Home() {
	return (
		<div className='w-full'>
			<Header />
			<About />
			<Hero />
			<Contacts />
			<Footer />
		</div>
	)
}
