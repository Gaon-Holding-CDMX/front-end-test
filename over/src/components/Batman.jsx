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
                <h1>Title Goes Here</h1>
                <p>
                  This is a sample text. You can replace this with any content you need. This section will cover two-thirds of the screen.
                </p>
              </div>
              <div className="image-container2">
                <img src={JokerImage} alt="Example" />
              </div>
            </>
          ) : (
            <>
              <div className="image-container2">
                <img src={BatmanImage} alt="Example" />
              </div>
              <div className="text-container">
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

export default Batman;
