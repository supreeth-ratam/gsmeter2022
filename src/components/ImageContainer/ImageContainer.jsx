import React from 'react'
import './ImageContainer.css'

function ImageContainer({ name,imgsrc,por,manlink}) {
  return (
      <div className='parent-image-container'>
      
      <div className='image-container'>
          <img src={imgsrc} alt="" className="image-container__image-box" />
          <div className="image_container__text-box">
              <p className='main-text'>
                  <span className='main-text--name'>{name}</span>
                  <span className='main-text--post'>{por}</span>
              </p>
              <a href={manlink} className='main-text--link'>View Manifesto <i className="uil uil-arrow-right"></i></a>
          </div>
      </div>
      <img src="/png-raw.png" alt="" className='image-chart'/>
      </div>
  )
}

export default ImageContainer