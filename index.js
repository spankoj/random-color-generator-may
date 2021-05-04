// NPM package
const randomColor = require('randomcolor');

//Command line arguments
const luminosity = process.argv[2];
const hue = process.argv[3];

// Randomo color generator with luminosity and hue
const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

console.log(color);

const pound = '#';

for (i = 0; i < 5; i++) {
  console.log(pound);
}
