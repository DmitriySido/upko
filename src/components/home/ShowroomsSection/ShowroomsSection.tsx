import { useState } from "react";
import "./ShowroomsSection.css";

const showrooms = [
  {
    city: "Showroom in Hamburg, Germany",
    img: "/images/showroom-1.webp",
    hover: "/images/model-2_grande.webp",
    hoverTitle: "Showroom in Hamburg, Germany",
    hoverDesc:
      "Showroom in Hamburg, Germany Boutique Bizarre, located in Hambur...",
  },
  {
    city: "Showroom in Paris-France",
    img: "/images/showroom-2.jpg",
    hover: "/images/upko-14-2.jpg",
    hoverTitle: "Showroom in Paris-France",
    hoverDesc:
      "Brigade Mondaine isn't just an e-commerce site where you can buy your favori...",
  },
  {
    city: "Showroom in Karlsruhe-Germany",
    img: "/images/showroom-3.jpg",
    hover: "/images/wechatimg258.jpg",
    hoverTitle: "Showroom in Karlsruhe-Germany",
    hoverDesc: `Baumwollseil.de" is one of Germany's leading kinky shops. The owner couple, Sabine Kraußer and Michael Pohl, along...`,
  },
  {
    city: "Showroom in Venice, Italy",
    img: "/images/showroom-4.jpg",
    hover: "/images/1_2b0f5d8f.jpg",
    hoverTitle: "Showroom in Venice, Italy",
    hoverDesc:
      "De Sade Venice is the first sensual avant-garde concept shop in Italy. We are a team that has made worldwide resear...",
  },
];

export default function ShowroomsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="showrooms-section">
      <div className="container">
        <div className="sh-title">
          <h2>GLOBAL SHOWROOMS</h2>
          <div className="sh-divider" />
        </div>
        <div className="sh-grid">
          {showrooms.map((s, i) => (
            <div className="sh-card" key={i}>
              <div
                className="sh-img-wrap"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={s.img}
                  alt={s.city}
                  className={`sh-img sh-img-fade ${
                    hovered === i ? "sh-img-fade-out" : "sh-img-fade-in"
                  }`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
                {hovered === i && (
                  <div
                    className="sh-img sh-img-fade sh-img-fade-in sh-img-zoom-inner"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#fff",
                      color: "#222",
                      textAlign: "center",
                      padding: 24,
                      flexDirection: "column",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        margin: 0,
                        marginBottom: 12,
                        textAlign: "left",
                      }}
                    >
                      {s.hoverTitle}
                    </h3>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#888",
                        margin: 0,
                        textAlign: "left",
                      }}
                    >
                      {s.hoverDesc}
                    </p>
                  </div>
                )}
              </div>
              <h3 className="sh-name">{s.city}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
