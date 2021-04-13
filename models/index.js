const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const PlantsModel = require('./plants')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})
const Plants = PlantsModel(connection, Sequelize)




module.exports = {
  Plants,
  Op: Sequelize.Op,
}