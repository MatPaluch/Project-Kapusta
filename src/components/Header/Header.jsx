import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/authSlice'; // Akcja wylogowania
import styles from './Header.module.css';
import icons from '../../images/icons.svg';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector(state => state.auth); // Pobieramy dane użytkownika z Reduxa

  const handleLogout = () => {
    dispatch(logout()); // Wywołujemy akcję wylogowania
    navigate('/login'); // Przekierowanie na stronę logowania
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <svg className={styles.iconLogo}>
          <use href={`${icons}#icon-logo`}></use>
        </svg>
      </Link>

      {token ? (
        <div className={styles.headerMenu}>
          <div className={styles.user}>U</div>
          <svg className={styles.iconLogout}>
            <use href={`${icons}#icon-logout`}></use>
          </svg>

          <div className={styles.mobileHidden}>
            <div className={styles.userName}> username {user.username}</div>
            <svg className={styles.iconVector}>
              <use href={`${icons}#icon-Vector`}></use>
            </svg>
            <button className={styles.exitButton} onClick={handleLogout}>
              Exit
            </button>{' '}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};
