import React from 'react'
import './professional-services.sass'
import arrowImage from '../../../../assets/img/arrow-icon.svg'
import simpleArrowImage from '../../../../assets/img/simple-arrow-icon-b.svg'
import trainingDogIcon from '../../../../assets/img/healthcare-icon.svg'

export interface ProfessionalServicesProps {
  
}
 
const ProfessionalServices: React.FC<ProfessionalServicesProps> = (props) => {

  var services: { name: string, alt: string, icon: string, }[] = [
    {
      name: 'Dog training',
      alt: 'Dog training icon',
      icon: trainingDogIcon
    },
    {
      name: 'Dog training',
      alt: 'Dog training icon',
      icon: trainingDogIcon
    },
    {
      name: 'Dog training',
      alt: 'Dog training icon',
      icon: trainingDogIcon
    },
    {
      name: 'Dog training',
      alt: 'Dog training icon',
      icon: trainingDogIcon
    },
    {
      name: 'Dog training',
      alt: 'Dog training icon',
      icon: trainingDogIcon
    },
    {
      name: 'Dog training',
      alt: 'Dog training icon',
      icon: trainingDogIcon
    },
    {
      name: 'Dog training',
      alt: 'Dog training icon',
      icon: trainingDogIcon
    },
    {
      name: 'Dog training',
      alt: 'Dog training icon',
      icon: trainingDogIcon
    },
    {
      name: 'Dog training',
      alt: 'Dog training icon',
      icon: trainingDogIcon
    },
    {
      name: 'Dog training',
      alt: 'Dog training icon',
      icon: trainingDogIcon
    },
  ];

  const petServices = () => {
    return services.map((s, i) => 
      <li key={'pet-service-' + i}>
        <div className="item">
          <img className="main-icon" src={s.icon} alt={s.alt} />
          <span className="name">{s.name}</span>
          <img className="arrow" src={simpleArrowImage} alt="Arrow" />
        </div>
      </li>
    );
  }

  return (
    <section className="wrapper-professional-services">
      <div className="head">
        <div className="name">Some pups professionals for you</div>
        <div className="arrows">
          <img className="left" src={arrowImage} alt="Arrow left" />
          <img className="right" src={arrowImage} alt="Arrow right" />
        </div>
      </div>
      <ul className="items">{petServices()}</ul>
    </section>
  );
}
 
export default React.memo(ProfessionalServices);