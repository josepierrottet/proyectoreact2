import React from "react";
import logoairbnb from "../imagenes/airbnb-logo.png"
import "../archivos_css/estilos.css"

function BarraDeNavegacion()
{
    return(

        <nav className="logoairbnb">

            <img  src={logoairbnb} />
        </nav>
    )
}

export default (BarraDeNavegacion)