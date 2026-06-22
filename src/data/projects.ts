export interface Project {
  title: string
  description: string
  image: string
  technologies: readonly string[]
  github: string
  demo: string
}

export const projects = [
  {
    title: 'Blog Personal',
    description:
      'Pequeñas guías muy útiles en mi camino como desarrollador full stack.',
    image: '/portfolio/portfolio-blog-kapelu.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    github: 'https://github.com/kapelu/blog-kapelu',
    demo: 'https://kapelu.vercel.app/',
  },

  {
    title: 'HTML to Markdown with react-markdown',
    description:
      'Convierte archivos markdown en páginas HTML usando react-markdown.',
    image: '/portfolio/portfolio10-markdown-html.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'react-markdown'],
    github: 'https://github.com/Kapelu/markdown-to-html',
    demo: 'https://markdown-a-html.netlify.app/',
  },

  {
    title: 'HTML to Markdown',
    description:
      'Permite convertir archivos markdown en páginas HTML con estilos en CSS.',
    image: '/portfolio/portfolio9-Markdown-HTML.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Kapelu/markdown-to-html',
    demo: 'https://kapelu.github.io/markdown-to-html/',
  },

  {
    title: 'CV Daniel Calderon',
    description:
      'Primer portafolio tipo Landing Page, realizado puramente con HTML, CSS y un poco de JavaScript.',
    image: '/portfolio/portfolio9-cv-daniel-calderon.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Kapelu/Daniel-Calderon',
    demo: 'https://kapelu.github.io/daniel-calderon-portfolio/',
  },

  {
    title: 'App Notas',
    description:
      'Aplicación de notas que utiliza localStorage para mantener las notas guardadas incluso después de cerrar el navegador.',
    image: '/portfolio/portfolio7-notas.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    github: 'https://github.com/Kapelu/app-notas',
    demo: 'https://kapelu.github.io/app-notas/',
  },

  {
    title: 'APP TODO LIST',
    description:
      'Aplicación de tareas que utiliza localStorage para mantener las tareas activas después de cerrar el navegador.',
    image: '/portfolio/portfolio4-todo-list.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    github: 'https://github.com/Kapelu/app-todo-list',
    demo: 'https://kapelu.github.io/app-todo-list/',
  },
] satisfies Project[]
