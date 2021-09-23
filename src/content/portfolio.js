const header = {
  homepage: 'https://jpaddeo.github.io/porftolio',
  title: 'JPA.',
};
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'NextJS',
  'React Native',
  'Material UI',
  'Tailwind CSS',
  'Git',
  'Github',
  'Github Actions',
  'Gitlab',
  'Gitlab CI/CD',
  'Jest',
  'Ionic',
  'Angular',
];
const contact = {
  email: 'jpaddeo@gmail.com',
};
export const Portfolio = {
  es: {
    strings: {
      iam: 'Hola, yo soy',
      about: 'Acerca de',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      resume: 'CV',
      emailme: 'Contactame',
    },
    header,
    about: {
      name: 'Juan Pablo Addeo',
      role: 'Desarrollador Fullstack',
      description:
        'Ingeniero en Sistemas de Información. Arquitecto de Software. Desarrollador Fullstack. Análisis Técnico. Administración de Recursos. Coaching. Intereses: Desarrollo de Software, Innovación, Creatividad, Web, Redes sociales.',
      resume: 'https://jpaddeo.github.io',
      social: {
        linkedin: 'https://www.linkedin.com/in/juanpabloaddeo',
        github: 'https://github.com/jpaddeo',
        twitter: 'https://twitter.com/jpaddeo',
      },
    },
    projects: [
      {
        name: 'Clon de Airbnb',
        description: 'Clon del sitio de airbnb hecho con Nextjs + Tailwind CSS',
        stack: ['React', 'NextJS', 'Tailwind CSS'],
        sourceCode: 'https://github.com/nextjs-airbnb.git',
        livePreview: 'https://nextjs-airbnb-clone-six.vercel.app',
      },
    ],
    skills,
    contact,
  },
  en: {
    strings: {
      iam: 'Hi, I am',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Conctact',
      resume: 'Resume',
      emailme: 'Email me',
    },
    header,
    about: {
      name: 'Juan Pablo Addeo',
      role: 'Fullstack Developer',
      description:
        'Systems Engineering, Software Architecture and Development, Technical Analysis, Coaching and Managing. Professional Objectives: Development, Architect, Technical Analysis, Innovation, Creativity.',
      resume: 'https://jpaddeo.github.io',
      social: {
        linkedin: 'https://www.linkedin.com/in/juanpabloaddeo',
        github: 'https://github.com/jpaddeo',
        twitter: 'https://twitter.com/jpaddeo',
      },
    },
    projects: [
      {
        name: 'Clon de Airbnb',
        description: 'Clon del sitio de airbnb hecho con Nextjs + Tailwind CSS',
        stack: ['React', 'NextJS', 'Tailwind CSS'],
        sourceCode: 'https://github.com/nextjs-airbnb',
        livePreview: 'https://github.com/nextjs-airbnb',
      },
    ],
    skills,
    contact,
  },
};
