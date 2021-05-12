// NPM packages

const randomColor = require('randomcolor');
const chalk = require('chalk');
const prompt = require('prompt');

// Command line arguments

const hue = process.argv[2];
const luminosity = process.argv[3];

// Refactoring#1: Create function of drawing the pattern with colord text -> Chalk pkg

function drawing(color) {
  for (let i = 0; i < 3; i++) {
    console.log(chalk.hex(color).bold('##########################'));
  }
  for (let i = 0; i < 1; i++) {
    console.log(chalk.hex(color).bold(`###                    ###`));
  }
  for (let i = 0; i < 1; i++) {
    console.log(chalk.hex(color).bold(`###      ${color}       ###`));
  }
  for (let i = 0; i < 1; i++) {
    console.log(chalk.hex(color).bold(`###                    ###`));
  }
  for (let i = 0; i < 3; i++) {
    console.log(chalk.hex(color).bold('##########################'));
  }
}

// Ask user input with Promt pkg

if (hue === 'ask') {
  prompt.start();
  prompt.get(['hue', 'luminosity'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  hue: ' + result.hue);
    console.log('  luminosoty: ' + result.luminosity);

    // Generating Random color with luminosity and hue options

    const color = randomColor({
      luminosity: result.luminosity,
      hue: result.hue,
    });

    drawing(color);
  });
}
// In case no input run CLI app with random color
else {
  const colorGiven = randomColor({
    luminosity: luminosity,
    hue: hue,
  });

  drawing(colorGiven);
}
