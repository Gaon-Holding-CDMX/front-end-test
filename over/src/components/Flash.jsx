import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../styles/Flash.css';
import FlashImage from '../images/Flash/Left.jpg';
import ReverseFlashImage from '../images/Flash/Right.jpg';

const Flash = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SwitchTransition>
      <CSSTransition
        key={theme}
        classNames={theme === 'villain' ? 'flash-zoom-in-left' : 'flash-zoom-in-right'}
        timeout={300}
      >
        <div className="flash-split-layout" id={theme}>
          {theme === 'villain' ? (
            <>
              <div className="flash-text-container">
                <h1>Reverse Flash: The Arch-Nemesis</h1>
                <p>
                  Reverse Flash, también conocido como Eobard Thawne, es uno de los villanos más peligrosos y mortales del universo de DC Comics. Viajero del tiempo del siglo 25, Thawne idolatraba a Flash hasta que una serie de eventos lo llevaron a odiar al velocista escarlata.
                </p>
                <p>
                  <strong>Nombre:</strong> Eobard Thawne<br/>
                  <strong>Alias:</strong> Reverse Flash<br/>
                  <strong>Primera Aparición:</strong> The Flash #139 (1963)<br/>
                  <strong>Creadores:</strong> John Broome y Carmine Infantino<br/>
                  <strong>Ciudad:</strong> Ciudad Central<br/>
                  <strong>Aliados:</strong> Injustice League, Legion of Doom<br/>
                  <strong>Enemigos Principales:</strong> Flash (Barry Allen), Justice League<br/>
                  <strong>Habilidades:</strong> Supervelocidad, manipulación del tiempo, habilidades regenerativas<br/>
                  <strong>Armas y Gadgets:</strong> Anillo de velocidad, manipulación de la Fuerza de la Velocidad negativa
                </p>
                <p>
                  Reverse Flash es una amenaza constante para Flash, utilizando su vasto conocimiento de la historia y la ciencia del futuro para intentar destruir la vida de Barry Allen. Su obsesión y odio por Flash lo convierten en uno de los villanos más peligrosos y persistentes.
                </p>
              </div>
              <div className="flash-image-container">
                <img src={ReverseFlashImage} alt="Reverse Flash" />
              </div>
            </>
          ) : (
            <>
              <div className="flash-image-container">
                <img src={FlashImage} alt="Flash" />
              </div>
              <div className="flash-text-container">
                <h1>Flash: The Fastest Man Alive</h1>
                <p>
                  Flash, también conocido como Barry Allen, es uno de los superhéroes más rápidos y populares del universo de DC Comics. Barry es un científico forense de Central City cuya vida cambió cuando fue alcanzado por un rayo y empapado en productos químicos de laboratorio, otorgándole supervelocidad.
                </p>
                <p>
                  <strong>Nombre:</strong> Barry Allen<br/>
                  <strong>Alias:</strong> Flash<br/>
                  <strong>Primera Aparición:</strong> Showcase #4 (1956)<br/>
                  <strong>Creadores:</strong> Robert Kanigher, John Broome y Carmine Infantino<br/>
                  <strong>Ciudad:</strong> Central City<br/>
                  <strong>Aliados:</strong> Justice League, Kid Flash, Iris West<br/>
                  <strong>Enemigos Principales:</strong> Reverse Flash, Captain Cold, Gorilla Grodd<br/>
                  <strong>Habilidades:</strong> Supervelocidad, intangibilidad, curación acelerada, viaje en el tiempo<br/>
                  <strong>Armas y Gadgets:</strong> Anillo de Flash, traje resistente a la fricción, comunicaciones con la Fuerza de la Velocidad
                </p>
                <p>
                  Flash usa su velocidad para luchar contra el crimen y proteger Central City. Su carácter optimista y su compromiso con la justicia lo han convertido en un pilar fundamental de la Justice League y en un símbolo de esperanza.
                </p>
              </div>
            </>
          )}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Flash;
