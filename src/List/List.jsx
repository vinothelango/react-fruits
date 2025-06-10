import React from 'react'
import firstimg from '../assets/images/desktop/image-transform.jpg'
import secimage from '../assets/images/desktop/image-stand-out.jpg'
import theimage from '../assets/images/desktop/image-graphic-design.jpg'
import fourthimg from '../assets/images/desktop/image-photography.jpg'
import './List.css'

const List = () => {
  return (
    <div className='containar'>
        <div className='card-containar'>
            <div className='card-List'>
                <div className='textitems'>
                <h1>Transfrom your brand</h1>
                <p>We are a full-services creatives agencey specliaizling helping brand grow fast.Engage your client thought compleing visual that do more of the marketing for you</p>
                <h3>Learn More</h3>
                </div>
            </div>
            <div className='card-List'>
            <div className='card-List-1'>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsum.</p> */}
            </div>
            </div>
            <div className='card-List'>
                <div className='card-List-2'>
                
                </div>
            </div>
             <div className='card-List'>
                <div className='textitems'>
                <h1>Transfrom your brand</h1>
                <p>We are a full-services creatives agencey specliaizling helping brand grow fast.Engage your client thought compleing visual that do more of the marketing for you</p>
                <h3>Learn More</h3>
                </div>
            </div>
            <div className='card-List'>
                <div className='card-List-3'>
                    <div className='textview1'>
                    <h1>Graphic Design</h1>
                <p>Temporibus soluta ullam, pariatur eaque nobis corporis est, assumenda voluptatem in officiis molestiae maxime! Debitis non placeat qui corporis, nemo atque cum!</p>
                
                </div>
                </div>
            </div>
            <div className='card-List'>
                <div className='card-List-4'>
                    <div className='textview'>
                    <h1>Photography</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequuntur repellendus deserunt possimus vel, pariatur mollitia voluptates velit. Eos, nemo.</p>
                </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default List