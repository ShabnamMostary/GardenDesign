export default (connection, Sequelize) => connection.define('users', {
  email: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
  password: { type: Sequelize.STRING, allowNull: false },
}, {
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
  },
}, { paranoid: true })
