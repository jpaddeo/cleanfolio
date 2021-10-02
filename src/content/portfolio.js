const header = {
  homepage: 'https://jpaddeo.github.io/porftolio',
  title: 'JPA.',
};
const about = {
  profileUrl: 'https://avatars.githubusercontent.com/u/3083587?v=4',
};
const social = {
  linkedin: 'https://www.linkedin.com/in/juanpabloaddeo',
  github: 'https://github.com/jpaddeo',
  twitter: 'https://twitter.com/jpaddeo',
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
      ...about,
      name: 'Juan Pablo Addeo',
      role: 'Desarrollador Fullstack',
      description:
        'Ingeniero en Sistemas de Información. Arquitecto de Software. Desarrollador Fullstack. Análisis Técnico. Administración de Recursos. Coaching. Intereses: Desarrollo de Software, Innovación, Creatividad, Web, Redes sociales.',
      resume: 'https://jpaddeo.github.io',
      social,
    },
    projects: [
      {
        name: 'Clon de Airbnb',
        description:
          'Clon básico del sitio de airbnb hecho con Nextjs + Tailwind CSS. #PAPAReactChallenge',
        stack: ['React', 'NextJS', 'Tailwind CSS'],
        sourceCode: 'https://github.com/nextjs-airbnb.git',
        livePreview: 'https://nextjs-airbnb-clone-six.vercel.app',
      },
      {
        name: 'Clon de Whatsapp Web',
        description:
          'Clon básico de Whatsapp Web hecho con Nextjs + Tailwind CSS. Integración con Google SignIn. #PAPAReactChallenge',
        stack: ['React', 'NextJS', 'Tailwind CSS', 'Google SignIn'],
        sourceCode: 'https://github.com/jpaddeo/nextjs-whatsapp-clone',
        livePreview: 'https://nextjs-whatsapp-clone-jade.vercel.app',
      },
      {
        name: 'Devtter',
        description:
          'Devtter. Plataforma similar a Twitter orientada principalmente para desarrolladores. Hecho con Nextjs. Integración con Github SignIn.',
        stack: ['React', 'NextJS', 'Github SignIn'],
        sourceCode: 'https://github.com/jpaddeo/nextjs-devtter',
        livePreview: 'https://vercel.com/jpaddeo/nextjs-devtter',
      },
      {
        name: 'COVID-19 Info',
        description:
          'Aplicación con información de COVID-19. API tracker. Hecha con ReactJS + Material-UI',
        stack: ['React', 'Material-UI'],
        sourceCode: 'https://github.com/jpaddeo/react-covid-info',
        livePreview: 'https://react-covid-info.vercel.app',
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
      contact: 'Contact',
      resume: 'Resume',
      emailme: 'Email me',
    },
    header,
    about: {
      ...about,
      name: 'Juan Pablo Addeo',
      role: 'Fullstack Developer',
      description:
        'Systems Engineering, Software Architecture and Development, Technical Analysis, Coaching and Managing. Professional Objectives: Development, Architect, Technical Analysis, Innovation, Creativity.',
      resume: 'https://jpaddeo.github.io',
      social,
    },
    projects: [
      {
        name: 'Airbnb Clone',
        description:
          'Airbnb website basic clone made with Nextjs + Tailwind CSS. #PAPAReactChallenge',
        stack: ['React', 'NextJS', 'Tailwind CSS'],
        sourceCode: 'https://github.com/jpaddeo/nextjs-airbnb-clone',
        livePreview: 'https://nextjs-airbnb-clone-six.vercel.app',
      },
      {
        name: 'Whatsapp Web Clone',
        description:
          'Whatsapp Web basic clone made with Nextjs + Tailwind CSS. Using Google SignIn integration. #PAPAReactChallenge',
        stack: ['React', 'NextJS', 'Tailwind CSS', 'Google SignIn'],
        sourceCode: 'https://github.com/jpaddeo/nextjs-whatsapp-clone',
        livePreview: 'https://nextjs-whatsapp-clone-jade.vercel.app',
      },
      {
        name: 'Devtter',
        description:
          'Devtter. Devs Twitter similar platform to share information. Devs community. Made with Nextjs. Github SignIn.',
        stack: ['React', 'NextJS', 'Github SignIn'],
        sourceCode: 'https://github.com/jpaddeo/nextjs-devtter',
        livePreview: 'https://vercel.com/jpaddeo/nextjs-devtter',
      },
      {
        name: 'COVID-19 Info',
        description:
          'COVID-19 information app.API tracker. Made with ReactJS + Material-UI',
        stack: ['React', 'Material-UI'],
        sourceCode: 'https://github.com/jpaddeo/react-covid-info',
        livePreview: 'https://react-covid-info.vercel.app',
      },
    ],
    skills,
    contact,
  },
};
