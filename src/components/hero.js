import React from "react";
import fotos from "../imagenes/photo-grid.png"

function Hero()
{
    return(
        <section className="div--hero">
            <img className="img--hero" src={fotos}/>
            <h1 className="h1--hero">Online Experiences</h1>
            <p className="p--hero">Join unique interactive activities led by<br></br> 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero