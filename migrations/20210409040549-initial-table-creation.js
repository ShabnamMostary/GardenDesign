module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('plants', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false, unique: true },
      description: { type: Sequelize.TEXT('long'), allowNull: false },
      optimal_sun: { type: Sequelize.STRING },
      optimal_soil: { type: Sequelize.STRING },
      planting_considerations: { type: Sequelize.TEXT('long') },
      when_to_plant: { type: Sequelize.TEXT('long') },
      growing_from_seed: { type: Sequelize.TEXT('long') },
      transplanting: { type: Sequelize.TEXT('long') },
      spacing: { type: Sequelize.TEXT('long') },
      watering: { type: Sequelize.TEXT('long') },
      feeding: { type: Sequelize.TEXT('long') },
      other_care: { type: Sequelize.TEXT('long') },
      diseases: { type: Sequelize.TEXT('long') },
      pests: { type: Sequelize.TEXT('long') },
      harvesting: { type: Sequelize.TEXT('long') },
      storage_use: { type: Sequelize.TEXT('long') },
      image_url: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })
    await queryInterface.createTable('users', {
      email: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
      password: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })

    return queryInterface.createTable('gardens', {
      userEmail: { type: Sequelize.STRING, references: { model: 'users', key: 'email' } },
      plantId: { type: Sequelize.INTEGER, references: { model: 'plants', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('gardens')
    await queryInterface.dropTable('users')

    return queryInterface.dropTable('plants')
  },
}
