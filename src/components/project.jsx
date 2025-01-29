import "./project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import bloodbank from "../assets/bloodbank.jpg";
import snake from "../assets/snake.jpg";
import quiz from "../assets/quiz.jpg";
import alarm from "../assets/alarm.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const project = (props) => {
  function downward() {
    location.href = "./#contact";
  }
  const data = [
    {
      image: bloodbank,
      title: "Smart Blood Bank",
    },
    {
      image: snake,
      title: "Snake Game",
    },
    {
      image: quiz,
      title: "Quiz Game",
    },
    {
      image: alarm,
      title: "Alarm Clock",
    },
  ];
  return (
    <div id="project">
      <p>Browse My Recent</p>
      <h1>Projects</h1>
      <div className="project-section">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="swiper"
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.image} className="swiper-slide">
              <img
                src={slide.image}
                alt="smartBloodbank"
                className="projectImage"
              />
              <h2>{slide.title}</h2>
              <div className="project-btns">
                <button className="project-btn">
                  <a href="#">GitHub</a>
                </button>

                <button className="project-btn">
                  <a href="#">Live Demo</a>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <img
        src={props.arr}
        alt="Arrow icon"
        className="arrow"
        onClick={downward}
      />
    </div>
  );
};

export default project;
