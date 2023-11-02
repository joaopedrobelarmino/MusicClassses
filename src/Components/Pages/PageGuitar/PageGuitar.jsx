import React from 'react';
import styles from './PageGuitar.module.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Guitarra from '../../Courses/Instruments/Image/Guitar.jpg';
import { Link } from 'react-router-dom';


const PageGuitarra = () => {
  return (
    <div>
      <Header />
      <div className={styles.PageGuitarra}>
        <div>
          <img src={Guitarra} />
        </div>
        <div>
          <h1>
            Bem vindo ao curso de <span>Guitarra</span>.
          </h1>
          <p>
            Confira nossos <span>planos</span> abaixo.
          </p>
        </div>
      </div>
      <div className={styles.ContainPlans}>
        <div>
          <ul>
            <span>Guitarra/Manha</span>
            <li>08:00 ás 09:30</li>
            <li>10:00 ás 11:30</li>
            <Link to='/GuitarMorning'><button>Inscreva-se</button></Link>
          </ul>
        </div>
        <div>
          <ul>
            <span>Guitarra/Tarde</span>
            <li>13:00 ás 14:30</li>
            <li>15:00 ás 16:30</li>
            <Link to='/GuitarAfternoon'><button>Inscreva-se</button></Link>
          </ul>
        </div>
        <div>
          <ul>
            <span>Guitarra/Noite</span>
            <li>20:00 ás 21:30</li>
            <li>22:00 ás 23:30</li>
           <Link to='/GuitarNight'><button>Inscreva-se</button></Link>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageGuitarra;
