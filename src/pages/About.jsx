import React from "react";
import "./About.css";
import plantPic from "../../assets/plant.png";
import { Button } from "@dnb/eufemia";
import "@dnb/eufemia/style/basis";
import "@dnb/eufemia/style/themes/theme-ui/ui-theme-basis.css";
import "@dnb/eufemia/style/themes/theme-ui/ui-theme-components.css";
import { check as checkIcon } from "@dnb/eufemia/icons";
import { Icon } from "@dnb/eufemia";

const About = () => {
  return (
    <div class="about-wrapper">
      <div class="text-section">
        <h1 class="header">Finn pensjon du kan flytte til oss</h1>
        <ul class="list">
          <li className="list-item">
            <Icon icon={checkIcon} size="auto" aria-hidden />{" "}
            <span className="list-item-text">Pensjonen forvaltes i fond</span>
          </li>
          <li class="list-item">
            <Icon icon={checkIcon} size="auto" aria-hidden />
            <span className="list-item-text"> Velg Pensjonsprofil</span>
          </li>
          <li class="list-item">
            <Icon icon={checkIcon} size="auto" aria-hidden />
            <span className="list-item-text">
              {" "}
              Full oversikt over pensjon og sparing
            </span>
          </li>
          <li class="list-item">
            <Icon icon={checkIcon} size="auto" aria-hidden />
            <span className="list-item-text"> Gratis pensjonsrådgivning</span>
          </li>
        </ul>
        <div class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quae
          ipsa, delectus cupiditate, possimus necessitatibus error doloremque
          sequi quisquam architecto rem dolores. Voluptatem, totam velit.
        </div>
        <div class="btn-section">
          <Button
            text="Les mer om pensjonskonto"
            on_click={() => {
              console.log("on_click");
            }}
            icon="chevron_right"
            left
          />
          <Button
            text="Les mer om pensjonskonto"
            on_click={() => {
              console.log("on_click");
            }}
            icon="chevron_right"
            variant="secondary"
            left
          />
        </div>
      </div>
      <div class="img-container">
        <img src={plantPic} alt="plant picture" />
      </div>
    </div>
  );
};

export default About;
