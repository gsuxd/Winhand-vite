import React from 'react';
import './Banner2.scss';
import Donaplay from './img/donaplay.png'

export default function Banner2() {
    return (
        <div className="Banner-2">
            <div className="text">
              <h1>El Objetivo de WinHand es Ayudar al Prójimo</h1>
                <div className="content">
                <p>50% Se Repartirán en Premios</p>
              <p>45% Fondo de Ayudas Sociales</p>
              <p>5% Administrativos de la Plataforma</p>
                </div>
          </div>
          <img src={Donaplay} alt="Donaplay" />
        </div>
    )
}
