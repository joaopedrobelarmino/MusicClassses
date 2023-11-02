import React from 'react';
import styles from './Integrate.module.css';
import Image from './Image/Integrate.jpg';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import History from '../../History/History'
import Courses from '../../Courses/Courses'

const Integrate = () => {
  return (
    <div>
      <Header />
      <div className={styles.Integrate}>
        <div>
          <img src={Image} />
        </div>
        <div>
          <h1>
            Inscreva-se agora e comece sua jornada musical com a <span>Music</span>Classes!
          </h1>
          <p>Confira abaixo nossos <span>cursos</span>.</p>
        </div>
      </div>
      <Courses />
      <History />
      <Footer />
    </div>
  );
};

export default Integrate;
