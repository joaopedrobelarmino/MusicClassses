import React from 'react';
import styles from './GuitarAfternoon.module.css';
import Image from '../../../Image/Guitar.jpg'
import Footer from '../../../../Footer/Footer';
import Header from '../../../../Header/Header';
import { Link } from 'react-router-dom';

const GuitarAfternoon = () => {
  return (
    <div>
      <Header />
      <div className={styles.GuitarAfternoon}>
        <div>
          <img src={Image} />
        </div>
        <div>
          <h1>
            Bem vindo a inscrição do curso <span>Guitarra/Tarde</span>.
          </h1>
        </div>
      </div>
      <div className={styles.Matter}>
        <div>
          <h1>Curso e opções de pagamento.</h1>
          <ul>
            <li className={styles.Center}>PREÇOS</li>
            <li>R$ 60,00-mensais</li>
            <li>R$ 500-Anual</li>
            <li className={styles.Center}>FORMAS DE PAGAMENTO</li>
            <li>PIX</li>
            <li>CARTÃO/DEBITO OU CREDITO </li>
            <Link to="/Address">
              <button>Inscreva-se</button>
            </Link>
          </ul>
        </div>
        <h1>
          Confira as matérias do curso de <span>Teclado</span>
        </h1>
        <div>
          <ul>
            <li>Teoria Musical</li>
            <li>Acordes/Maiores e Menores</li>
            <li>Escala</li>
            <li>Ritmos</li>
            <li>Partitura</li>
            <li>Campo Harmonico</li>
            <li>Timbres</li>
            <li>Desenvolvimento da capacidade auditiva.</li>
          </ul>
        </div>
        <div>
          <h1>Pré-requisitos.</h1>
          <ul>
            <li>Ter mais de 8 anos.</li>
            <li>Ter um instrumento</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GuitarAfternoon;
