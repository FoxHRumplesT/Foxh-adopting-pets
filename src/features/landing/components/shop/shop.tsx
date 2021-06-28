import React from 'react';
import './shop.sass'
import arrowImage from '../../../../assets/img/arrow-icon.svg'
import shopFoodImage from '../../../../assets/img/shop-food-image.png'

export interface ShopProps {
  
}
 
const Shop: React.FC<ShopProps> = (props) => {

  const products = [
    {
      name: 'Pedigree classic',
      image: shopFoodImage
    },
    {
      name: 'Pedigree classic',
      image: shopFoodImage
    },
    {
      name: 'Pedigree classic',
      image: shopFoodImage
    },
    {
      name: 'Pedigree classic',
      image: shopFoodImage
    },
    {
      name: 'Pedigree classic',
      image: shopFoodImage
    },
    {
      name: 'Pedigree classic',
      image: shopFoodImage
    },
  ];

  const shopItems = () => {
    return products.map((p, i) => (
      <li key={'shop-item-' + i}>
        <div className="item">
          <figure>
            <img src={p.image} alt="Shop food image" />
          </figure>
          <div className="name">{p.name}</div>
        </div>
      </li>
    ));
  }

  return (
    <section className="wrapper-shop">
      <span className="section-name">Pets nutritions</span>
      <div className="head">
        <div className="title">Shop & save upto 10% on these top auto ship products!</div>
        <div className="see-more">See more <img src={arrowImage} alt="Arrow" /></div>
      </div>
      <ul className="items">
        {shopItems()}
      </ul>
    </section>
  );
}
 
export default React.memo(Shop);