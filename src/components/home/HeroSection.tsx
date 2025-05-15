import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import heroImg from '../../assets/hero.jpg';
import heroImg2 from '../../assets/hero2.jpg';
import heroImg3 from '../../assets/hero3.jpg';
// Можно добавить ещё картинки для слайдов

const slides = [
  {
    img: heroImg,
    alt: 'Hero',
    // Можно добавить title, subtitle, button и т.д.
  },
  {
    img: heroImg2,
    alt: 'Hero 2',
  },
  {
    img: heroImg3,
    alt: 'Hero 3',
  },
  // { img: anotherImg, alt: '...' },
];

const containerStyle: React.CSSProperties = {
  width: '100%',
  aspectRatio: '2.4/1', // ~1920/800, как на оригинале
  minHeight: 320,
  maxHeight: 900,
  position: 'relative',
  overflow: 'hidden',
  background: '#eee',
  display: 'flex',
};

// Мобильная адаптация через media query
const styleTag = `
@media (max-width: 900px) {
  .hero-slider-container {
    aspect-ratio: 1.2/1 !important;
    min-height: 220px !important;
    max-height: 500px !important;
  }
}
.hero-slider-container .swiper-button-next,
.hero-slider-container .swiper-button-prev {
  opacity: 0;
  transition: opacity 0.2s;
  color: #fff;
  background: #222;
  border-radius: 4px;
  width: 48px;
  height: 48px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  box-shadow: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-slider-container:hover .swiper-button-next,
.hero-slider-container:hover .swiper-button-prev {
  opacity: 1;
}
.hero-slider-container .swiper-button-next:hover,
.hero-slider-container .swiper-button-prev:hover {
  background: #333;
}
.hero-slider-container .swiper-button-next:after,
.hero-slider-container .swiper-button-prev:after {
  font-size: 24px;
  color: #fff;
}
`;

const HeroSection: React.FC = () => (
  <section style={{ width: '100%', background: '#fff', padding: 0, margin: 0 }}>
    <style>{styleTag}</style>
    <div className="hero-slider-container" style={containerStyle}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <img
              src={slide.img}
              alt={slide.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default HeroSection; 