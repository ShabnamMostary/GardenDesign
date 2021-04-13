// to read data from database in right format
const plants = (connection, Sequelize) => {
  return connection.define('plants', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name:{type: Sequelize.STRING,allowNull: false, unique: true},
  description:{type: Sequelize.TEXT('long'),allowNull: false},
  optimal_sun:{type: Sequelize.STRING},
  optimal_soil:{type: Sequelize.STRING},
  planting_considerations:{type: Sequelize.TEXT('long')},
  when_to_plant:{type: Sequelize.TEXT('long')},
  growing_from_seed:{type: Sequelize.TEXT('long')},
  transplanting:{type: Sequelize.TEXT('long')},
  spacing:{type: Sequelize.TEXT('long')},
  watering:{type: Sequelize.TEXT('long')},
  feeding:{type: Sequelize.TEXT('long')},
  other_care:{type: Sequelize.TEXT('long')},
  diseases:{type: Sequelize.TEXT('long')},
  pests:{type: Sequelize.TEXT('long')},
  harvesting:{type: Sequelize.TEXT('long')},
  storage_use:{type: Sequelize.TEXT('long')},
  image_url:{type: Sequelize.STRING}, 
},{
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
},
}, { paranoid: true })
}
module.exports = plants