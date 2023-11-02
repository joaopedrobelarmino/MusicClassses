import React from 'react';
import styles from './Footer.module.css';
import Image from '../Image/Logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <footer>
        <div>
          <Link to='/'>
            <img src={Image} width={70} />
          </Link>
        </div>
        <nav>
          <ul>
            <Link to="/Address">
              <li>Endereço</li>
            </Link>
            <Link to="/Courses">
              <li>Cursos</li>
            </Link>
            <Link to="/Contact">
              <li>Contato</li>
            </Link>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
