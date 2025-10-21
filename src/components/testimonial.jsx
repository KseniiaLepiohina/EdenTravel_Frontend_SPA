import React, { useState,useEffect,useRef } from "react";
import stories from "../DB/testimonial.json";
import left from "../assets/Arrowleft.svg";
import right from "../assets/Arrowright.svg";

export default function Testimonial() {
  const [slide, setSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const carouselRef = useRef(null);
  
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  const handlerPrevStory = () => {
    setSlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };
  const handlerNextStory = () => {
    setSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };
  const handleScroll = () => {
    const scrollLeft = carouselRef.current.scrollLeft;
    const width = carouselRef.current.offsetWidth;
    const currentIndex = Math.round(scrollLeft / width);
    setSlide(currentIndex);
  };
  
  const scrollToSlide = (index) => {
    if (isMobile) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    } else {
      setSlide(index);
    }
  };

  return (
    <>
      <section className="testimonials">
        <section className="arrows">
          <button onClick={handlerPrevStory} className="left ">
            <img src={left} alt="previous testimonial" />
          </button>
          <button className="right" onClick={handlerNextStory}>
            <img src={right} alt="next testimonial" />
          </button>
        </section>
        <section 
        className="testimonail_content"
         ref={carouselRef}
  onScroll={isMobile ? handleScroll : undefined}
        >
          {stories.map((story, index) => (
            <section
              className="testimonails_container"
              style={{ transform: `translateX(-${slide * 20}vw)` }}
              key={story.id}
            >
              <img src={story.img} alt="user" />
              <p>{story.quote}</p>
              <img src={story.imgStars} alt="reit"/>
              <p>{story.stars}</p>
              <h4>{story.name}</h4>
              <p color="#AAAAAA">{story.position}</p>
            </section>
          ))}
        </section>
      </section>

      <section className="dots">
        {stories.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === slide ? "active" : ""}`}
             onClick={() => scrollToSlide(index)}
          />
        ))}
      </section>
    </>
  );
}