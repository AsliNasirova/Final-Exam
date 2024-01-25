import React from 'react'
import './card.scss'

const Card = ({image,title,price,id}) => {

  return (
    <div className='cardArea'>
        <div className="cardBox">
            <div className="imageCard">
                <img src={image} alt="" />
            </div>
            <div className="textCard">
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
            
        </div>
    </div>
  )
}

export default Card