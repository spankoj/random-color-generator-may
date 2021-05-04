// NPM packages
const randomColor = require('randomcolor');
const chalk = require('chalk');

//Command line arguments
const luminosity = process.argv[2];
const hue = process.argv[3];

// Randomo color generator with luminosity and hue
const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

console.log(color);

// const pound = '#';

for (i = 0; i < 5; i++) {
  console.log(chalk.hex(color).bold('#')); // makes pound with the rendom color
}
