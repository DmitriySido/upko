// @ts-nocheck
import React from "react";
import "./ThreeImagesSection.css";

const images = [
  {
    src: "/images/WechatIMG39.jpg",
  },
  {
    src: "/images/WechatIMG2181.jpg",
  },
  {
    src: "/images/WechatIMG38.jpg",
  },
];

const ThreeImagesSection = () => (
  <section className="three-images-section">
    <div className="container">
      <div className="images-row">
        {images.map(({ src }, i) => (
          <a key={src} className="image-link" href="#">
            <img src={src} alt="" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeImagesSection;
