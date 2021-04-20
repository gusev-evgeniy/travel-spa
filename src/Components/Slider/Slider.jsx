import React, { useEffect, useRef, useState } from 'react'
import { SliderWrapper } from './Slider.styles'

const IMAGES = [
  { id: 1, image: "/images/img-1.jpg" },
  { id: 2, image: "/images/img-2.jpg" },
  { id: 3, image: "/images/img-3.jpg" },
  { id: 4, image: "/images/img-4.jpg" },
  { id: 5, image: "/images/img-5.jpg" },
  { id: 6, image: "/images/img-6.jpg" },
  { id: 7, image: "/images/img-8.jpg" },
]

export const Slider = () => {
  const [currentImage, setCurrentImage] = useState(1)

  const nextImage = () => {
    if (currentImage === IMAGES.length) setCurrentImage(1)
    else setCurrentImage(currentImage + 1)
  }
  const autoPlayRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextImage
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const interval = setInterval(play, 5000)
    return () => clearInterval(interval)
  }, [])

  IMAGES.map(({ image, id }) => {
    return (
      <SliderWrapper
        className={id === currentImage ? 'slide active' : 'slide'}
        key={id}
      >
        {id === currentImage && (
          <img src={image} alt='travel' className='image' />
        )}
      </SliderWrapper>
    );
  })

  return (<>
    <SliderWrapper>
      {IMAGES.map(({ image, id }) => {
        return (
          <div
            className={id === currentImage ? 'slide active' : 'slide'}
            key={id}
          >
            {id === currentImage && (
              <img src={image} alt='travel' className='image' />
            )}
          </div>
        );
      })
      }
    </SliderWrapper>
  </>
  )
}
