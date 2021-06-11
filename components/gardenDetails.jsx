/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom'
import deletePlantFromGarden from '../actions/gardenDelete'

const Link = styled(NavLink) `
  text-decoration: none;
  color:black;
  font-family: Arial, Helvetica, sans-serif;
`

const Details = styled.div `
  font-size: 16px;
  margin: 20px;
  border-top: 1px solid black;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:baseline;
  color:black ;
     > div {
    padding: 10px;
    text-align: center;
    margin:20px;
    }
    > div button {
      background:rgb(189, 9, 6);
      border: none;
      padding:0.4em;
      color:white;
    }
    > div img {
        width:40%;
        height:80%;
    }
`

export default ({
  id, name, image, deletePl,
}) => {
  const { user } = useAuth0()

  return (
    <Details key={`${id}`}>
      <div>
        <Link to={`/plants/${name}`}>
          <h3>
            {' '}
            {`${name}`}
          </h3>
        </Link>
      </div>
      <div>
        <Link to={`/plants/${name}`}>
          <img src={`https://res-4.cloudinary.com/do6bw42am/image/upload/c_scale,f_auto,h_300/v1/${image}`} alt="plant" />
        </Link>
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
