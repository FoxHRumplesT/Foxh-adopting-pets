import React from 'react';
import './our-services.sass'
import arrowIcon from '../../../../assets/img/simple-arrow-icon-w.svg'
import mainImage from '../../../../assets/img/smile-dog.png'

export interface OurServicesProps {
  
}
 
const OurServices: React.FC<OurServicesProps> = (props) => {
  return (
    <section className="wrapper-our-services">
      <div className="texts">
        <h2 className="title">Money can buy you a fine dog, but only love can make him wag his tail</h2>
        <p className="description">Dogs make for the best friends, and it’s only right that we celebrate them for all the joy and love they’ve given us. Whether labeled on a dog bandana or a paw print poster, you’ll need the perfect dog quote to accompany your piece.</p>
        <div className="cta">Learn more <img src={arrowIcon} alt="Arrow rigth" /> </div>
      </div>
      <figure>
        <img src={mainImage} alt="Main smile dog image" />
      </figure>
    </section>
  );
}
 
export default React.memo(OurServices);