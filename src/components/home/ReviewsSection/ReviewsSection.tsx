import React, { useState } from "react";
import "./ReviewsSection.css";

const reviews = [
  {
    img: "/images/review-1.jpg", // upko05761
    title: "Simply perfect",
    text: `I want to say that its simply perfect. Great package, a sublime quality and a perfect adjustement. My submissive is really...`,
    name: "Luis Maria Valls Lopez",
  },
  {
    img: "/images/review-2.jpg", // Masterphoto_b92c532e...
    title: "It's very pretty",
    text: `As a chess fan this is quite a fun toy. Good build quality, looks beautiful.`,
    name: "Co",
  },
  {
    img: "/images/review-3.jpg", // 5_73942a84...
    title: "Such a clever piece",
    text: `I really love novel restraints, and this one is up there. It's a beautiful showpiece to decorate a pretty submissive.`,
    name: "Co",
  },
  {
    img: "/images/review-1.jpg", // upko05761
    title: "Simply perfect",
    text: `I want to say that its simply perfect. Great package, a sublime quality and a perfect adjustement. My submissive is really...`,
    name: "Luis Maria Valls Lopez",
  },
  {
    img: "/images/review-2.jpg", // Masterphoto_b92c532e...
    title: "It's very pretty",
    text: `As a chess fan this is quite a fun toy. Good build quality, looks beautiful.`,
    name: "Co",
  },
  {
    img: "/images/review-3.jpg", // 5_73942a84...
    title: "Such a clever piece",
    text: `I really love novel restraints, and this one is up there. It's a beautiful showpiece to decorate a pretty submissive.`,
    name: "Co",
  },
  // Можно добавить больше отзывов
];

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  // Responsive: 3 on desktop, 2 on tablet, 1 on mobile
  const getVisible = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1200) return 2;
    return 3;
  };
  const [visible, setVisible] = useState(getVisible());
  React.useEffect(() => {
    const onResize = () => setVisible(getVisible());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const maxIndex = Math.max(0, reviews.length - visible);
  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setIndex((i) => Math.min(maxIndex, i + 1));
  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className="reviews-title">Let customers speak for us</h2>
        <div className="reviews-stars-block">
          <div className="reviews-stars">{/* TODO: stars svg */}★★★★★</div>
          <div className="reviews-count">from 322 reviews</div>
        </div>
        <div className="reviews-slider">
          <button
            className="reviews-arrow left"
            onClick={handlePrev}
            disabled={index === 0}
          >
            &lt;
          </button>
          <div className="reviews-list">
            {reviews.slice(index, index + visible).map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-stars">★★★★★</div>
                <div className="review-content">
                  <img className="review-img" src={r.img} alt={r.name} />
                  <div>
                    <div className="review-title">{r.title}</div>
                    <div className="review-text">{r.text}</div>
                    <div className="review-name">{r.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="reviews-arrow right"
            onClick={handleNext}
            disabled={index === maxIndex}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
