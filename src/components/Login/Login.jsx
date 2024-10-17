import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/authorization/operations';
import styles from './Login.module.css';

const Login = () => {
  const [active, setActive] = useState(true);
  const [state, setState] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector(state => state.auth);

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));

    if (value) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newErrors = {};
    if (!state.email) newErrors.email = 'This is a required field';
    if (!state.password) newErrors.password = 'This is a required field';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(loginUser(state));
  };

  const handleRegistrationRedirect = () => {
    navigate('/register');
  };

  return (
    <div>
      <div className={styles.loginDiv}>
        <form onSubmit={handleSubmit}>
          <p className={styles.loginParagraph}>
            Run this pls Log in using an email and password, after registering:
          </p>

          {/* Wyświetlanie błędów logowania */}
          {error && <p className={styles.errorText}>{error.message}</p>}

          <div className={styles.loginFormDiv}>
            <label htmlFor="email" className={styles.loginLabel}>
              {errors.email && <span className={styles.errorAsterisk}>*</span>} Email:
            </label>
            <input
              autoComplete="email"
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Email"
              className={`${styles.loginInput} ${errors.email ? styles.inputError : ''}`}
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>

          <div className={styles.loginFormDiv}>
            <label htmlFor="password" className={styles.loginLabel}>
              {errors.password && <span className={styles.errorAsterisk}>*</span>} Password:
            </label>
            <input
              autoComplete="current-password"
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Password"
              className={`${styles.loginInput} ${errors.password ? styles.inputError : ''}`}
            />
            {errors.password && <p className={styles.errorText}>{errors.password}</p>}
          </div>

          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={`${styles.registerButtonForm}
              ${active && styles.active}
              ${isLoading ? styles.loading : ''}`}
              disabled={isLoading} // Zablokowanie przycisku, gdy ładowanie jest w toku
            >
              {isLoading ? 'Loading...' : 'Log in'}
            </button>
            <button
              type="button"
              className={styles.registerButtonForm}
              onClick={handleRegistrationRedirect}
              onMouseEnter={() => setActive(false)}
              onMouseLeave={() => setActive(true)}
            >
              Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
