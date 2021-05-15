import models from '../models'

// eslint-disable-next-line import/prefer-default-export
export const getGardenByUser = async (request, response) => {
  try {
    const { user } = request.params
    const result = await models.Gardens.findAll({
      where: { userEmail: user },
      include: [
        { model: models.Plants },
      ],
    })

    return result
      ? response.send(result)
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
    console.log(error)

    return response.status(500).send('Unable to add plant to garden, please try again')
  }
}
export const deletePlant = async (request, response) => {
  try {
    const { email, Id } = request.body

    if (!email || !Id) {
      return response.status(400).send('Following items are required user email and plant Id')
    }
    const result = await models.Gardens.findOne({
      where: {
        userEmail: email,
        plantId: Id,
      },
    })

    await result.destroy()

    return response.status(201).send('Successfully deleted the plant')
  } catch (error) {
    return response.status(500).send('Unable to delete plant from garden, please try again')
  }
}
