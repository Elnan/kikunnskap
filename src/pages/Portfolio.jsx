import React, { useState } from "react";
import "./Portfolio.css";
import beach from "../../assets/landscapes/beach.jpg";
import desert from "../../assets/landscapes/desert.jpg";
import fjord from "../../assets/landscapes/fjord.jpg";
import forest from "../../assets/landscapes/forest.jpg";
import tundra from "../../assets/landscapes/tundra.jpg";

const Portfolio = () => {
  const images = {
    beach: beach,
    desert: desert,
    fjord: fjord,
    forest: forest,
    tundra: tundra,
  };

  const [expandedFrame, setExpandedFrame] = useState(null);
  const handleExpand = (name) => {
    setExpandedFrame(expandedFrame === name ? null : name);
  };

  const handleOnMouseMove = (e) => {
    const cards = document.getElementsByClassName("card");

    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const handleOnClick = (index) => {
    const colorVariable = `--card${index + 1}-color`;
    const selectedCard = document.getElementsByClassName("card")[index];

    // Setter fargen
    selectedCard.style.setProperty(
      "--card-gradient-color",
      `var(${colorVariable})`
    );

    // Tilbakestill fargen etter 600ms
    setTimeout(() => {
      selectedCard.style.setProperty("--card-gradient-color", "transparent");
    }, 600);
  };

  return (
    <div className="portfolio-wrapper">
      <section className="image-section">
        {["beach", "desert", "fjord", "forest", "tundra"].map((name) => (
          <div
            key={name}
            className={`frame ${name} ${
              expandedFrame === name ? "expanded" : ""
            }`}
            onClick={() => handleExpand(name)}
          >
            <img src={images[name]} alt={name} />
          </div>
        ))}
      </section>
      <section className="card-section">
        <div id="cards" onMouseMove={handleOnMouseMove}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleOnClick(index)}
            >
              <div className="card-border"></div>
              <div className="card-content"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
