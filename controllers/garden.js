import models from '../models'

// eslint-disable-next-line import/prefer-default-export
export const getGardenByUser = async (request, response) => {
  try {
    const garden = await models.Gardens.findAll()

    return garden
      ? response.send(garden)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve garden, please try again')
  }
}
export const addPlantToGarden = async (request, response) => {
  try {
    const { userEmail, plantId } = request.body

    if (!userEmail || !plantId) {
      return response.status(400).send('Following items are required user email and plant Id')
    }

    const newPlant = await models.Gardens.create({ userEmail, plantId })

    return response.status(201).send(newPlant)
  } catch (error) {
    return response.status(500).send('Unable to add plant to garden, please try again')
  }
}
