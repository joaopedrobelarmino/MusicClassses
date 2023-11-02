import React from 'react';
import styles from './PageViolao.module.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Violao from '../../Courses/Instruments/Image/Violao.jpg';
import { Link } from 'react-router-dom';

const PageViolao = () => {
  return (
    <div>
      <Header />
      <div className={styles.PageViolao}>
        <div>
          <img src={Violao} />
        </div>
        <div>
          <h1>
            Bem vindo ao curso de <span>Violao</span>.
          </h1>
          <p>
            Confira nossos <span>planos</span> abaixo.
          </p>
        </div>
      </div>
      <div className={styles.ContainPlans}>
        <div>
          <ul>
            <span>Violão/Manha</span>
            <li>08:00 ás 09:30</li>
            <li>10:00 ás 11:30</li>
            <Link to='/ViolaoMorning'><button>Inscreva-se</button></Link>
          </ul>
        </div>
        <div>
          <ul>
            <span>Violão/Tarde</span>
            <li>13:00 ás 14:30</li>
            <li>16:00 ás 17:30</li>
            <Link to='/ViolaoAfternon'><button>Inscreva-se</button></Link>
          </ul>
        </div>
        <div>
          <ul>
            <span>Violão/Noite</span>
            <li>20:00 ás 21:30</li>
            <li>22:00 ás 23:30</li>
            <Link to='/ViolaoNight'><button>Inscreva-se</button></Link>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageViolao;
