import React from 'react'
import styled from 'styled-components'
import deletePlantFromGarden from '../actions/gardenDelete'

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
  id, name, image,
}) => (
  <Details key={`${id}`}>
    <h3>{`${name}`}</h3>
    <div>
      {/* {' '} */}
      <img src={`https://res-4.cloudinary.com/do6bw42am/image/upload/c_scale,f_auto,h_300/v1/${image}`} alt="plant" />
    </div>

    <button type="submit" onClick={() => deletePlantFromGarden('shaneali184@gmail.com', id)}>
      Delete plant
    </button>
  </Details>
)
