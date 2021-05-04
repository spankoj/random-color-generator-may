// ------------------NPM packages--------------------------------------
const randomColor = require('randomcolor');
const chalk = require('chalk');
const prompt = require('prompt');

//------------------Command line arguments------------------------------
const luminosity = process.argv[2];
const hue = process.argv[3];

// ----------------Random color generator with luminosity and hue-----

// console.log(color);

// ----------------Drawing the pattern----------------------------------
if (luminosity === 'ask') {
  prompt.start();
  prompt.get(['luminosity', 'hue'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  luminosoty: ' + result.luminosity);
    console.log('  hue: ' + result.hue);

    const color = randomColor({
      luminosity: result.luminosity,
      hue: result.hue,
    });

    for (i = 0; i < 3; i++) {
      console.log(chalk.hex(color).bold('##########################')); // makes pound with the rendom color
    }
    for (i = 0; i < 1; i++) {
      console.log(chalk.hex(color).bold(`###                    ###`)); // makes pound with the rendom color
    }
    for (i = 0; i < 1; i++) {
      console.log(chalk.hex(color).bold(`###      ${color}       ###`)); // makes pound with the rendom color
    }
    for (i = 0; i < 1; i++) {
      console.log(chalk.hex(color).bold(`###                    ###`)); // makes pound with the rendom color
    }
    for (i = 0; i < 3; i++) {
      console.log(chalk.hex(color).bold('##########################')); // makes pound with the rendom color
    }
  });
} else {
  const colorGiven = randomColor({
    luminosity: luminosity,
    hue: hue,
  });

  for (i = 0; i < 3; i++) {
    console.log(chalk.hex(colorGiven).bold('##########################')); // makes pound with the rendom colorGiven
  }
  for (i = 0; i < 1; i++) {
    console.log(chalk.hex(colorGiven).bold(`###                    ###`)); // makes pound with the rendom colorGiven
  }
  for (i = 0; i < 1; i++) {
    console.log(chalk.hex(colorGiven).bold(`###      ${colorGiven}       ###`)); // makes pound with the rendom colorGiven
  }
  for (i = 0; i < 1; i++) {
    console.log(chalk.hex(colorGiven).bold(`###                    ###`)); // makes pound with the rendom colorGiven
  }
  for (i = 0; i < 3; i++) {
    console.log(chalk.hex(colorGiven).bold('##########################')); // makes pound with the rendom colorGiven
  }
}
