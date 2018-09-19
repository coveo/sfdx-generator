const sfdxGenerator = require('../dist/sfdx-generator.cjs')
const path = require('path')
const root = path.resolve(__dirname, './..')
const generator = new sfdxGenerator.Generator({
  SFDXPath: 'sfdx',
  outputDirectory: path.resolve(root, './generated'),
  templateDirectory: path.resolve(root, './templatesExample'),
  fileExtension: '.ts'
})

const commandFile = require('../commands.json')
const stringFile = JSON.stringify(commandFile)
generator.generate(stringFile).then(() => {
  console.log('Generating done')
})
