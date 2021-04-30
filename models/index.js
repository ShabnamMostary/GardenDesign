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
const Gardens = GardensModel(connection, Sequelize, Users, Plants)

Plants.belongsToMany(Users, { through: Gardens })
Users.belongsToMany(Plants, { through: Gardens })
Gardens.belongsTo(Plants)
// Plants.hasMany(Gardens)
// Gardens.belongsTo(Users)
// Users.hasMany(Gardens)

module.exports = {
  Plants,
  Users,
  Gardens,
  Op: Sequelize.Op,
}
