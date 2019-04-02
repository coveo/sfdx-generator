const sfdxGenerator = require('../compiled/sfdx-generator.js');
const path = require('path');
const root = path.resolve(__dirname, './..');

// Using sfdx from dev dependencies instead of global;
const sfdxPath = path.resolve(root, './node_modules/.bin/sfdx.cmd');

const generator = new sfdxGenerator.Generator({
  SFDXPath: sfdxPath,
  outputDirectory: path.resolve(root, './generated'),
  templateDirectory: path.resolve(root, './templatesExample'),
  fileExtension: '.ts'
});

// Generate files using sfdx output.
generator.generate().then(() => {
  console.log('Generating done');
});
