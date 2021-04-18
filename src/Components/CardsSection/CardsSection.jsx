import React from 'react'
import { CardItem } from './CardItem/CardItem'
import { Wrapper } from './CardsSection.styled'

const CARDS = [
  {
    id: 1,
    image: 'images/img-9.jpg',
    text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    label: 'Adventure',
    link: '/serveces'
  },
  {
    id: 2,
    image: 'images/img-2.jpg',
    text: 'Travel through the Islands of Bali in a Private Cruise',
    label: 'Luxury',
    link: '/serveces'
  },
  {
    id: 3,
    image: 'images/img-3.jpg',
    text: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters',
    label: 'Mystery',
    link: '/serveces'
  },
  {
    id: 4,
    image: 'images/img-4.jpg',
    text: 'Experience Football on Top of the Himilayan Mountains',
    label: 'Adventure',
    link: '/products'
  },
  {
    id: 5,
    image: 'images/img-8.jpg',
    text: 'Ride through the Sahara Desert on a guided camel tour',
    label: 'Adrenaline',
    link: '/sign-up'
  },
]

export const CardsSection = () => {

  const showCards = (start = 0, end = CARDS.length) => {
    return CARDS
      .slice(start, end)
      .map((card) => <CardItem key={card.id} data={card} />)
  }
  return (
    <Wrapper>
      <h2>Check out these EPIC Destinations!</h2>
      <ul className="cards">
        {showCards(0, 2)}
      </ul>
      <ul className="cards">
        {showCards(2)}
      </ul>
    </Wrapper>
  )
}
