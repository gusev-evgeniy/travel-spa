import { Link } from 'react-router-dom'
import { Wrapper } from './StartSection.styled'

export const StartSection = () => {
  return (
    <Wrapper>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h2>adventure awaits</h2>
      <p>What are you waiting for?</p>
      <div className="buttons">
        <button className='btn-outline'>get started</button>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
          <button className='btn-fill'>watch trailer <i className='far fa-play-circle' /> </button>
        </a>
      </div>
    </Wrapper>
  )
}
