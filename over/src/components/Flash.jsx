import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../styles/Flash.css';
import Left from '../images/Flash/Left.jpg';
import Right from '../images/Flash/Right.jpg';

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
                <h1>Title Goes Here</h1>
                <p>
                  This is a sample text. You can replace this with any content you need. This section will cover two-thirds of the screen.
                </p>
              </div>
              <div className="flash-image-container">
                <img src={Right} alt="Example" />
              </div>
            </>
          ) : (
            <>
              <div className="flash-image-container">
                <img src={Left} alt="Example" />
              </div>
              <div className="flash-text-container">
                <h1>Title Goes Here</h1>
                <p>
                  This is a sample text. You can replace this with any content you need. This section will cover two-thirds of the screen.
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
