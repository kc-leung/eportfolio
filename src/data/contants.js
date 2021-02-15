const Images = [
  require('../assets/projects/PinIt.png'),
  require('../assets/projects/ReactApp.png'),
  require('../assets/projects/AngularStudents.png'),
  require('../assets/projects/chen.png'),
  require('../assets/projects/PracticeApp.png'),
  require('../assets/projects/Angularstore.png'),
];

export const projectArray = [
  {
    title: 'reactNative - app - PinIT',
    color: '#6fc3df',
    description:
      'Multiple users within a group to view and share their favorite spot for different activities giving suggestion for those who are new in the area and want to explore what is the best in where they will be heading to.',
    backgroundImage: Images[0],
    urlDemo:
      'https://drive.google.com/file/d/1S05r2VV82cuSQP7EynVRWrq7allT1Etf/view?usp=sharing',
    urlGithub: 'https://github.com/mapshare/mobile-app-frontend',
  },
  {
    title: 'react - redux - firebase',
    color: '#ec8d81',
    description:
      'Project posting application with account creation system and role based authorization for access control.',
    backgroundImage: Images[1],
    urlDemo: 'https://react-redux-firebase-67bb5.firebaseapp.com/',
    urlGithub: 'https://github.com/kc-leung/react-redux-firebase',
  },
  {
    title: 'WordPress - Elementor - ChenTeam',
    color: 'rgb(244, 163, 83)',
    description:
      'Fully functional and responsive website to display listings, reviews and CHEN team’s members & descriptions.',
    backgroundImage: Images[3],
    urlDemo: 'https://www.chenhome.ca/en/'
  },
  {
    title: 'angular - app - employes',
    color: '#87c5a4',
    description:
      'Full stack application which display the retrieved employee’s data from a backend API with the feature of updating and validating the inputted information.',
    backgroundImage: Images[4],
    urlDemo: 'https://angular-application-employees.herokuapp.com/',
    urlGithub: 'https://github.com/kc-leung/angular-app-employes',
  },
  {
    title: 'angular - app - comment',
    color: '#8ea9e8',
    description:
      'Comment/Posting system which the user can select a specific item and remove their own Comment/Post.',
    backgroundImage: Images[5],
    urlDemo: 'https://angular-app-comment.herokuapp.com/',
    urlGithub: 'https://github.com/kc-leung/angular-app-comments',
  },
  {
    title: 'angular - app - student',
    color: '#e7b788 ',
    description:
      'Display the retrieved student’s data from a backend API with a filter and searching feature for each student.',
    backgroundImage: Images[2],
    urlDemo: 'https://angular-app-student.herokuapp.com/',
    urlGithub: 'https://github.com/kc-leung/angular-app-student',
  },
];

export const navbarArray = [
  { title: 'HOME', link: 'home' },
  { title: 'PROJECTS', link: 'projects' },
  { title: 'ABOUT', link: 'about' },
  { title: 'CONTACTS', link: 'contacts' },
];
