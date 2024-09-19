import React from 'react';
import styles from './Header.module.scss';
import logoUrl from '../../images/logo.jpg';
import icons from '../../images/icons.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logoUrl} alt="Kapusta logo" />
      <div className={styles.headerMenu}>
        <div className={styles.user}>U</div>
        <svg className={styles.iconLogout}>
          <use href={`${icons}#icon-logout`}></use>
        </svg>
        {/* PLACEHOLDER: DODAC USERA I ROUTE */}
        <div className={styles.mobileHidden}>User | Exit</div>
      </div>
    </header>
  );
};
