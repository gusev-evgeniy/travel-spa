import React from 'react'
import { CardItem } from './CardItem/CardItem'
import { Wrapper } from './CardsSection.styled'

export const CardsSection = () => {
  return (
    <Wrapper>
      <h2>Check out these EPIC Destinations!</h2>
      <ul className="cards">
        <CardItem />
        <CardItem />
      </ul>
      <ul className="cards">
        <CardItem />
        <CardItem />
        <CardItem />
      </ul>
    </Wrapper>
  )
}
