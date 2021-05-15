export default (connection, Sequelize, Plants) => {
  const gar = connection.define('gardens', {
    userEmail: { type: Sequelize.STRING },
    plantId: { type: Sequelize.INTEGER, references: { model: Plants, key: 'id' } },
  }, {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
    },
  }, { paranoid: true })

  gar.removeAttribute('id')

  return gar
}
