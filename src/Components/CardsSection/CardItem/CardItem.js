import React from 'react'
import { Wrapper } from './CardItem.styles'

export const CardItem = ({ data }) => {
  const { image, text, label, link } = data

  return (
    <Wrapper>
      <a href={link}>
        <div className='image-wrapper'>
          <img src={image} alt={label} />
          <span> {label}</span>
        </div>
        <p>{text}</p>
      </a>
    </Wrapper>
  )
}
