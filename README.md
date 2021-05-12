# Random Color Generator

## Goal: Create CLI - Command Line Interface application with Node.js

- The application will return a random color in the command line.
- Itt will create a block of approximately 31x9 # characters
  It will create a random color using hex code (e.g. #ff0000) that will be presented in a certain way

## Code parts:

1. // NPM packages
2. // Command line arguments
3. // Ask user input with Promt pkg
4. // Generating Random color with luminosity and hue options
5. // Drawing the pattern with colord text:Chalk pkg
6. // In case no input run CLI app with random color

## Use:

1. Start application typing: node index.js

2. User input possibility with below options:

Option 1

Typing: node index.js **argument1** **argument2**

> - argument1: Hue value (for instance: _blue_ / _red_ / _green_)
> - argument2: Luminosity value _light_ / _dark_

Option 2

Typing: node index.js **ask**

> - Hue will be asked (for instance: _blue_ / _red_ / _green_)
> - Luminosity will be asked to input _light_ / _dark_
