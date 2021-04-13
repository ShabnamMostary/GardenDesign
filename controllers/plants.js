const models = require('../models')
const getAllPlants = async (request, response) => {
  try {
    const plants = await models.Plants.findAll()

    return plants
      ? response.send(plants)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve plants, please try again')
  }
}
module.exports = { getAllPlants }