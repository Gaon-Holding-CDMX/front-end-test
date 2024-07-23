import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../styles/Batman.css';
import BatmanImage from '../images/Batman/Left.jpg'; 
import JokerImage from '../images/Batman/Right.jpg';

const Batman = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SwitchTransition>
      <CSSTransition
        key={theme}
        classNames={theme === 'villain' ? 'slide-left' : 'slide-right'}
        timeout={500}
      >
        <div className="split-layout" id={theme}>
          {theme === 'villain' ? (
            <>
              <div className="text-container">
                <h1>Joker: The Clown Prince of Crime</h1>
                <p>
                  El Joker es uno de los villanos más famosos y temidos del universo de DC Comics, conocido por su risa maníaca y su apariencia de payaso. Su verdadero nombre y pasado son un misterio, pero lo que se sabe es que es un criminal brillante con un ingenio retorcido y una mente peligrosa.
                </p>
                <p>
                  <strong>Nombre:</strong> Desconocido<br/>
                  <strong>Alias:</strong> Joker<br/>
                  <strong>Primera Aparición:</strong> Batman #1 (1940)<br/>
                  <strong>Creadores:</strong> Jerry Robinson, Bill Finger, Bob Kane<br/>
                  <strong>Ciudad:</strong> Gotham City<br/>
                  <strong>Aliados:</strong> Harley Quinn, varios secuaces<br/>
                  <strong>Enemigos Principales:</strong> Batman, Policía de Gotham City<br/>
                  <strong>Habilidades:</strong> Intelecto genial, maestro del disfraz, químico experto, inmunidad al veneno<br/>
                  <strong>Armas y Gadgets:</strong> Ácido de flor de solapa, gas de la risa, cartas de juego afiladas, diversos explosivos
                </p>
                <p>
                  El Joker es la antítesis de Batman, representando el caos frente al orden que el Caballero Oscuro lucha por mantener. Su relación con Batman es compleja y profundamente personal, con el Joker viendo a Batman como su único igual y digno oponente.
                </p>
              </div>
              <div className="image-container2">
                <img src={JokerImage} alt="Joker" />
              </div>
            </>
          ) : (
            <>
              <div className="image-container2">
                <img src={BatmanImage} alt="Batman" />
              </div>
              <div className="text-container">
                <h1>Batman: The Dark Knight</h1>
                <p>
                  Batman, también conocido como el Caballero Oscuro, es uno de los superhéroes más icónicos del universo de DC Comics. Su nombre real es Bruce Wayne, un multimillonario playboy, filántropo y propietario de Wayne Enterprises. Después de presenciar el asesinato de sus padres cuando era niño, Bruce juró vengar sus muertes luchando contra el crimen en Gotham City.
                </p>
                <p>
                  <strong>Nombre:</strong> Bruce Wayne<br/>
                  <strong>Identidad Secreta:</strong> Batman<br/>
                  <strong>Primera Aparición:</strong> Detective Comics #27 (1939)<br/>
                  <strong>Creadores:</strong> Bob Kane y Bill Finger<br/>
                  <strong>Ciudad:</strong> Gotham City<br/>
                  <strong>Aliados:</strong> Robin, Alfred Pennyworth, Batgirl, Justice League<br/>
                  <strong>Villanos Principales:</strong> Joker, Penguin, Riddler, Two-Face, Catwoman, Bane<br/>
                  <strong>Habilidades:</strong> Maestro de artes marciales, genio detective, experto en tecnología, gran estratega<br/>
                  <strong>Armas y Gadgets:</strong> Batarangs, Batmobile, Bat-suit, grappling hook, Batcave
                </p>
                <p>
                  Batman no posee superpoderes, pero su determinación, inteligencia y habilidades físicas lo convierten en uno de los héroes más formidables del mundo. Su lucha constante por la justicia y su compromiso inquebrantable con proteger a los inocentes lo han convertido en una leyenda tanto dentro como fuera de las páginas del cómic.
                </p>
              </div>
            </>
          )}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Batman;
