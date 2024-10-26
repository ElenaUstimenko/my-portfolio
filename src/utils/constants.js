import conference from '../../src/images/projects/conference.png';
import support from '../../src/images/projects/support.png';
import myProject from '../../src/images/projects/my-project.jpg';
import portfolio from '../../src/images/projects/portfolio.png';
import woman from '../../src/images/projects/woman.png';
import calendar from '../../src/images/projects/calendar.png';
import movies from '../../src/images/projects/movies.png';
import movies2 from '../../src/images/projects/movies2.png';
import mesto from '../../src/images/projects/mesto.png';
import russianTravel from '../../src/images/projects/russian-travel.png';
import learn from '../../src/images/projects/learn.png';

import js from '../../src/images/stack/js.svg';
import react from '../../src/images/stack/react.svg';
import ts from '../../src/images/stack/ts.svg';
import html from '../../src/images/stack/html.svg';
import css from '../../src/images/stack/css.png';
import scss from '../../src/images/stack/scss.svg';
import storybook from '../../src/images/stack/storybook.svg';
import jest from '../../src/images/stack/jest.svg';
import reactTL from '../../src/images/stack/react-tl.svg';
import eslint from '../../src/images/stack/eslint.svg';
import stylelint from '../../src/images/stack/stylelint.svg';
import fsd from '../../src/images/stack/fsd.svg';
import redux from '../../src/images/stack/redux.svg';
import rest from '../../src/images/stack/rest.png';
import node from '../../src/images/stack/node.svg';
import express from '../../src/images/stack/express.png';
import mongo from '../../src/images/stack/mongo.png';
import webpack from '../../src/images/stack/webpack.svg';
import postman from '../../src/images/stack/postman.svg';
import npm from '../../src/images/stack/npm.svg';
import figma from '../../src/images/stack/figma.svg';
import calendar1 from '../../src/images/stack/calendar.svg';
import calendar2 from '../../src/images/stack/schedule-calendar.svg';
import github from '../../src/images/stack/github.svg';
import docker from '../../src/images/stack/docker.svg';

import mail from '../../src/images/icons/mail.svg';
import githubLink from '../../src/images/icons/github.svg';
import telegram from '../../src/images/icons/telegram.svg';
import cv from '../../src/images/icons/cv.svg';

export const projectsList = [
  {
    id: 1,
    title: 'Сonference',
    description: `Website for information and registration for the conference.`,
    stack: [
      'Stack: React, TypeScript, SCSS, classnames, Yandex Metrica'
    ],
    browser: 'https://carx-gamedev.carx-online.com/',
    image: conference
  },
  {
    id: 2,
    title: 'Technical support',
    description: `Personal user account with technical support communication function.`,
    stack: [
      'Stack: React, SCSS, classnames'
    ],
    github: 'https://github.com/ElenaUstimenko/test-task-for-CarX-Technologies',
    image: support
  },
  {
    id: 3,
    title: 'My project',
    description: `Pet-project: The project demonstrates my skills and abilities.`,
    stack: [
      'Stack: Webpack, React, TypeScript, SCSS, classnames, alias, mixins, i18n, theme switcher, ESLint, Stylelint, Loader, Error Boundary React, Jest, React Testing Library, Storybook'
    ],
    github: 'https://github.com/ElenaUstimenko/my-project',
    image: myProject
  },
  {
    id: 4,
    title: 'Portfolio web-developer',
    description: `The project demonstrates my skills and abilities. On the site it is possible to find information about all my projects and find all the necessary links to contact me.`,
    stack: ['Stack: React, CSS, BEM, Prettier'],
    github: 'https://github.com/ElenaUstimenko/my-portfolio',
    image: portfolio
  },
  {
    id: 5,
    title: 'Women in the nuclear industry',
    description: `Team development of the site for the Women’s Initiative Development Support Fund "Association of Women in the Nuclear Industry". Production in 2024.`,
    stack: [
      'Stack: React, TypeScript, SCSS, Next.js, architecture FSD, UI Kit, classnames'
    ],
    browser: 'no',
    image: woman
  },
  {
    id: 6,
    title: 'Calendar',
    description: `Pet-project: calendar (without using libraries) + added option to change theme.`,
    stack: ['Stack: React, TypeScript'],
    github: 'https://github.com/ElenaUstimenko/calendar--light-dark-theme',
    image: calendar
  },
  {
    id: 7,
    title: 'Analogue Kinopoisk (frontend)',
    description: `Development of a site where you can find movies on request and save them in your personal account. Frontend.`,
    stack: [
      'Stack: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Postman, Git'
    ],
    github: 'https://github.com/ElenaUstimenko/movies-explorer-frontend.git',
    image: movies
  },
  {
    id: 8,
    title: 'Analogue Kinopoisk (backend)',
    description: `Development of a site where you can find movies on request and save them in your personal account. Backend.`,
    stack: [
      'Stack: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Postman, Git'
    ],
    github: 'https://github.com/ElenaUstimenko/movies-explorer-api.git',
    image: movies2
  },
  {
    id: 9,
    title: 'Analogue Instagram',
    description: `Development of a site - an interactive page where you can add photos, delete them and put likes.`,
    stack: ['Stack: React, Node.js, Express, MongoDB, Postman, Git'],
    github: 'https://github.com/ElenaUstimenko/react-express-mesto-full',
    image: mesto
  },
  {
    id: 10,
    title: 'Landing page',
    description: `This project introduces people to the most picturesque corners of Russia.`,
    stack: ['Stack: VanillaJS, HTML, CSS, flex, grid, BEM'],
    github: 'https://github.com/ElenaUstimenko/russian-travel',
    image: russianTravel
  },
  {
    id: 11,
    title: 'Landing page',
    description: `The project is dedicated to teaching methods and techniques for quickly memorizing new information`,
    stack: ['Stack: VanillaJS, HTML, CSS, BEM'],
    github: 'https://github.com/ElenaUstimenko/how-to-learn',
    image: learn
  }
];

export const stackList = [
  {
    title: 'Java Script',
    image: js
  },
  {
    title: 'React.js',
    image: react
  },
  {
    title: 'Type Script',
    image: ts
  },
  {
    title: 'Next.js',
    image: node
  },
  {
    title: 'HTML5',
    image: html
  },
  {
    title: 'CSS3',
    image: css
  },
  {
    title: 'SCSS',
    image: scss
  },
  {
    title: 'Storybook',
    image: storybook
  },
  {
    title: 'Jest',
    image: jest
  },
  {
    title: 'React TL',
    image: reactTL
  },
  {
    title: 'Eslint',
    image: eslint
  },
  {
    title: 'Stylelint',
    image: stylelint
  },
  {
    title: 'FSD',
    image: fsd
  },
  {
    title: 'Redux',
    image: redux
  },
  {
    title: 'REST API',
    image: rest
  },
  {
    title: 'Node.js',
    image: node
  },
  {
    title: 'Express.js',
    image: express
  },
  {
    title: 'MongoDB',
    image: mongo
  },
  {
    title: 'Webpack',
    image: webpack
  },
  {
    title: 'Postman',
    image: postman
  },
  {
    title: 'NPM',
    image: npm
  },
  {
    title: 'Figma',
    image: figma
  },
  {
    title: 'GitHub',
    image: github
  },
  {
    title: 'Docker',
    image: docker
  },
  {
    title: 'Linear',
    image: calendar1
  },
  {
    title: 'Kaiten',
    image: calendar2
  }
];

export const contactList = [
  {
    title: 'telegram',
    image: telegram,
    text: '@elena_6464',
    link: 'https://t.me/elena_6464'
  },
  {
    title: 'gitHub',
    image: githubLink,
    text: 'ElenaUstimenko',
    link: 'https://github.com/ElenaUstimenko'
  },
  {
    title: 'email',
    image: mail,
    text: 'elena.ustimenko@ internet.ru',
    link: 'mailto:elena.ustimenko@internet.ru'
  },
  {
    title: 'CV',
    image: cv,
    text: 'CV',
    link: 'https://drive.google.com/file/d/15tJQCAF3HuZ26Pq7Q53GBI3QFHPc2Cwk/view?usp=drive_link'
  }
];
