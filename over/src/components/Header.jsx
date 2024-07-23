import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import '../styles/Header.css';
import { useContext } from 'react';
import ReactSwitch from 'react-switch';


const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/roles">Roles</Link></li>
          <li><Link to="/batman">Batman</Link></li>
          <li><Link to="/superman">Superman</Link></li>
          <li><Link to="/flash">Flash</Link></li>
          <li><ReactSwitch onColor="#0000FF" offColor="#800080" onChange={toggleTheme} checked={theme === "villain"} /> </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
