import React from 'react';
import styles from './Intro.module.css';
import Image from './Image/Piano.jpg';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <div>
        <h1>
          Bem vindo a <span>Music</span>Classes.
        </h1>
        <p>Explore o som e a arte das musicas conosco.</p>
        <Link to="/Integrate">
          <button>Venha fazer parte</button>
        </Link>

      </div>
      <div>
        <img src={Image} />
      </div>
    </div>
  );
};

export default Intro;
