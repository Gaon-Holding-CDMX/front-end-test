import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../styles/Roles.css';
import Superman from '../images/Superman.png';
import SupermanHover from '../images/SupermanHover.png';
import Batman from '../images/Batman.png';
import BatmanHover from '../images/BatmanHover.png';
import Flash from '../images/Flash.png';
import FlashHover from '../images/FlashHover.png';
import Joker from '../images/Joker.png';
import JokerHover from '../images/JokerHover.png';
import LexLuthor from '../images/LexLuthor.png';
import LexLuthorHover from '../images/LexLuthorHover.png';
import ReverseFlash from '../images/ReverseFlash.png';
import ReverseFlashHover from '../images/ReverseFlashHover.png';
import SupermanTitle from '../images/Titulos/Superman.png';
import BatmanTitle from '../images/Titulos/Batman.png';
import FlashTitle from '../images/Titulos/Flash.png';
import JokerTitle from '../images/Titulos/Joker.png';
import LexTitle from '../images/Titulos/Lex.png';
import { ThemeContext } from '../App';

const Roles = () => {
  const { theme, } = useContext(ThemeContext);
  console.log(theme);

  const [hovered, setHovered] = useState([false, false, false]);

  let images = [];
  let titles = [];

  const link = ["/superman", "/batman", "/flash"];

  if (theme === 'villain') {
    images = [
      { original: LexLuthor, hover: LexLuthorHover },
      { original: Joker, hover: JokerHover },
      { original: ReverseFlash, hover: ReverseFlashHover },
    ];
    titles = [LexTitle, JokerTitle, FlashTitle];
  } else {
    images = [
      { original: Superman, hover: SupermanHover },
      { original: Batman, hover: BatmanHover },
      { original: Flash, hover: FlashHover },
    ];
    titles = [SupermanTitle, BatmanTitle, FlashTitle];
  }

  return (
    <div id={theme}>
      <div className='background'>
        <div className="three-image-container">
          
          {images.map((image, index) => (
            <div
              key={index}
              className="image-wrapper"
              onMouseEnter={() => setHovered(hovered.map((_, i) => i === index))}
              onMouseLeave={() => setHovered(hovered.map(() => false))}
            >
              <SwitchTransition>
                <CSSTransition
                  key={hovered[index] ? image.hover : image.original}
                  classNames="fade"
                  timeout={300}
                >
                  <Link to={link[index]}>
                    <img
                      src={titles[index]}
                      alt={`${index + 1}`}
                    />
                    <img
                      src={hovered[index] ? image.hover : image.original}
                      alt={`${index + 1}`}
                    />
                  </Link>
                </CSSTransition>
              </SwitchTransition>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roles;