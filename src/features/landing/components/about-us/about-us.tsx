import React from 'react';
import './about-us.sass'
import arrowIcon from '../../../../assets/img/simple-arrow-icon-w.svg'
import mainImage from '../../../../assets/img/hat-dog.png'

export interface AboutUsProps {
  
}
 
const AboutUs: React.FC<AboutUsProps> = (props) => {
  return (
    <section className="wrapper-about-us">
      <figure>
        <img src={mainImage} alt="Main hat dog image" />
      </figure>
      <div className="texts">
        <h2 className="title">Animals have come to mean so much in our lives</h2>
        <p className="description">Happiness is a warm puppy. Money can buy you a fine dog, but only love can make him wag his tail. Dogs are not our whole life, but they make our lives whole.A dog is the only thing on earth that loves you more than he loves himself.</p>
        <div className="cta">Learn more <img src={arrowIcon} alt="Arrow rigth" /> </div>
      </div>
    </section>
  );
}
 
export default React.memo(AboutUs);