export default (connection, Sequelize, Users, Plants) => connection.define('gardens', {
  userEmail: { type: Sequelize.STRING, references: { model: Users, key: 'email' } },
  plantId: { type: Sequelize.INTEGER, references: { model: Plants, key: 'id' } },
}, {
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
  },
}, { paranoid: true })
