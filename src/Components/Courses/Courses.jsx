import React from 'react';
import styles from './Courses.module.css';
import Instruments from './Instruments/Instruments';

const Courses = () => {
  return (
    <section className={styles.Courses}>
      <div>
        <h1>Escolha seu curso.</h1>
      </div>
      <div>
        <div className={styles.Instruments}>
          <Instruments />
        </div>
      </div>
    </section>
  );
};

export default Courses;
