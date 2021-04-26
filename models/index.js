import Sequelize from 'sequelize'
import allConfigs from '../config/sequelize'

import PlantsModel from './plants'
import GardensModel from './gardens'
import UsersModel from './users'

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})
const Plants = PlantsModel(connection, Sequelize)
const Users = UsersModel(connection, Sequelize)
const Gardens = GardensModel(connection, Sequelize, Plants, Users)

// Gardens.hasMany(Plants)
// Gardens.belongsTo(Users)
Plants.belongsToMany(Users, { through: Gardens })

module.exports = {
  Plants,
  Users,
  Gardens,
  Op: Sequelize.Op,
}
