import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Md. Touhidul Hoque',
  subtitle: ' A Full Stack Web Developer From Dhaka,Bangladesh',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1snB5rZCh3QsPMNNvnV2GMGct1a4AsJj8/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'creative.PNG',
    title: 'Creative-Agency',
    info:
      'A dynamic secured website where users can login and order for a service which is saved in a database.',
    info2:
      'Users can post a review on the landing page.Even, admins can see the services ordered and change the status',
    url: 'https://creative-agency-23a90.web.app',
    repo: 'https://github.com/HoqueTouhidul97/react-travel', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'travel.png',
    title: 'Travel-Guru',
    info: 'A dynamic traveling website where users can log in and book for a traveling place.',
    info2:
      'Users can find a suitable hotel through the app.In addition, users can inspect the travelling location in google map.',
    url: 'https://eloquent-noether-68011b.netlify.app',
    repo: 'https://github.com/HoqueTouhidul97/react-travel', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'volunteer.png',
    title: 'Volunteer-Network',
    info:
      'A single page web application with a dashboard for a volunteer community where users can volunteer for a task and admins can see the volunteer tasks and change/delete them.',
    info2: '',
    url: 'https://volunteer-network-d1fbd.web.app/',
    repo: 'https://github.com/HoqueTouhidul97/volunteer-ready', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'utshohoque@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/utsho96',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/touhidul-hoque-utsho',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/md-touhidul-hoque-5a17101b1/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/HoqueTouhidul97',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
