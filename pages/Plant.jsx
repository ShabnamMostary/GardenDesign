import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import PlantDetails from '../components/PlantDetails'
import fetchPlantDetails from '../actions/plantDetails'

const getPlantNameFromUrl = location => (location && location.pathname
  ? location.pathname.split('/plants/').pop() : '')

const retrievePlant = async (location) => {
  const plantName = getPlantNameFromUrl(location)

  if (!plantName) return {}
  const {
    // eslint-disable-next-line max-len
    id, name, description, optimal_sun, optimal_soil, planting_considerations, when_to_plan, growing_from_seed, transplanting,
    spacing, watering, feeding, other_care, diseases, pests, harvesting, storage_use, image_url,
  } = await fetchPlantDetails(plantName)

  return {
    id,
    name,
    description,
    optimal_sun,
    optimal_soil,
    planting_considerations,
    when_to_plan,
    growing_from_seed,
    transplanting,
    spacing,
    watering,
    feeding,
    other_care,
    diseases,
    pests,
    harvesting,
    storage_use,
    image_url,
  }
}

export default ({ location }) => {
  const [plantName, setPlantName] = useState('')
  const [plant, setPlant] = useState({})

  useEffect(() => {
    async function pullData() {
      const searchedPlant = await retrievePlant(location)

      setPlantName(searchedPlant.name)
      setPlant(searchedPlant)
    }
    pullData()
  }, [])

  return (
    <Page>
      {
        plantName
          ? (
            <>
              <PlantDetails
                id={plant.id}
                name={plant.name}
                description={plant.description}
                sun={plant.optimal_sun}
                soil={plant.optimal_soil}
                considerations={plant.planting_considerations}
                season={plant.when_to_plan}
                starting={plant.growing_from_seed}
                transplanting={plant.transplanting}
                spacing={plant.spacing}
                water={plant.watering}
                feeding={plant.feeding}
                care={plant.other_care}
                diseases={plant.diseases}
                pests={plant.pests}
                harvest={plant.harvesting}
                storage={plant.storage_use}
                image={plant.image_url}
              />
            </>
          )
          : (<div>Sorry, no matching plant found.</div>)
      }
    </Page>
  )
}
