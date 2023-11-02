import React from 'react';
import styles from './Instruments.module.css';
import Piano from './Image/Piano.jpg';
import Violao from './Image/Violao.jpg';
import Guitar from './Image/Guitar.jpg';
import { Link } from 'react-router-dom';

const Instruments = () => {
  return (
    <div className={styles.Instruments}>
      <div>
        <span>Piano</span>
        <img src={Piano} />
        <Link to='/Piano'><button>Inscreva-se</button></Link>
      </div>
      <div>
        <span>Violão</span>
        <img src={Violao} />
        <Link to='/Violao'><button>Inscreva-se</button></Link>
      </div>
      <div>
        <span>Guitarra</span>
        <img src={Guitar} />
       <Link to='/Guitarra'> <button>Inscreva-se</button></Link>
      </div>
    </div>
  );
};

export default Instruments;
