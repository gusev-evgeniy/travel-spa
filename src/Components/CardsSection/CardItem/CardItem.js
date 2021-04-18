import React from 'react'
import { Wrapper } from './CardItem.styles'

export const CardItem = () => {
  return (
    <Wrapper>
      <a href='/'>
        <div className='image-wrapper'>
          <img src='images/img-9.jpg' alt="" />
          <span> Adventure</span>
        </div>
        <p>Explore the hidden waterfall deep inside the Amazon Jungle</p>
      </a>
    </Wrapper>
  )
}
