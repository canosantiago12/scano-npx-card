import chalk from 'chalk';
import clear from 'clear';
import open from 'open';
import inquirer from 'inquirer';

import buildBox from './boxes.js';
import {
  artContactInfo,
  codingContactInfo,
  gamingContactInfo,
} from './info.js';

const prompt = inquirer.createPromptModule();

const artMenu = () => {
  clear();
  console.log(buildBox(artContactInfo, 2, 2));
  const artMenuQuestions = [
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: [
        {
          name: 'Go back ◀️',
          value: () => {
            clear();
            console.log(buildBox(codingContactInfo, 0, 0));
            prompt(mainMenuQuestions).then((answer) => answer.action());
          },
        },
      ],
    },
  ];
  prompt(artMenuQuestions).then((answer) => answer.action());
};

const gamingMenu = () => {
  clear();
  console.log(buildBox(gamingContactInfo, 1, 1));
  const gamingMenuQuestions = [
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: [
        {
          name: 'Go back ◀️',
          value: () => {
            clear();
            console.log(buildBox(codingContactInfo, 0, 0));
            prompt(mainMenuQuestions).then((answer) => answer.action());
          },
        },
      ],
    },
  ];
  prompt(gamingMenuQuestions).then((answer) => answer.action());
};

export const mainMenuQuestions = [
  {
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
      {
        // Use chalk to style headers
        name: `Toss an ${chalk.bold('email')}? 📧`,
        value: () => {
          open('mailto:example@example.com');
          console.log(
            '\nLooking forward to hearing your message and replying to you!\n'
          );
        },
      },
      {
        name: "Let's play! 🎮",
        value: () => {
          gamingMenu();
        },
      },
      {
        name: 'Watch my art! 🎨',
        value: () => {
          artMenu();
        },
      },
      {
        name: 'Exit 👋',
        value: () => {
          console.log('Good bye, have a nice day!\n');
        },
      },
    ],
  },
];
