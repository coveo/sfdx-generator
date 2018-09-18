var generator = require('../dist/sfdx-generator.cjs')
var path = require('path')
var root = path.resolve(__dirname, './..')
var generator = new generator.Generator({
  SFDXPath: 'sfdx',
  outputDirectory: path.resolve(root, './generated'),
  templateDirectory: path.resolve(root, './templatesExample'),
  fileExtension: 'ts'
})

var commandFile = require('../commands.json')
var stringFile = JSON.stringify(commandFile)
generator.generate(stringFile).then(() => {
  console.log('Generating done')
})
