import React from 'react'
import './View.css'
import milk from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import orange from '../assets/images/desktop/image-gallery-orange.jpg'
import cone from '../assets/images/desktop/image-gallery-cone.jpg'
import sugar from '../assets/images/desktop/image-gallery-sugarcubes.jpg'



const View = () => {
  return (
    <div className='grid-containar'>
        
            <div className='grids-containar'>
                <img src={milk} alt=""  />
            </div>
            <div className='grids-containar'>
                <img src={orange} alt="" />
            </div>
            <div className='grids-containar'>
                <img src={cone} alt="" />
            </div>
            <div className='grids-containar'>
                <img src={sugar} alt="" />
            </div>
        </div>
    
  )
}

export default View