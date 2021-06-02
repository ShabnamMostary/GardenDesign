import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Page from '../components/ComponentPage'
import GardenDetails from '../components/GardenDetails'
import fetchGarden from '../actions/gardenDetails'

export default () => {
  const { user, isAuthenticated } = useAuth0()

  const [garden, setGarden] = useState([])
  const deletePlant = (id) => {
    const newGarden = garden.filter(data => data.plant.id !== id)

    setGarden(newGarden)
  }
  const mystyle = {
    color: 'white',
    backgroundColor: '#ffc107',
    padding: '10px',
    fontFamily: 'Arial',
    textAlign: 'center',
  }

  useEffect(() => {
    async function pullData() {
      if (user) {
        const searchedGarden = await fetchGarden(user.email)

        setGarden(searchedGarden)
      }
    }
    pullData()
  }, [user])

  return (
    isAuthenticated ? (
      <Page>
        {
          garden
            ? (
              garden.map(data => (

                <GardenDetails
                  key={data.plant.id}
                  id={data.plant.id}
                  name={data.plant.name}
                  image={data.plant.image_url}
                  deletePl={deletePlant}
                />

              )))
            : (<div>Sorry, no matching garden found.</div>)
        }
      </Page>
    ) : (<div style={mystyle}>Please, Log in.</div>)
  )
}
