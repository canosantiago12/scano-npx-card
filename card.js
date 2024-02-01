#!/usr/bin/env node

//#region imports
import inquirer from 'inquirer';
import clear from 'clear';

import buildBox from './boxes.js';
import { codingContactInfo } from './info.js';
import { mainMenuQuestions } from './questions.js';
//#endregion

clear();

const prompt = inquirer.createPromptModule();

const questions = mainMenuQuestions;

console.log(buildBox(codingContactInfo, 0, 0));

prompt(questions).then((answer) => answer.action());
