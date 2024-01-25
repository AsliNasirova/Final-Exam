import React from 'react'
import './footer.scss'
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    
    <div className='footer'>
        <div className="partFooter">
          <div className="firstPart">
          <div className="textFooter">
            <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="iconFooter">
          <FaTwitter />
          <FaTwitter />
          <FaTwitter />
          <FaTwitter />
          <FaTwitter />
          </div>
          </div>
          <div className="middlePart">
            <h3>Lorem</h3>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </div>
          <div className="middlePart">
            <h3>Lorem</h3>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </div>
          <div className="middlePart">
            <h3>Lorem</h3>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </div>

          <div className="middlePart">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, id.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, pariatur.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, ad!</p>
            <div className="subsFooterBtn"><button className='subc'>Subscribe</button></div>
          </div>
        </div>
    </div>
  )
}

export default Footer