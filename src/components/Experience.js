import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Experience = () => {
  return (
    <div className="section resume" id="section-experience">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Experience</div>
          <div className="subtitle">Working with</div>
        </div>
        {/* resume items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.experience}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">Present</div>
                <div className="name">
                  Brain Gig LLC <br />
                  USA
                </div>
                <div className="single-post-text">
                  <p>
                    Working remotely as a Shopify Developer and eCommerce Specialist in Brain Gig LLC.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2022-2024</div>
                <div className="name">
                  What's Up SCV <br />
                  USA 
                </div>
                <div className="single-post-text">
                  <p>
                    Had a great time working as a Lead WordPress Developer in WhatsUp SCV, Santa Clarita. 
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="experience_prev prev fas fa-chevron-left" />
            <span className="experience_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
