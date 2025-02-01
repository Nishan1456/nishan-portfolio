import "./project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import bloodbank from "../assets/bloodbank.jpg";
import kanban from "../assets/kanban.png";
import snake from "../assets/snake.jpg";
import rock from "../assets/rock.png";
import quiz from "../assets/quiz.jpg";
import alarm from "../assets/alarm.jpg";
import puzzle from "../assets/puzzle.png";
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
      git: "#",
      live: "#",
    },
    {
      image: puzzle,
      title: "Word Scramble",
      git: "https://github.com/Nishan1456/Word-Puzzle",
      live: "https://word-puzzle-seven.vercel.app/",
    },

    {
      image: kanban,
      title: "Kanban-Board",
      git: "https://github.com/Nishan1456/kanban-board",
      live: "https://kanban-board-chi-one.vercel.app/",
    },
    {
      image: rock,
      title: "Rock-Paper-Scissor",
      git: "https://github.com/Nishan1456/Rock-Paper-Scissor",
      live: "https://rock-paper-scissor-kappa-lyart.vercel.app/",
    },
    {
      image: quiz,
      title: "Quiz Game",
      git: "#",
      live: "#",
    },
    {
      image: alarm,
      title: "Alarm Clock",
      git: "https://github.com/Nishan1456/Alarm-clock",
      live: "https://alarm-clock-orcin-nu.vercel.app/",
    },
  ];
  return (
    <div id="project">
      <p>Browse My Recent</p>
      <h1>Projects</h1>
      <div className="project-section">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
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
                  <a href={slide.git} target="_blank">
                    GitHub
                  </a>
                </button>

                <button className="project-btn">
                  <a href={slide.live} target="_blank">
                    Live Demo
                  </a>
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
