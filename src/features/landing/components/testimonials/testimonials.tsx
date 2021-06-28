import React from 'react';
import './testimonials.sass'
import starIcon from '../../../../assets/img/star.svg'
import testimonialsImage1 from '../../../../assets/img/testimonials-image-1.png'

export interface TestimonialsProps {
  
}
 
const Testimonials: React.SFC<TestimonialsProps> = (props) => {

  const stars = () => {
    return [1, 2, 3, 4, 5].map((e, i) => <img key={'star-' + i} className="star" src={starIcon} alt="Star" />);
  };
  return (
    <section className="wrapper-testimonials">
      <figure>
        <img src={testimonialsImage1} alt="Testimonial image" />
      </figure>
      <div className="texts">
        <div className="name">Testimonial</div>
        <div className="title">Whats Our Clients Says</div>
        <div className="stars">{stars()}</div>
        <p className="description">“My favorite type of pet has always been a dog. They’re loyal, kind, and offer endless affection. My friend Eric says, ‘The more people I meet, the more I like my dog.’ Funny thought.And Puppy club meets me with my dog”</p>
        <span className="person-name">Adelle Petricia</span>
        <span className="person-appointment">CEO & Founder @ Ballet</span>
      </div>
    </section>
  );
}
 
export default React.memo(Testimonials);