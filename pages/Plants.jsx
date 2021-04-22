import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Plant from '../components/Plant'
import Search from '../components/Search'
import { filterPlant, retrievePlant } from '../utils/plants'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [plantList, setPlantList] = useState([])
  const [filteredPlantList, setFilteredPlantList] = useState([])

  useEffect(() => {
    async function pullData() {
      const plants = await retrievePlant()

      setPlantList(plants)
    }
    pullData()
  }, [])
  useEffect(() => {
    const filtered = filterPlant(plantList, searchTerm)

    setFilteredPlantList(filtered)
  }, [searchTerm])

  return (
    <Page>
      <Search term={searchTerm} setter={setSearchTerm} />
      {filteredPlantList.map(plant => (<Plant key={plant.id} id={plant.id} name={plant.name} />))}
    </Page>
  )
}
