// All from Swipe.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../styles/BurgerSlider.css";
import { Link } from "react-router-dom";

import Slide1 from "../assets/burger_slide1.jpg";
import Slide2 from "../assets/burger_slide2.jpg";
import Slide3 from "../assets/burger_slide3.jpg";
import { lazy } from "react";

export default function BurgerSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, lazy]}

      
      spaceBetween={50}
      slidesPerView={1}
      navigation
      //   pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-container">
            <img
              src={slide.burgerImage}
              alt={slide.burgerName}
              height="500px"
            />
            <div className="slide-text">
              <h3>{slide.burgerTag}</h3>
              <h1>
                {slide.burgerName} <br /> <span>{slide.burgerSpan}</span>
              </h1>
              <p>{slide.burgerText}</p>
              <Link to={``}>
                <button className="slide-btn">{slide.order}</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* ... */}
    </Swiper>
  );
}

const slides = [
  {
    id: "1",
    burgerImage: `${Slide1}`,
    burgerTag: "ONLY $4.99",
    burgerName: "QUINOA & BLACK",
    burgerSpan: "BEAN BURGER",
    burgerText:
      "We can’t think of a better way to celebrate summer than with these omg-worthy hamburgers",
    order: "ORDER NOW",
  },
  {
    id: "2",
    burgerImage: `${Slide2}`,
    burgerTag: "GREAT CHOICE",
    burgerName: "FARMHOUSE BURGER",
    burgerText:
      "This burger’s name explains itself. Of course, you can also top it with crisp lettuce, tomatoes and anything else.",
    order: "ORDER NOW",
  },
  {
    id: "1",
    burgerImage: `${Slide3}`,
    burgerTag: "NEW",
    burgerName: "STANDARD",
    burgerSpan: "CEASER SALAD",
    burgerText:
      "A great Caesar salad gets its swagger from a great dressing whose recipe we use for decades.",
    order: "ORDER NOW",
  },
];
