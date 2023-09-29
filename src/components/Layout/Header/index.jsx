import React from 'react';
import { useTime } from '../../../hooks/useTime';
import styles from './Header.module.css';
import logo from '../../../assets/logo-toncontin.png'
import TextAnimation from '../Transitions/TextAnimation';


const Header = ({title}) => {

    const {time} = useTime();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.picture}>
          <img src={logo} />
        </div>
        <TextAnimation>
          <h2>{title}</h2>
        </TextAnimation>
      </div>
      <span>{time}</span>
    </header>
  );
}

export default Header