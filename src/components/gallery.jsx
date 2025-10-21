import React, { useState,useEffect,useRef } from "react";

import left from "../assets/Arrowleft.svg";
import right from "../assets/Arrowright.svg";
import gallery from "../DB/Gallery.json";

export default function Gallery() {
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
    setSlide((prev) =>
      prev === 0 ? gallery.destination.length - 1 : prev - 1
    );
  };
  const handlerNextStory = () => {
    setSlide((prev) =>
      prev === gallery.destination.length - 1 ? 0 : prev + 1
    );
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


  /*Gallery show */

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <section className="testimonials">
        <section className="arrows">
          <button onClick={handlerPrevStory} className="left">
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

          style={{
            transform: `translateX(-${slide * 5}%)`,
          }}
        >
          {gallery.destination.map((gallery_item) => (
            <section
              className="gallery_country"
              key={gallery_item.id}
              style={{
                backgroundImage: `url(${gallery_item.img})`,
                backgroundSize: "cover",
                // transform: `translateX(-${slide * 20}vw)`,
                transform: `translateX(${slide})`,

              }}
            >
              <h1>{gallery_item.city}</h1>
              <section className="gallery_item">
                <img src={gallery_item.flag} alt={gallery_item.city} />
                <h4>
                  <strong>{gallery_item.country}</strong>
                </h4>
              </section>
              <section className="gallery_item">
                <p> Price starts at </p>
                <h3>€ {gallery_item.price}</h3>
              </section>
              <img
                className="gallery_item_stars"
                src={gallery_item.stars}
                alt="country_raits"
              />
            </section>
          ))}
        </section>
      </section>

      <section className="dots">
        {gallery.destination.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === slide ? "active" : ""}`}
            onClick={() => scrollToSlide(index)}

          />
        ))}
      </section>
    </section>
  );
}
