import React from 'react';
import styles from './PagePiano.module.css';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Piano from '../../Courses/Instruments/Image/piano.jpg';
import { Link } from 'react-router-dom';

const PagePiano = () => {
  return (
    <div>
      <Header />
      <div className={styles.PagePiano}>
        <div>
          <img src={Piano} />
        </div>
        <div>
          <h1>
            Bem vindo ao curso de <span>piano</span>.
          </h1>
          <p>Confira nossos <span>planos</span> abaixo.</p>
        </div>
      </div>
      <div className={styles.ContainPlans}>
        <div>
          <ul>
            <span>Teclado/Manha</span>
            <li>08:00 ás 09:30</li>

            <Link to='/PianoMorning'><button>Inscreva-se</button></Link>
          </ul>
        </div>
        <div>
          <ul>
            <span>Teclado/Tarde</span>
            <li>14:00 ás 15:30</li>
            <Link to='/PianoAfternoon'><button>Inscreva-se</button></Link>
          </ul>
        </div>
        <div>
          <ul>
            <span>Teclado/Noite</span>
            <li>20:00 ás 21:30</li>
            <Link to='/PianoNight'><button>Inscreva-se</button></Link>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PagePiano;
