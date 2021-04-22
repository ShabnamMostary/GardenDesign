import models from '../models'

// eslint-disable-next-line import/prefer-default-export
export const getAllPlants = async (request, response) => {
  try {
    const plants = await models.Plants.findAll()

    return plants
      ? response.send(plants)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve plants, please try again')
  }
}
export const getPlantsByName = async (requst, response) => {
  try {
    const { name } = requst.params
    const result = await models.Plants.findOne({
      where: {
        name: { [models.Op.like]: `%${name}%` },
      },
    })

    return result
      ? response.send(result)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve plant, please try again')
  }
}
