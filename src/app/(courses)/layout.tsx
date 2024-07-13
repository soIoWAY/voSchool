import Footer from '@/components/main/footer/Footer'
import Header from '@/components/main/header/Header'
import { ReactNode } from 'react'

interface IMaterialsLayout {
	children: ReactNode
}
export default function MaterialsLayout({ children }: IMaterialsLayout) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
