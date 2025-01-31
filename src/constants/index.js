import {
  foodProject,
  eCommerce,
  home,
  prescripto
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiVite,
  SiMongodb,
  SiOracle
} from "react-icons/si";

import { DiCss3, DiNodejs} from "react-icons/di";


export const navLinks = [
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];


// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Skills",
    items: [
      {
        id: "pl-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-4",
        icon: DiCss3,
        name: "CSS3",
      },
      {
        id: "pl-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-6",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "pl-7",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "pl-8",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "pl-9",
        icon: DiNodejs,
        name: "NodeJS",
      },
      {
        id: "pl-10",
        icon: SiOracle,
        name: "Oracle",
      },
    ],
  },

];


// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Tomato",
    image: foodProject,
    content:
      "Les clients peuvent consulter les menus en ligne, commander des plats proposés et peuvent payer en ligne",
    stack: [
      {
        id: "icon-1",
        icon: SiVite,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-3",
        icon: SiTailwindcss,
        name: "CSS3"
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "Mongodb"
      },
      {
        id: "icon-5",
        icon: DiNodejs,
        name: "NodeJS"
      }
    ],
  },
  {
    id: "project-2",
    title: "Estate",
    image: home,
    content:
      "Un site spécialisé dans les maisons à vendre ou à louer.",
    stack: [
      {
        id: "icon-1",
        icon: SiVite,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwindcss"
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "Next.js"
      }
    ],
  },
  {
    id: "project-3",
    title: "E-commerce",
    image: eCommerce,
    content:
      " un site e-commerce offre aux clients une expérience de shopping pratique, flexible et personnalisée, avec un large choix de produits, des informations détaillées et des avantages promotionnels.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS3"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-4",
        icon: DiNodejs,
        name: "NodeJS"
      }
    ],
  },
  {
    id: "project-4",
    title: "Prescripto",
    image: prescripto,
    content:
      "Ce site simplifie la prise de rendez-vous pour les patients, en leur permettant de choisir eux-mêmes un créneau horaire disponible.",
    stack: [
      {
        id: "icon-1",
        icon: SiVite,
        name: "Vite"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCss"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-4",
        icon: DiNodejs,
        name: "NodeJS"
      }
    ],
  }
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/natacha-raharimalala-développeur",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/nath-1204",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:natachamamynirina@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
    name: `RAHARIMALALA Maminirina Natacha`,
    githubUsername: 'Nata\'Dev',
    tagLine: "",
    intro: "Bienvenue dans mon portfolio ! Je suis une étudiante, développeur d'applications Web, passionné par l'apprentissage de nouvelles technologies et la création de solutions qui font la différence.Mes compétences couvrent divers langages et cadres de programmation, notamment HTML, CSS, JavaScript, Node.js, React.js, Python, MongoDB.Je m'engage à fournir des solutions efficaces et de haute qualité qui répondent aux besoins des clients et des utilisateurs."
}


