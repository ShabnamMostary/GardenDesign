import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import addPlantToGarden from '../actions/garden'
import userPlantList from '../actions/gardenDetails'

const Details = styled.div `
  font-size: 20px;
  font-weight: 400;
  margin: 20px 0;
  text-align: center;
  background:white;
  color:black ;
  > h3 {
    font-weight:bold;
    font-size:25px;
  }
  > div {
    padding:5px;
    }
`

export default ({
  id, name, description, sun, soil, considerations, season, starting, transplanting,
  spacing, water, feeding, care, diseases, pests, harvest, storage, image,
}) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0()
  const filterDuplicate = async (pid) => {
    if (!isAuthenticated) {
      loginWithRedirect()
    } else {
      const plantList = await userPlantList(user.email)
      const result = plantList.filter(plant => plant.plantId === pid)

      if (result.length === 1) addPlantToGarden(user.email, id)
      else alert('Already added')
    }
  }

  return (
    <Details>
      <h3>{`${name}`}</h3>
      <div>
        {` ${description}`}
      </div>
      <div>
        {' '}
        <img src={`https://res-4.cloudinary.com/do6bw42am/image/upload/c_scale,f_auto,h_300/v1/${image}`} alt="plant" />
      </div>

      <button type="submit" onClick={() => filterDuplicate(id)}>Add to my garden</button>

      <div>
        Optimal Sun:
        {` ${sun}`}
      </div>
      <div>
        Optimal Soil:
        {` ${soil}`}
      </div>
      <div>
        Considerations:
        {` ${considerations}`}
      </div>
      <div>
        When to plant:
        {` ${season}`}
      </div>
      <div>
        Growing from seed:
        {` ${starting}`}
      </div>
      <div>
        Transplanting:
        {` ${transplanting}`}
      </div>
      <div>
        Spacing:
        {` ${spacing}`}
      </div>
      <div>
        Watering:
        {` ${water}`}
      </div>
      <div>
        Feeding:
        {` ${feeding}`}
      </div>
      <div>
        Other Care:
        {` ${care}`}
      </div>
      <div>
        Diseases:
        {` ${diseases}`}
      </div>
      <div>
        Pests:
        {` ${pests}`}
      </div>
      <div>
        Harvesting:
        {` ${harvest}`}
      </div>
      <div>
        Storage and Use:
        {` ${storage}`}
      </div>

    </Details>
  )
}
