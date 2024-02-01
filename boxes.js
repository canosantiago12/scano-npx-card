import chalk from 'chalk';
import boxen from 'boxen';

const selectParagraph = (id) => {
  switch (id) {
    case 0:
      return [
        `${chalk.bold("Hi there! I'm Santiago, I'm a passionate fullstack ")}`,
        `${chalk.bold('developer and web designer from Mexico, and have a ')}`,
        `${chalk.bold('bunch of hobbies like gaming, 3d modeling, web ')}`,
        `${chalk.bold('design, playing instruments, swimming and much more')}`,
        `${chalk.bold('Toss me an email if you want to collab!')}`,
      ].join('\n');

    case 1:
      return [
        `${chalk.bold('Looking for a gaming buddy?')}`,
        `${chalk.bold("I'm into survival games, rts games, RPGs, MMORPGs")}`,
        `${chalk.bold('MOBA games, story games and many more!')}`,
        `${chalk.bold('My favorite games of all time: Terraria, Minecraft,')}`,
        `${chalk.bold("Bioshock, The Beginner's Guide and PayDay 2.")}`,
      ].join('\n');

    case 2:
      return [
        `${chalk.bold('3D Modeling artist on the way!')}`,
        `${chalk.bold(
          'I mainly use Blender to create anything I can imagine'
        )}`,
        `${chalk.bold("I'm currently a beginner/intermediate designer, but ")}`,
        `${chalk.bold(
          "I'm trying to get better and you can watch my process"
        )}`,
        `${chalk.bold(
          "in the link above. Hopefully I'll be able to offer my "
        )}`,
        `${chalk.bold('services in the near future.')}`,
      ].join('\n');

    default:
      return '';
  }
};

const selectBox = (data, id) => {
  switch (id) {
    case 0:
      return [
        `${data.name}`,
        `${data.handle}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelDev}  ${data.dev}`,
        `${data.labelDribbble}  ${data.dribbble}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
      ].join('\n');

    case 1:
      return 'Gaming';

    case 2:
      return 'Art';

    default:
      return '';
  }
};

const buildBox = (data, boxId, paragraphId) => {
  const box = boxen(
    [`${selectBox(data, boxId)}`, `${selectParagraph(paragraphId)}`].join('\n'),
    {
      title: 'About me:',
      margin: 1,
      float: 'center',
      padding: 1,
      borderStyle: 'round',
      borderColor: '#FFDB58',
      textAlignment: 'center',
    }
  );

  return box;
};

export default buildBox;
