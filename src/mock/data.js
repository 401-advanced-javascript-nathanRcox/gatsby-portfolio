import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nathan Rhead Cox | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'I\'m a client-oriented team player who is always on the look-out for new ways to make old processes work better. Whether it’s saving an organization money by cutting costs, finding new vendors, or refining a process; or  increasing a bottom line by recruiting new clients, improving a program and its reviews, or introducing new revenue  streams, I do my work with old-school integrity and a passion for quality.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'nrc-headshot.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1OicsNs5sKsXG16HiFftCNdQPPMk6Re3n/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'speakeasier-screenshot.png',
    title: 'Speakeasier',
    info: 'A lightweight, full-stack web application built for the veteran and would-be traveler alike to reminisce about traveling, to brag about all the places you’ve been, and to start dreaming about where you’ll go next as soon as the world opens back up for business.',
    info2: '',
    url: 'https://speakeasier.herokuapp.com/',
    repo: 'https://github.com/nathanrhead/Speakeasier', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'code-followers.png',
    title: 'Code Followers',
    info: 'This app was made as a text-based game played entirely on the command line, and the content is based on my and my cohort\'s experience as a diverse set of students studying JavaScript at Code Fellows.',
    info2: 'To make this app, we used Node.JS as the runtime development platform; Heroku and the JavaScript framework Express as the server and router; mongoDB as the NoSQL database; Prompts, a JS library for creating and styling a command line user interface; and Git and GitHub for version control.',
    url: 'https://github.com/401-advanced-javascript-nathanRcox/code-followers',
    repo: 'https://github.com/401-advanced-javascript-nathanRcox/code-followers', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nrc4@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nathanrheadcox/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nathanrhead',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
