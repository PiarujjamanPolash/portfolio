import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Education = () => {
  return (
    <div className="section resume" id="section-education">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Education</div>
          <div className="subtitle">Studied at</div>
        </div>
        {/* resume items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.education}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">2019-2024</div>
                <div className="name">
                  Begum Rokeya University <br />
                  Rangpur, Bangladesh
                </div>
                <div className="single-post-text">
                  <p>
                    Completed my graduation in Computer Science and Engineering as a major. 
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2016-2017</div>
                <div className="name">
                  Rajshahi Govt. City College <br />
                  Rajshahi, Bangladesh
                </div>
                <div className="single-post-text">
                  <p>
                    Completed my Higher Secondary education here. A Section, Science Major.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2013-2015</div>
                <div className="name">
                  Chaipara High School <br />
                  Bagmara, Rajshahi, Bangladesh
                </div>
                <div className="single-post-text">
                  <p>
                    Completed my Secondary education here. Science Major. 
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2021-2022</div>
                <div className="name">
                  Programming Hero <br />
                  Online Platform
                </div>
                <div className="single-post-text">
                  <p>
                    Got training on HTML, CSS, Javascript, ReactJs, NextJs and other frontend technologies.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="education_prev prev fas fa-chevron-left" />
            <span className="education_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
