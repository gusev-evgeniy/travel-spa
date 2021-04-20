import { Link } from 'react-router-dom'
import { Slider } from '../Slider/Slider'
import { Wrapper } from './StartSection.styled'

export const StartSection = () => {
  return (
    <Wrapper>
      <h2>adventure awaits</h2>
      <p>What are you waiting for?</p>
      <div className="buttons">
        <button className='btn btn-outline'>get started</button>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='blank'>
          <button className='btn btn-fill'>watch trailer <i className='far fa-play-circle' /> </button>
        </a>
      </div>
      <Slider />
    </Wrapper>
  )
}
