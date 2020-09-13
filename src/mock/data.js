import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'LAGG', // e.g: 'Name | Developer'
  lang: 'EN, ES', // e.g: en, es, fr, jp
  description: 'I am glad you are here', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'L. Angela Gutierrez',
  subtitle: 'I am ready to transition into Web Development and Design',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_2670.JPG',
  paragraphOne:
    'As a professional with a background in the design of living spaces with an interest in function over form,\nI bring those qualities to the web development area. My interest is creating  thorough and user friendly applications that also have elements of good design. For me, functionality  and creating a good user experience is first  and foremost the objective.',
  paragraphTwo:
    'I recently received a certificate in Web Development by the University of New Hampshire, powered by Trilogy 2U education. I am proficient in HTML5, CSS, JavaScript, RESTful API, Node.js, PWA, Express, Mongo and MySQL and React and Vue frameworks',
  paragraphThree: 'Always interested in learning new technologies and broaden my skill set',
  resume: 'LAGGResume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'RecipeBoxHP.PNG',
    title: 'Recipe Box',
    info: 'Save your recipes in an online database',
    info2: 'Node, Bootstrap, Express, MongoDB',
    url: 'https://fast-mountain-43531.herokuapp.com/index.html',
    repo: 'https://github.com/Kaleighspurio/Project2-Recipe-Box', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'homepage.jpg',
    title: 'Project-1-Professor-Planet',
    info: 'Professor Planet is here to teach you about the solar system. Give it a try!',
    info2: 'Materialize, API calls',
    url: 'ttps://github.com/lalaggv2/Project-1-Professor-Planet',
    repo: 'https://bowdwin.github.io/Project-1/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Workout2.png',
    title: 'Workout Tracker',
    info:
      'Keep track of your workout, either cardio or resistance. Build up and see the charts denoting your progress!!!',
    info2: 'JavaScript, CSS, HTML, MongoDB, Node.js, Express',
    url: 'https://workout-tracker2020nh.herokuapp.com/?id=5f2751caa0b2ac0017ec567e',
    repo: 'https://github.com/lalaggv2/workoutrack', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Budget1.png',
    title: 'Offline Budget Tracker',
    info:
      'Keep track of your expenses even when offline, and be able to update them when back online to the database',
    info2: 'Node, Bootstrap, Express, IndexedDB, PWA',
    url: 'https://fast-mountain-43531.herokuapp.com/index.html',
    repo: 'https://github.com/Kaleighspurio/Project2-Recipe-Box', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'luangu2020@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/lalagg',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/luz-angela-g-3256769b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lalaggv2',
    },
  ],
};
