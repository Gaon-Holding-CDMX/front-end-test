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
                <h1>Title Goes Here</h1>
                <p>
                  This is a sample text. You can replace this with any content you need. This section will cover two-thirds of the screen.
                </p>
              </div>
              <div className="super-image-container">
                <img src={Nice} alt="Example" />
              </div>
            </>
          ) : (
            <>
              <div className="super-image-container">
                <img src={Nice} alt="Example" />
              </div>
              <div className="super-text-container">
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

export default Superman;
