import React from 'react';
import './footer.sass'
import facebookIcon from '../../../../assets/img/facebook-logo.svg'
import instagramIcon from '../../../../assets/img/instagram-logo.svg'

export interface FooterProps {
  
}
 
const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="wrapper-footer">
      <div className="title">Wants To Adopt A Dog</div>
      <div className="description">For Schedule a Adoption</div>
      <form className="form">
        <input type="text" name="email" id="email" placeholder="Type your email"/>
        <button type="submit">Send now</button>
      </form>
      <div className="info">
        <div className="follow-us">
          <div className="name">Follow us</div>
          <div className="icons">
            <div className="icon">
              <img src={facebookIcon} alt="facebook" />
            </div>
            <div className="icon">
              <img src={instagramIcon} alt="instagram" />
            </div>
          </div>
        </div>
        <div className="address">
          <div className="name">Boarding & Daycare</div>
          <div className="phone">(204) 696 2958</div>
          <div className="address">145 Street view Ave Mokiavalle , NC 27896</div>
        </div>
      </div>
      <div className="rights">
        <span className="text">All rights reserved. Designed with love by Ruplo</span>
      </div>
    </footer>
  );
}
 
export default React.memo(Footer);