import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Testimonials = () => {
  return (
    <div className="section testimonials" id="section-testimonials">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Reviews</div>
          <div className="subtitle">What clients say</div>
        </div>
        {/* testimonials items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.testimonials}>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/rev1.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">sonyamorales</div>
                  <div className="company">Australia</div>
                </div>
                <div className="text">
                I have done a number of jobs with Polash and I find him very effective 
                and fast. He knows what he is doing and he always delivers above and
                 beyond. Would highly recommend him.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/rev1.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">ayodeleo73</div>
                  <div className="company">United States</div>
                </div>
                <div className="text">
                The seller did an excellent job. He was very patient and 
                understanding in getting the work completed. I will highly recommend 
                him for future Shopify store development work.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/rev1.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">evann971</div>
                  <div className="company">France</div>
                </div>
                <div className="text">
                I worked with piarujjaman on a Shopify website and 
                I was EXTREMLY impressed with his work. He is really 
                professional, responsive and Skilled. Communication was easy 
                and they delivered the project on time and within budget. I HIGHLY 
                recommend piarujjaman for anyone looking for a Shopify website creator.
                 5 out of 5 ! i'll definitly work again with him
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/rev1.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">travisristig</div>
                  <div className="company">United States</div>
                </div>
                <div className="text">
                Excellent communication. Over delivered as far as time
                 deadline. Open and willing to make changes to satisfy 
                 the customer. Well Done. Thank you so much!
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="testimonials_prev prev fas fa-chevron-left" />
            <span className="testimonials_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
