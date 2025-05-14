// @ts-nocheck
import React from "react";
import "./PartnersSection.css";

const partners = [
  "gq.png",
  "marie-claire-logo-png-transparent.png",
  "esquire-logo-png-transparent.png",
  "ELLE-logo-768x432.png",
  "allure.png",
  "vice-logo-transparent.png",
];

const PartnersSection = () => (
  <section className="partners-section">
    <div className="container">
      <div className="partners-row">
        {partners.map((img) => (
          <img
            key={img}
            src={`/partners/${img}`}
            alt="partner logo"
            className="partner-logo"
          />
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
