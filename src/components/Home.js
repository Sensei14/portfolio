import React from "react";
import "../styles/home.css";
import Wrapper from "./Wrapper";
import Photo from "../images/zdj.png";
import html from "../images/icons/html.png";
import react from "../images/icons/react.png";
import nodejs from "../images/icons/nodejs.png";
import mongodb from "../images/icons/mongodb.png";
import mysql from "../images/icons/mysql.png";
import bootstrap from "../images/icons/bootstrap.png";

const Home = () => {
  return (
    <Wrapper>
      <div className="home">
        <div>
          <div className="about">
            <p className="title">O mnie</p>
            <div>
              <img src={Photo} alt="zdjecie" width="220px" />
              <p>
                Jestem studentem 3 roku informatyki. Szukam pierwszego
                doświadczenia zawodowego jako programista. Od pewnego czasu
                pogłębiam swoją wiedzę w tej dziedzinie tworząc własne projekty.
                Jestem osobą pracowitą, punktualną, szczerą. Bardzo lubię to co
                robię i staram się wykorzysytwać wolny czas, doskonaląc moje
                umiejętności. Moje zainteresowania to programowanie, gry
                komputerowe i piłka nożna.
              </p>
            </div>
          </div>
          <div className="tech">
            <p className="title"> Umiejętności</p>
            <img src={html} alt="html" width="175px" />
            <img src={react} alt="html" width="175px" />
            <img src={nodejs} alt="html" width="175px" />
            <img src={mongodb} alt="html" width="175px" />
            <img src={mysql} alt="html" width="175px" />
            <img src={bootstrap} alt="html" width="175px" />
          </div>
          <div className="contact">
            <p className="title">Kontakt</p>
            <div>
              <span>Adres Email: </span>{" "}
              <span> karol.pacocha97@gmail.com </span>
              <span>karox1241@wp.pl</span>
            </div>

            <div>
              <span> Github:</span>
              <span>
                <a href="https://github.com/Sensei14" target="_blank">
                  https://github.com/Sensei14
                </a>
              </span>
            </div>
            <div>
              <span>Telefon: </span> <span> 880 977 167 </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
