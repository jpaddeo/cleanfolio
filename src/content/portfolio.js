const header = {
  homepage: 'https://jpaddeo.work',
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
  'JavaScript',
  'React',
  'NextJS',
  'InertiaJS',
  'React Native',
  'GraphQL',
  'Tailwind CSS',
  'Material UI',
  'Bootstrap',
  'Git',
  'Github + Github Actions',
  'Gitlab + Gitlab CI/CD',
  'Jest',
  'Ionic',
  'Angular',
  'PHP',
  'Laravel',
];
const contact = {
  email: 'jpaddeo@gmail.com',
};
export const Portfolio = {
  es: {
    strings: {
      iam: 'Hola, yo soy',
      about: 'Acerca de',
      skills: 'Habilidades duras',
      softSkills: 'Habilidades blandas',
      projects: 'Proyectos',
      learningProjects: 'Proyectos (de aprendizaje)',
      contact: 'Contacto',
      resume: 'Curriculum',
      emailme: 'Contactame',
      date: 'Fecha',
    },
    header,
    about: {
      ...about,
      name: 'Juan Pablo Addeo',
      roles: [
        'Ingeniero en Sistemas de Información',
        'Desarrollador Fullstack',
        'Arquitecto de Software',
        'DevOps',
      ],
      description:
        'Ingeniero en Sistemas de Información. Arquitecto de Software. Desarrollador Fullstack. Análisis Técnico. Administración de Recursos. Coaching. Intereses: Desarrollo de Software, Innovación, Creatividad, Web, Redes sociales.',
      resume: 'https://jpaddeo.github.io',
      social,
    },
    projects: [
      {
        name: 'Aplicación iOS ConProsperidad',
        description:
          'Aplicación para proyecto ConProsperidad (Coaching para lograr que nuestros pensamientos y emociones alcancen nuestros sueños)',
        stack: ['Ionic', 'Capacitor', 'Docker', 'CI/CD', 'Laravel', 'Blade'],
        livePreview:
          'https://apps.apple.com/ar/app/conprosperidad/id1514692235',
      },
      {
        name: 'Aplicación Android ConProsperidad',
        description:
          'Aplicación para proyecto ConProsperidad (Coaching para lograr que nuestros pensamientos y emociones alcancen nuestros sueños)',
        stack: ['Ionic', 'Capacitor', 'Docker', 'CI/CD', 'Laravel', 'Blade'],
        livePreview:
          'https://play.google.com/store/apps/details?id=ar.com.conprosperidad.app',
      },
      {
        name: 'Declaraciones Juradas MPFCIUDAD',
        description:
          'Sistema de presentación de Declaraciones Juradas Patrimoniales para magistrados del Ministerio Público Fiscal de la C.A.B.A.',
        stack: [
          'React',
          'Lumen',
          'MongoDB',
          'Microservices',
          'Docker',
          'CI/CD',
        ],
        livePreview: 'https://ddjj.mpfciudad.gob.ar',
      },
      {
        name: 'Firmador archivos MPFCIUDAD',
        description:
          'Firmador de archivos PDF para magistrados del Ministerio Público Fiscal de la C.A.B.A.',
        stack: ['VueJS', 'Lumen', 'MySQL', 'Microservices', 'Docker', 'CI/CD'],
        livePreview: 'https://firmador.mpfciudad.gob.ar',
      },
      {
        name: '¿Me Regalás Una Hora?"',
        description: 'Renovación Imagen Institucional (trabajo ad-honorem)',
        stack: [
          'Laravel',
          'Blade',
          'Angular',
          'Leaflet',
          'Integración Google Calendar',
          'MySQL',
        ],
        livePreview: 'https://meregalasunahora.org',
      },
      {
        name: 'Campus Virtual Ministerio Público de la C.A.B.A.',
        description:
          'Sistema de gestión de cursos / capacitaciones (E-learning) para el Ministerio Público Fiscal de la C.A.B.A.',
        stack: ['Laravel', 'Blade', 'Integración YouTube', 'MySQL'],
        livePreview: 'https://capacitacion.mpfciudad.gob.ar',
      },
      {
        name: 'Aplicación Web Denuncias MPF',
        description:
          'Permite a cualquier ciudadano poder denunciar delitos tipificados y otros de forma anónima o identificada. Consulta y seguimiento de denuncias realizadas. Consulta de información útil y de autoridades (comisarías, centros de denuncias: UODs, fiscalías).',
        stack: ['Ionic', 'Angular', 'PWA', 'API REST'],
        livePreview: 'https://denuncias.fiscalias.gob.ar',
      },
      {
        name: 'Sitio web institucional Ministerio Público Fiscal de la C.A.B.A.',
        description: 'Nuevo sitio institucional del MPFCABA',
        stack: [
          'Laravel',
          'Blade',
          'MySQL',
          'API REST',
          'USIG',
          'Elasticsearch',
          'Docker',
          'CI/CD',
        ],
        livePreview: 'https://mpfciudad.gob.ar',
      },
      {
        name: 'Aplicación iOS de Denuncias para el Ministerio Público Fiscal de la C.A.B.A.',
        description:
          'Aplicación de celulares para dispositivos Apple que le permite al ciudadano denunciar delitos y contravenciones ante el MPFCABA',
        stack: ['Ionic', 'Angular', 'GoogleMaps'],
        livePreview: 'https://apps.apple.com/ar/app/denuncias-mpf/id1446289355',
      },
      {
        name: 'Aplicación Android de Denuncias para el Ministerio Público Fiscal de la C.A.B.A.',
        description:
          'Aplicación de celulares para dispositivos Apple que le permite al ciudadano denunciar delitos y contravenciones ante el MPFCABA',
        stack: ['Ionic', 'Angular', 'GoogleMaps'],
        livePreview:
          'https://play.google.com/store/apps/details?id=ar.gob.mpf.denunciasmob',
      },
      {
        name: 'Desarrollo e Implementación de Red de Datos Vinculados del Ministerio Público Fiscal de la C.A.B.A.',
        description:
          'Herramienta que permite desplegar relaciones / conexiones en forma de grafos entre los distintos nodos de información contenidos en una o varias fuentes de datos.',
        stack: ['Neo4J', 'JS', 'Librería Popoto', 'MySQL', 'API REST'],
        livePreview:
          'https://mpfciudad.gob.ar/storage/archivos/Resoluci%C3%B3n%20FG%20N%C2%BA%20381-17.pdf',
      },
    ],
    learningProjects: [
      {
        name: 'Generador de Passwords',
        date: '2022-10',
        description:
          'Generador de passwords conforme a hackaton propuesto (Hacktoberfest 2022)',
        stack: ['Astro', 'ReactJS', 'JavaScript', 'Tailwind CSS'],
        sourceCode: 'https://github.com/jpaddeo/password-generator.git',
        livePreview: 'https://hacktoberfest-2022.vercel.app/entry/jpaddeo',
      },
      {
        name: 'Clon de Reddit',
        date: '2022-06',
        description:
          'Clon educacional de Reddit hecho con NextJS + TypeScript + Tailwind CSS + Supabase + GraphQL + StepZen + Algolia Client',
        stack: [
          'NextJS',
          'TypeScript',
          'Tailwind CSS',
          'Supabase',
          'GraphQL',
          'StepZen',
          'Algolia Client',
        ],
        sourceCode: 'https://github.com/jpaddeo/nextjs-reddit-clone.git',
        livePreview: 'https://reddit.jpaddeo.work',
      },
      {
        name: 'Modernización de sitio XKCD',
        date: '2022-04',
        description:
          'Reingeniería y modernización de stack del sitio xkcd (https://xkcd.com). NextJS + Deno & Node.JS + Tailwind CSS + Algolia Search',
        stack: [
          'NextJS',
          'Node.JS',
          'Deno',
          'Tailwind CSS',
          'Algolia Search',
          'Scrapping',
        ],
        sourceCode: 'https://github.com/jpaddeo/nextjs-deno-xkcd.git',
        livePreview: 'https://xkcd.jpaddeo.work',
      },
      {
        name: 'Sitio Web 3.0',
        date: '2022-02',
        description:
          'Desarrollo de Web con integración de Smart Contract (desarrollado e implementado en Alchemy). Web 3.0. Hecho con Vite + ReactJS + Tailwind CSS + Solidity + Alchemy.',
        stack: [
          'React',
          'Web3.0',
          'Ethereum',
          'Tailwind CSS',
          'Alchemy',
          'Solidty',
        ],
        sourceCode: 'https://github.com/jpaddeo/js-mastery-web3.git',
        livePreview: 'https://web3.jpaddeo.work',
      },
      {
        name: 'Acortador de URLs',
        date: '2022-01',
        description:
          'Acortador de urls con login y traceo de consultas por usuario e ingreso. Hecho con Nextjs + Tailwind CSS + Auth0.',
        stack: [
          'React',
          'NextJS',
          'Tailwind CSS',
          'Auth0',
          'Prisma',
          'Railway',
        ],
        sourceCode: 'https://github.com/jpaddeo/nextjs-urlshortener.git',
        livePreview: 'https://surl.jpaddeo.work',
      },
      {
        name: 'Clon de Instagram',
        date: '2021-10',
        description:
          'Clon de red social Instagram hecho con Nextjs + Tailwind CSS + Firebase. #PAPAReactChallenge',
        stack: ['React', 'NextJS', 'Tailwind CSS', 'Firebase', 'Recoil'],
        sourceCode: 'https://github.com/jpaddeo/nextjs-instagram.git',
        livePreview: 'https://igclone.jpaddeo.work',
      },
      {
        name: 'Clon de Airbnb',
        date: '2021-09',
        description:
          'Clon básico del sitio de airbnb hecho con Nextjs + Tailwind CSS. #PAPAReactChallenge',
        stack: ['React', 'NextJS', 'Tailwind CSS'],
        sourceCode: 'https://github.com/jpaddeo/nextjs-airbnb.git',
        // livePreview: 'https://nextjs-airbnb-clone-six.vercel.app',
        livePreview: 'https://airbnb.jpaddeo.work',
      },
      {
        name: 'Clon de Whatsapp Web',
        date: '2021-08',
        description:
          'Clon básico de Whatsapp Web hecho con Nextjs + Tailwind CSS. Integración con Google SignIn. #PAPAReactChallenge',
        stack: ['React', 'NextJS', 'Tailwind CSS', 'Google SignIn'],
        sourceCode: 'https://github.com/jpaddeo/nextjs-whatsapp-clone.git',
        // livePreview: 'https://nextjs-whatsapp-clone-jade.vercel.app',
        livePreview: 'https://whatsapp.jpaddeo.work',
      },
      {
        name: 'Devtter',
        date: '2021-08',
        description:
          'Devtter. Plataforma similar a Twitter orientada principalmente para desarrolladores. Hecho con Nextjs. Integración con Github SignIn.',
        stack: ['React', 'NextJS', 'Github SignIn'],
        sourceCode: 'https://github.com/jpaddeo/nextjs-devtter.git',
        // livePreview: 'https://nextjs-devtter.vercel.app',
        livePreview: 'https://devtter.jpaddeo.work',
      },
      {
        name: 'COVID-19 Info',
        date: '2021-07',
        description:
          'Aplicación con información de COVID-19. API tracker. Hecha con ReactJS + Material-UI',
        stack: ['React', 'Material-UI'],
        sourceCode: 'https://github.com/jpaddeo/react-covid-info',
        // livePreview: 'https://react-covid-info.vercel.app',
        livePreview: 'https://covid.jpaddeo.work',
      },
    ],
    skills,
    softSkills: [
      'Comunicación',
      'Coaching',
      'Trabajo en equipo',
      'Adaptabilidad',
    ],
    contact,
  },
  en: {
    strings: {
      iam: 'Hi, I am',
      about: 'About',
      skills: 'Hard Skills',
      softSkills: 'Soft Skills',
      projects: 'Projects',
      learningProjects: 'Learning Projects',
      contact: 'Contact',
      resume: 'Resume',
      emailme: 'Email me',
      date: 'Date',
    },
    header,
    about: {
      ...about,
      name: 'Juan Pablo Addeo',
      role: 'Fullstack Developer',
      roles: [
        'Systems Engineer',
        'Fullstack Developer',
        'Software Architect',
        'DevOps',
      ],
      description:
        'Systems Engineering, Software Architecture and Development, Technical Analysis, Coaching and Managing. Professional Objectives: Development, Architect, Technical Analysis, Innovation, Creativity.',
      resume: 'https://jpaddeo.github.io',
      social,
    },
    projects: [
      {
        name: "Public Prosecutor's Office Sworn Statements",
        description:
          "Sworn statements system for Public Prosecutor's Office magisters",
        stack: [
          'React',
          'Lumen',
          'MongoDB',
          'Microservices',
          'Docker',
          'CI/CD',
        ],
        livePreview: 'https://ddjj.mpfciudad.gob.ar',
      },
      {
        name: "Public Prosecutor's Office File Signer",
        description:
          "PDF's files signer for Public Prosecutor's Office magisters",
        stack: ['VueJS', 'Lumen', 'MySQL', 'Microservices', 'Docker', 'CI/CD'],
        livePreview: 'https://firmador.mpfciudad.gob.ar',
      },
      {
        name: '¿Me Regalás Una Hora?"',
        description: 'New institutional image (website, cms) [ad-honorem]',
        stack: [
          'Laravel',
          'Blade',
          'Angular',
          'Leaflet',
          'Integración Google Calendar',
          'MySQL',
        ],
        livePreview: 'https://meregalasunahora.org',
      },
      {
        name: "Public Prosecutor's Office E-learning",
        description:
          "E-learning system for Public Prosecutor's Office employees",
        stack: ['Laravel', 'Blade', 'Integración YouTube', 'MySQL'],
        livePreview: 'https://capacitacion.mpfciudad.gob.ar',
      },
      {
        name: "Public Prosecutor's Office Reports WebApp",
        description:
          'It allows to any people to reports and follow-up their reports. Also allows to find util information and offices locations',
        stack: ['Ionic', 'Angular', 'PWA', 'API REST'],
        livePreview: 'https://denuncias.fiscalias.gob.ar',
      },
      {
        name: "Public Prosecutor's Office Institutional Website",
        description: "New Public Prosecutor's Office image and website",
        stack: [
          'Laravel',
          'Blade',
          'MySQL',
          'API REST',
          'USIG',
          'Elasticsearch',
          'Docker',
          'CI/CD',
        ],
        livePreview: 'https://mpfciudad.gob.ar',
      },
      {
        name: "Public Prosecutor's Office iOS Reports App",
        description:
          'It allows to any people to reports and follow-up their reports. Also allows to find util information and offices locations',
        stack: ['Ionic', 'Angular', 'GoogleMaps'],
        livePreview: 'https://apps.apple.com/ar/app/denuncias-mpf/id1446289355',
      },
      {
        name: "Public Prosecutor's Office Android Reports App",
        description:
          'It allows to any people to reports and follow-up their reports. Also allows to find util information and offices locations',
        stack: ['Ionic', 'Angular', 'GoogleMaps'],
        livePreview:
          'https://play.google.com/store/apps/details?id=ar.gob.mpf.denunciasmob',
      },
      {
        name: "Public Prosecutor's Office Data Vinculated Network",
        description:
          'Graph tool that shows relations and network connections. Multiples data sources.',
        stack: ['Neo4J', 'JS', 'Popoto library', 'MySQL', 'API REST'],
        livePreview:
          'https://mpfciudad.gob.ar/storage/archivos/Resoluci%C3%B3n%20FG%20N%C2%BA%20381-17.pdf',
      },
    ],
    learningProjects: [
      {
        name: 'Password Generator',
        date: '2022-10',
        description: 'Password generator for Hacktoberfest 2022',
        stack: ['Astro', 'ReactJS', 'JavaScript', 'Tailwind CSS'],
        sourceCode: 'https://github.com/jpaddeo/password-generator.git',
        livePreview: 'https://hacktoberfest-2022.vercel.app/entry/jpaddeo',
      },
      {
        name: 'Reddit Clone',
        date: '2022-06',
        description:
          'Reddit social network educational clone made with NextJS + TypeScript + Tailwind CSS + Supabase + GraphQL + StepZen + Algolia Client',
        stack: [
          'NextJS',
          'TypeScript',
          'Tailwind CSS',
          'Supabase',
          'GraphQL',
          'StepZen',
          'Algolia Client',
        ],
        sourceCode: 'https://github.com/jpaddeo/nextjs-reddit-clone.git',
        livePreview: 'https://reddit.jpaddeo.work',
      },
      {
        name: 'XKCD Update',
        date: '2022-04',
        description:
          'Renewing xkcd site using new dev stacks (https://xkcd.com). NextJS + Deno & Node.JS + Tailwind CSS + Algolia Search',
        stack: [
          'NextJS',
          'Node.JS',
          'Deno',
          'Tailwind CSS',
          'Algolia Search',
          'Scrapping',
        ],
        sourceCode: 'https://github.com/jpaddeo/nextjs-deno-xkcd.git',
        livePreview: 'https://xkcd.jpaddeo.work',
      },
      {
        name: 'Web 3.0 Demo',
        date: '2022-02',
        description:
          'Smart Contract development and integration with web site. Web 3.0. Made with Vite + ReactJS + Tailwind CSS + Solidity + Alchemy.',
        stack: [
          'React',
          'Web3.0',
          'Ethereum',
          'Tailwind CSS',
          'Alchemy',
          'Solidty',
        ],
        sourceCode: 'https://github.com/jpaddeo/js-mastery-web3.git',
        livePreview: 'https://web3.jpaddeo.work',
      },
      {
        name: 'URL Shortener',
        date: '2022-01',
        description:
          'URL shortener with login and links trace per user made with Nextjs + Tailwind CSS + Auth0.',
        stack: [
          'React',
          'NextJS',
          'Tailwind CSS',
          'Auth0',
          'Prisma',
          'Railway',
        ],
        sourceCode: 'https://github.com/jpaddeo/nextjs-urlshortener.git',
        livePreview: 'https://surl.jpaddeo.work',
      },
      {
        name: 'Instagram Clone',
        date: '2021-10',
        description:
          'Instagram social network clone made with Nextjs + Tailwind CSS + Firebase. #PAPAReactChallenge',
        stack: ['React', 'NextJS', 'Tailwind CSS', 'Firebase', 'Recoil'],
        sourceCode: 'https://github.com/nextjs-instagram.git',
        livePreview: 'https://igclone.jpaddeo.work',
      },
      {
        name: 'Airbnb Clone',
        date: '2021-09',
        description:
          'Airbnb website basic clone made with Nextjs + Tailwind CSS. #PAPAReactChallenge',
        stack: ['React', 'NextJS', 'Tailwind CSS'],
        sourceCode: 'https://github.com/jpaddeo/nextjs-airbnb-clone',
        // livePreview: 'https://nextjs-airbnb-clone-six.vercel.app',
        livePreview: 'https://airbnb.jpaddeo.work',
      },
      {
        name: 'Whatsapp Web Clone',
        date: '2021-08',
        description:
          'Whatsapp Web basic clone made with Nextjs + Tailwind CSS. Using Google SignIn integration. #PAPAReactChallenge',
        stack: ['React', 'NextJS', 'Tailwind CSS', 'Google SignIn'],
        sourceCode: 'https://github.com/jpaddeo/nextjs-whatsapp-clone',
        // livePreview: 'https://nextjs-whatsapp-clone-jade.vercel.app',
        livePreview: 'https://whatsapp.jpaddeo.work',
      },
      {
        name: 'Devtter',
        date: '2021-08',
        description:
          'Devtter. Devs Twitter similar platform to share information. Devs community. Made with Nextjs. Github SignIn.',
        stack: ['React', 'NextJS', 'Github SignIn'],
        sourceCode: 'https://github.com/jpaddeo/nextjs-devtter',
        // livePreview: 'https://nextjs-devtter.vercel.app',
        livePreview: 'https://devtter.jpaddeo.work',
      },
      {
        name: 'COVID-19 Info',
        date: '2021-07',
        description:
          'COVID-19 information app.API tracker. Made with ReactJS + Material-UI',
        stack: ['React', 'Material-UI'],
        sourceCode: 'https://github.com/jpaddeo/react-covid-info',
        // livePreview: 'https://react-covid-info.vercel.app',
        livePreview: 'https://covid.jpaddeo.work',
      },
    ],
    skills,
    softSkills: ['Communication', 'Coaching', 'Teamwork', 'Adaptabilty'],
    contact,
  },
};
