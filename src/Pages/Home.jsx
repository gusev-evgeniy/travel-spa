import React from 'react'
import { CardsSection } from '../Components/CardsSection/CardsSection'
import { Footer } from '../Components/Footer/Footer'
import { StartSection } from '../Components/StartSection/StartSection'

export const Home = () => {
  return (
    <div>
      <StartSection />
      <CardsSection />
      <Footer />
    </div>
  )
}
