import React from "react";
import fondo from "./images/fondo.jpg";
import galeria1 from "./images/galeria1.jpg";
import galeria2 from "./images/galeria2.jpg";
import "./Home.css";

const Home = () => {
    return (<div>
            <div className="home-container">
                <img src={fondo} alt="Fondo" className="fondo-image" />
            </div>
            <div className="galeria-container">
                <img src={galeria1} alt="Galería 1" className="galeria-image" />
                <img src={galeria2} alt="Galería 2" className="galeria-image" />
            </div>
        </div >
    );
};

export default Home;