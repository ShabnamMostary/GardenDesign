import plantList from '../actions/plants'

export const filterPlant = (list, term) => {
  if (!term) return []

  return list.filter(plant => (
    plant.name.toLowerCase().includes(term.toLowerCase())
  ))
}
export const retrievePlant = async () => {
  const plants = await plantList()

  return plants
}
