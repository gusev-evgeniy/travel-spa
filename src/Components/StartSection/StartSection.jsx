import React from 'react'
import { Wrapper } from './StartSection.styled'

export const StartSection = () => {
  return (
    <Wrapper>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h2>adventure awaits</h2>
      <p>What are you waiting for?</p>
      <div className="buttons">
        <button>get started</button>
        <button>watch trailer</button>
      </div>
    </Wrapper>
  )
}
