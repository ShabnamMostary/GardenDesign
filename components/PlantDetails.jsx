import React from 'react'
import styled from 'styled-components'

const Details = styled.div `
  font-size: 20px;
  font-weight: 400;
  margin: 20px 0;
  text-align: center;
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
  name, description, sun, soil, considerations, season, starting, transplanting,
  spacing, water, feeding, care, diseases, pests, harvest, storage, image,
}) => (
  <Details>
    <h3>{`${name}`}</h3>
    <div>
      {` ${description}`}
    </div>
    <div>
      {' '}
      <img src={image} alt="plant" />
    </div>

    <button>Add to my garden</button>
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
