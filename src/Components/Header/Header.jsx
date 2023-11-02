import React from 'react';
import styles from './Header.module.css';
import Image from '../Image/Logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className={styles.Header}>
        <div>
          <Link to='/'>
            <img src={Image} width={70} />
          </Link>
        </div>
        <nav>
          <ul>
            <NavLink to='/Address'><li>Endereço</li></NavLink>
            <NavLink to='/Courses'><li>Cursos</li></NavLink>
            <NavLink to='/Contact'><li>Contato</li></NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
