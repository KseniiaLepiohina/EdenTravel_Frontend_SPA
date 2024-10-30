import React, { useState } from "react";
import left from '../assets/Arrowleft.svg';
import right from '../assets/Arrowright.svg';
import gallery from '../Gallery.json'



export default function Gallery() {

const [slide,setSlide] = useState(0);


const handlerPrevStory = () => {
   setSlide((prev)=> (prev === 0 ? gallery.destination.length - 1    : prev - 1));

};
const handlerNextStory = () => {
  setSlide((prev)=> (prev ===  gallery.destination.length - 1 ? 0  : prev + 1))
};
/*Gallery show */

  return ( 
  <section className="testimonials">
    <section className="arrows">
      <button
        onClick={handlerPrevStory}
        className="left">
          <img src={left} alt="previous testimonial"/>
      </button>
    </section>

      <section className="testimonail_content">
        {gallery.destination.map((gallery_item)=> (
        <section 
          className="gallery_country"
          key={gallery_item.id}
          style={{ backgroundImage: `url(${gallery_item.img})`,
          backgroundSize:"cover",
          transform: `translateX(-${slide * 20}vw)` 
          }}
        >
            <h1>{gallery_item.city}</h1>
            <section className="gallery_item">
              <img  src={gallery_item.flag} alt={gallery_item.city}/>
              <h4>
                <strong>{gallery_item.country}</strong>
              </h4>
            </section>
            <section className="gallery_item">
              <p> Price starts at </p>
            <h3>€ {gallery_item.price}</h3>
            </section>
              <img  className="gallery_item_stars" src={gallery_item.stars} alt="country_raits"/>
        </section>
      ))}
      </section>
        
            <section className="arrows">    
                <button
                 className="right"
                 onClick={handlerNextStory}
                 >
                  <img src={right} alt="next testimonial"/>
                </button>
            </section>
  </section> 
        
);
}
