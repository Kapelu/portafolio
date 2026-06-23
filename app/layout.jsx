//import {Inter} from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

//const inter = Inter({subsets: ['latin']})

export const metadata = {
	title: 'Daniel Calderon',
	description: 'Portfolio Full Stack Developer',
}

export default function RootLayout({children}) {
	return (
		<html lang='es'>
			{/* className={inter.className} */}
			<body suppressHydrationWarning={true}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
