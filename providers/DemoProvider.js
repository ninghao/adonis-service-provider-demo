'use strict'

const { ServiceProvider }  = require('@adonisjs/fold')

class DemoProvider extends ServiceProvider {
  register () {
    this.app.singleton('Ninghao/Demo/Greeting', (app) => {
      const Config = app.use('Adonis/Src/Config')
      const Greeting = require('../src/Greeting')
      return new Greeting(Config)
    })

    this.app.alias('Ninghao/Demo/Greeting', 'Greeting')
  }

  boot () {

  }
}

module.exports = DemoProvider
