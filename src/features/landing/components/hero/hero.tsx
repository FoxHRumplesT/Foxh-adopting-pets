import React from 'react';
import './hero.sass'
import arrowIcon from '../../../../assets/img/simple-arrow-icon-w.svg'
import mainImage from '../../../../assets/img/glass-dog.png'

export interface HeroProps {
  
}
 
const Hero: React.FC<HeroProps> = (props) => {
  return (
    <section className="wrapper-hero">
      <div className="texts">
        <h2 className="title">Find your Smart Dog</h2>
        <p className="description">A dog is the only thing on earth that loves you more than you love yourself,when the dog looks at you, the dog is not thinking what kind of a person you are.</p>
        <div className="cta">Get started <img src={arrowIcon} alt="Arrow rigth" /> </div>
      </div>
      <figure>
        <img src={mainImage} alt="Main glass dog image" />
      </figure>
    </section>
  );
}
 
export default React.memo(Hero);