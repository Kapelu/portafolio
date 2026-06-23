import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
	return (
		<Html lang='es'>
			<Head> <meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta http-equiv="Content-Type" content="text/html" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		{/* <meta name="theme-color" content="#79bd9a" /> */}
		<meta
			name="description"
			content="Hola bienvenid@ a mi Portafolio Profesional, soy Daniel Calderon, full stack developer."
		/>
		<meta name="date" content="10-03-2023" />
		<meta
			name="keywords"
			content="Daniel Calderon, desarrollador fullstack, desarrollo web, backend, frontend, aplicaciones web, aplicaciones móviles, UX, UI, bases de datos, APIs, soluciones e-commerce"
		/>
        {/* *****     SEO: Search Engine Optimization(Optimización de motores de búsqueda)     ***** */}
		<link rel="canonical" href="https://danielcalderon.vercel.app" />
        {/* *****     Open Graph     ***** */}
		<meta property="og:title" content="Portafolio - Daniel Calderon" />
		<meta
			property="og:description"
			content="Hola bienvenid@ a mi Portafolio Profesional, soy Daniel Calderon, full stack developer."
		/>
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://danielcalderon.vercel.app" />
		<meta
			property="og:image"
			content="https://raw.githubusercontent.com/Kapelu/Kapelu/main/scr/cv-profile.png"
		/>
		{/* *****     Twiter Card     ***** */}
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="Portafolio - Daniel Calderon" />
		<meta
			name="twitter:description"
			content="Hola bienvenid@ a mi Portafolio Profesional, soy Daniel Calderon, full stack developer."
		/>
		<meta name="twitter:site" content="@kapelu2023" />
		<meta name="twiter:url" content="https://danielcalderon.vercel.app" />
		<meta
			name="twitter:image"
			content="https://raw.githubusercontent.com/Kapelu/Kapelu/main/scr/cv-profile.png"
		/>
		{/* *****     ICONOS     ***** */}
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="./assets/apple-touch-icon.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="./assets/favicon.png"
		/>
		{/* *****     FUENTES     ***** */}
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@1,400;1,700&display=swap"
		/>
		{/* *****     CSS (Hoja de Estilo)     ***** */}
		{/* <link rel="manifest" href="manifest.json" /> */}
		</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
