import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import './header.scss'

export default function Header() {
  return (
    <>
    <section id='header'>
      <Swiper 
      loop={true}
      spacePerWiew={0}
      slidesBetween={0}
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper">
        <SwiperSlide>
            <div className="slidesHEadre">
                <div className="titleHEadre">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <div className="HeaderBtn"><button className='ShopHeadreBtn'>Shop now</button></div>
                </div>
                <div className="imageHeader">
                    <img src="https://preview.colorlib.com/theme/fashe/images/master-slide-04.jpg" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slidesHEadre">
        <div className="titleHEadre">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <div className="HeaderBtn"><button className='ShopHeadreBtn'>Shop now</button></div>
                </div>
                <div className="imageHeader">
                  <img src="https://preview.colorlib.com/theme/fashe/images/master-slide-02.jpg" alt="" />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </section>
    </>
  );
}


