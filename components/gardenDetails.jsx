/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import deletePlantFromGarden from '../actions/gardenDelete'

const Details = styled.div `
  font-size: 20px;
  font-weight: 400;
  margin: 20px;
  text-align: center;
  border-top: 1px solid black;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:baseline;
  color:black ;
     > div {
    padding: 10px;
    margin:20px;
    }
    > div button {
      background:rgb(189, 9, 6);
      border: none;
      color:white;
    }
    > div img {
        width:30%;
        height:80%;
    }
`

export default ({
  id, name, image, deletePl,
}) => {
  const { user } = useAuth0()

  return (
    <Details key={`${id}`}>
      <div><h3>{`${name}`}</h3></div>
      <div>
        <img src={`https://res-4.cloudinary.com/do6bw42am/image/upload/c_scale,f_auto,h_300/v1/${image}`} alt="plant" />
      </div>
      <div>
        <button
          type="submit"
          onClick={() => {
            deletePlantFromGarden(user.email, id)
            deletePl(id)
          }}
        >
          remove from garden
        </button>
      </div>
    </Details>
  )
}
