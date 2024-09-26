import styles from './HomeButton.module.css';
import { Navigate, useNavigate } from 'react-router-dom';

function HomeButton() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <button className={styles.homeButton} onClick={navigateToHome}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_14_1564)">
          <path
            d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z"
            fill="#FF751D"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_1564">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default HomeButton;
