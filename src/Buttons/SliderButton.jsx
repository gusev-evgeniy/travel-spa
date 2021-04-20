import React from 'react'
import { SliderButtonWrapper } from './SliderButton.style'

export const SliderButton = (props) => {
  return (
    <SliderButtonWrapper {...props} >
      <i className="fas fa-arrow-circle-left back" ></i>
    </SliderButtonWrapper>
  )
}
