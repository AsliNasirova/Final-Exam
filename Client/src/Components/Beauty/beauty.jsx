import React from 'react'
import './beauty.scss'

const Beauty = () => {
  return (
    <section id='beauty'>

    <div className='beautyArea'>
    <div className="rightBeautyArea">
        <div className="cardRIGHTBEauty">
        <div className="imageBEauty"><img src="https://preview.colorlib.com/theme/fashe/images/banner-08.jpg" alt="" /></div>
        <div className="textRightBeauty">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <a href="View Coollection">View Coolection</a>
        </div>
        </div>
    </div>
    <div className="leftBEautyArea">
        <div className="iamgeBEautyLeft">
            <img src="https://preview.colorlib.com/theme/fashe/images/shop-item-09.jpg" alt="" />
        </div>
        <div className="textLeftBeauty">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>$15.90</p>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Beauty