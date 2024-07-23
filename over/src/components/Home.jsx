import React from 'react';
import '../styles/Home.css';
import HeroesImage from '../images/Hereos.jpg';
import VillainsImage from '../images/Villians.jpg';
import Title from '../images/Title.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <Link to="/roles">
        <div className="image-container left">
          <img src={HeroesImage} alt="Left" />
        </div>
      </Link>
      <div className="image-container right">
        <img src={VillainsImage} alt="Right" />
      </div>
      <div className="center-content">
        <img src={Title} alt="Title" className='title' />
        <p className='paragraph'>
          Welcome to the world of superheroes and villains. Click on the navigation bar to know more about them.
        </p>
      </div>
    </div>
  );
}

export default Home;
