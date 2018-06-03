'use strict'

const path = require('path')

module.exports = async (cli) => {
  try {
    await cli.copy(
      path.join(__dirname, './examples/config.js'),
      path.join(cli.helpers.configPath(), 'demo.js')
    )
    await cli.command.completed('create', 'config/demo.js')
  } catch (error) {
    // ignore error
  }
}
