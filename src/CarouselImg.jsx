import React from 'react'
import { Link } from 'react-router-dom'

export const CarouselImg = ({ img_url }) => {
  return (
    <div className='carouselimg-div'>
        <Link to={img_url} target="_blank" className="img-link"><img className='carouselimg' src={img_url} /></Link>
    </div>
  )
}
