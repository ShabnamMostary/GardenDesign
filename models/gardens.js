export default (connection, Sequelize) => connection.define('gardens', {
  userEmail: { type: Sequelize.STRING, primaryKey: true },
  plantId: