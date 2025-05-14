import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProductItemSwiper.css";
import {productImagesConfig} from "../../../data/productImagesConfig";
import {ProductData} from "../../../utils/getProductData";

interface ProductItemSwiperProps {
  productData: ProductData;
}

const ProductItemSwiper: React.FC<ProductItemSwiperProps> = ({productData}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const getProductImages = (index: number) => {
    const config = productImagesConfig[index];
    if (!config) {
      console.error(`No images config found for product ${index}`);
      return [];
    }
    return config.images.map((name) => `/product-images-all/${index}/${name}`);
  };

  const images = getProductImages(productData.index);

  if (images.length === 0) {
    return <div>No images found for this product</div>;
  }

  return (
    <div className="product-item__gallery product-item__container swiper-and-info-section">
      <div className="product-item__swiper" style={{position: "relative"}}>
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation={{
            prevEl: ".swiper-button-custom.swiper-button-prev",
            nextEl: ".swiper-button-custom.swiper-button-next",
          }}
          onInit={(swiper) => {
            // @ts-expect-error Swiper types are incomplete for navigation params
            swiper.params.navigation.prevEl =
              ".swiper-button-custom.swiper-button-prev";
            // @ts-expect-error Swiper types are incomplete for navigation params
            swiper.params.navigation.nextEl =
              ".swiper-button-custom.swiper-button-next";
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          loop
          spaceBetween={0}
          slidesPerView={1}
          thumbs={{swiper: thumbsSwiper}}
          className="product-item__main-swiper"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`${productData.title} view ${i + 1}`}
                className="product-item__img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom SVG navigation arrows */}
        <button
          type="button"
          className="swiper-button-custom swiper-button-prev"
          aria-label="Previous"
        >
          <svg
            className="flickityt4s-button-icon"
            viewBox="0 0 100 100"
            width="28"
            height="28"
          >
            <path
              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
              className="arrow"
              fill="#222"
            />
          </svg>
        </button>
        <button
          type="button"
          className="swiper-button-custom swiper-button-next"
          aria-label="Next"
        >
          <svg
            className="flickityt4s-button-icon"
            viewBox="0 0 100 100"
            width="28"
            height="28"
          >
            <path
              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
              className="arrow"
              fill="#222"
              transform="translate(100, 100) rotate(180)"
            />
          </svg>
        </button>
      </div>
      {/* Thumbnails Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="product-item__thumbs-swiper"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`${productData.title} thumbnail ${i + 1}`}
              className="product-item__thumb"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductItemSwiper;
