import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../styles/Superman.css';
import Nice from '../images/Superman/Superman.jpg';

const Superman = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SwitchTransition>
      <CSSTransition
        key={theme}
        classNames={theme === 'villain' ? 'super-slide-left' : 'super-slide-right'}
        timeout={500}
      >
        <div className="super-split-layout" id={theme}>
          {theme === 'villain' ? (
            <>
              <div className="super-text-container">
                <h1>Lex Luthor: The Arch-Nemesis</h1>
                <p>
                  Lex Luthor, uno de los villanos más inteligentes y astutos del universo de DC Comics, es el archienemigo de Superman. Luthor es un multimillonario, científico brillante y empresario despiadado, cuya principal misión es destruir a Superman y controlar Metrópolis.
                </p>
                <p>
                  <strong>Nombre:</strong> Lex Luthor<br/>
                  <strong>Alias:</strong> Lex Luthor<br/>
                  <strong>Primera Aparición:</strong> Action Comics #23 (1940)<br/>
                  <strong>Creadores:</strong> Jerry Siegel y Joe Shuster<br/>
                  <strong>Ciudad:</strong> Metrópolis<br/>
                  <strong>Aliados:</strong> Legion of Doom, Injustice League<br/>
                  <strong>Enemigos Principales:</strong> Superman, Justice League<br/>
                  <strong>Habilidades:</strong> Genio nivel intelectual, maestro estratega, experto en tecnología y ciencia<br/>
                  <strong>Armas y Gadgets:</strong> Traje de batalla de LexCorp, kryptonita, vastos recursos financieros
                </p>
                <p>
                  La rivalidad de Luthor con Superman se basa en su creencia de que el Hombre de Acero es una amenaza para la humanidad y que la gente debería depender de los logros humanos, no de un alienígena todopoderoso. Su odio y envidia hacia Superman lo impulsan a constantes intentos de destrucción.
                </p>
              </div>
              <div className="super-image-container">
                <img src={Nice} alt="Lex Luthor" />
              </div>
            </>
          ) : (
            <>
              <div className="super-image-container">
                <img src={Nice} alt="Superman" />
              </div>
              <div className="super-text-container">
                <h1>Superman: The Man of Steel</h1>
                <p>
                  Superman, también conocido como el Hombre de Acero, es uno de los superhéroes más poderosos y emblemáticos del universo de DC Comics. Su nombre real es Kal-El, y es el último hijo del planeta Krypton, enviado a la Tierra antes de la destrucción de su mundo natal.
                </p>
                <p>
                  <strong>Nombre:</strong> Kal-El / Clark Kent<br/>
                  <strong>Alias:</strong> Superman<br/>
                  <strong>Primera Aparición:</strong> Action Comics #1 (1938)<br/>
                  <strong>Creadores:</strong> Jerry Siegel y Joe Shuster<br/>
                  <strong>Ciudad:</strong> Metrópolis<br/>
                  <strong>Aliados:</strong> Justice League, Lois Lane, Supergirl<br/>
                  <strong>Enemigos Principales:</strong> Lex Luthor, Brainiac, Doomsday<br/>
                  <strong>Habilidades:</strong> Superfuerza, invulnerabilidad, vuelo, visión de rayos X y calor, supervelocidad, superoído<br/>
                  <strong>Debilidad:</strong> Kryptonita
                </p>
                <p>
                  Superman utiliza sus increíbles poderes para proteger a la humanidad y luchar por la verdad, la justicia y el estilo de vida americano. Su moralidad inquebrantable y su compasión lo convierten en un símbolo de esperanza para personas de todo el mundo.
                </p>
              </div>
            </>
          )}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Superman;
