// NPM packages

const randomColor = require('randomcolor');
const chalk = require('chalk');
const prompt = require('prompt');

// Command line arguments

const luminosity = process.argv[2];
const hue = process.argv[3];

// Ask user input with Promt pkg

if (luminosity === 'ask') {
  prompt.start();
  prompt.get(['luminosity', 'hue'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  luminosoty: ' + result.luminosity);
    console.log('  hue: ' + result.hue);

    // Generating Random color with luminosity and hue options

    const color = randomColor({
      luminosity: result.luminosity,
      hue: result.hue,
    });

    // Drawing the pattern with colord text:Chalk pkg

    for (i = 0; i < 3; i++) {
      console.log(chalk.hex(color).bold('##########################'));
    }
    for (i = 0; i < 1; i++) {
      console.log(chalk.hex(color).bold(`###                    ###`));
    }
    for (i = 0; i < 1; i++) {
      console.log(chalk.hex(color).bold(`###      ${color}       ###`));
    }
    for (i = 0; i < 1; i++) {
      console.log(chalk.hex(color).bold(`###                    ###`));
    }
    for (i = 0; i < 3; i++) {
      console.log(chalk.hex(color).bold('##########################'));
    }
  });
}
// In case no input run CLI app with random color
else {
  const colorGiven = randomColor({
    luminosity: luminosity,
    hue: hue,
  });

  for (i = 0; i < 3; i++) {
    console.log(chalk.hex(colorGiven).bold('##########################'));
  }
  for (i = 0; i < 1; i++) {
    console.log(chalk.hex(colorGiven).bold(`###                    ###`));
  }
  for (i = 0; i < 1; i++) {
    console.log(chalk.hex(colorGiven).bold(`###      ${colorGiven}       ###`));
  }
  for (i = 0; i < 1; i++) {
    console.log(chalk.hex(colorGiven).bold(`###                    ###`));
  }
  for (i = 0; i < 3; i++) {
    console.log(chalk.hex(colorGiven).bold('##########################'));
  }
}
