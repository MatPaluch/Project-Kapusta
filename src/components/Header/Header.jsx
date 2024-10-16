import styles from './Header.module.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/authorization/operations'; // Akcja wylogowania
import icons from '../../images/icons.svg';
import LogoutModal from 'components/LogoutModal/LogoutModal';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector(state => state.auth); // Pobieramy dane użytkownika z Reduxa
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true); // Otwieramy modal po kliknięciu "Exit"
  };

  const handleConfirmLogout = () => {
    dispatch(logoutUser()); // Wywołujemy akcję wylogowania
    setIsModalOpen(false); // Zamykamy modal
    if (token === null) {
      navigate('/login'); // Przekierowanie na stronę logowania
    }
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false); // Zamykamy modal bez wylogowania
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
          <div className={styles.user}>
            <img src={user.avatarURL} alt="avatar" className={styles.avatar} />
          </div>
          <svg className={styles.iconLogout} onClick={handleLogoutClick}>
            <use href={`${icons}#icon-logout`}></use>
          </svg>

          <div className={styles.mobileHidden}>
            <div className={styles.userName}>{user.username}</div>
            <svg className={styles.iconVector}>
              <use href={`${icons}#icon-Vector`}></use>
            </svg>
            <button className={styles.exitButton} onClick={handleLogoutClick}>
              Exit
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {isModalOpen && (
        <LogoutModal
          onConfirm={handleConfirmLogout} // Przekazujemy funkcję do potwierdzenia wylogowania
          onCancel={handleCancelLogout} // Przekazujemy funkcję do anulowania
        />
      )}
    </header>
  );
};
