import React, { useState } from "react";
import stories from '../testimonial.json';
import left from '../assets/Arrowleft.svg';
import right from '../assets/Arrowright.svg';

export default function Testimonial () {

const [slide,setSlide] = useState(0);


const handlerPrevStory = () => {
   setSlide((prev)=> (prev === 0 ? stories.length - 1    : prev - 1));

};
const handlerNextStory = () => {
  setSlide((prev)=> (prev ===  stories.length - 1 ? 0  : prev + 1))
};



    return (
        <>
        <section className="testimonials">
            <section className="arrows">
                <button
                onClick={handlerPrevStory}
                className="left">
                    <img src={left} alt="previous testimonial"/>
                </button>
            </section>


                    <section className="testimonail_content">
                        {stories.map((story, index) => (
                            <section 
                                className="testimonails_container"
                                style={{ transform: `translateX(-${slide * 20}vw)` }}

                                key={story.id}>
                                <img src={story.img} alt="user" />
                                <p>{story.quote}</p>
                                <p>{story.stars}</p>
                                <p>{story.name}</p>
                                <p>{story.position}</p>
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

            </>
    );
}






