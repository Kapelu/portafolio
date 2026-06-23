import Link from 'next/link'
import '../style/Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
	return (
		<footer className='footer'>
			<small>
				<Link
					className='link'
					href='https://github.com/Kapelu'
					target='_blank'
					rel='noopener noreferrer preload'
					as='https://github.com/Kapelu'
				>
					@kapelu{' '}
				</Link>
                {' '}2024 - {year} All Rights Reserved
			</small>
		</footer>
	)
}