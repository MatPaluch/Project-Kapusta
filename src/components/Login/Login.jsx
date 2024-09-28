import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  loginSuccess,
  loginRequest,
  loginFailure,
} from '../../redux/authSlice';
import { setBalance, setIsBalanceSet } from '../../redux/userSlice';
import { loginUser, fetchUserData, decodeToken } from '../../redux/operations';
import styles from './Login.module.css';

const Login = () => {
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

    dispatch(loginRequest());

    try {
      const { token } = await loginUser(state);
      const user = await decodeToken(token);
      const userData = await fetchUserData(token);
      const value = String(userData.balance);
      const isBalanceSet = userData.isBalanceSet;
      console.log('User object:', user);
      console.log('Token:', token);
      dispatch(setIsBalanceSet(isBalanceSet));
      dispatch(setBalance({ value }));
      dispatch(loginSuccess({ token, user }));
      navigate('/');
    } catch (error) {
      console.error(
        'Błąd logowania:',
        error.response ? error.response.data : error.message
      );
      dispatch(loginFailure('Logowanie nie powiodło się. Spróbuj ponownie.')); // Ustawienie błędu
      alert('Logowanie nie powiodło się. Spróbuj ponownie.');
    }
  };

  const handleRegistrationRedirect = () => {
    navigate('/register');
  };

  return (
    <div>
      <div className={styles.loginDiv}>
        <form onSubmit={handleSubmit}>
          <p className={styles.loginParagraph}>
            Log in using an email and password, after registering:
          </p>

          {/* Wyświetlanie błędów logowania */}
          {error && <p className={styles.errorText}>{error}</p>}

          <div className={styles.loginFormDiv}>
            <label htmlFor="email" className={styles.loginLabel}>
              {errors.email && <span className={styles.errorAsterisk}>*</span>}{' '}
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Email"
              className={`${styles.loginInput} ${
                errors.email ? styles.inputError : ''
              }`}
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>

          <div className={styles.loginFormDiv}>
            <label htmlFor="password" className={styles.loginLabel}>
              {errors.password && (
                <span className={styles.errorAsterisk}>*</span>
              )}{' '}
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Password"
              className={`${styles.loginInput} ${
                errors.password ? styles.inputError : ''
              }`}
            />
            {errors.password && (
              <p className={styles.errorText}>{errors.password}</p>
            )}
          </div>

          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={`${styles.registerButtonForm} ${
                isLoading ? styles.loading : ''
              }`}
              disabled={isLoading} // Zablokowanie przycisku, gdy ładowanie jest w toku
            >
              {isLoading ? 'Loading...' : 'Log in'}
            </button>
            <button
              type="button"
              className={styles.registerButtonForm}
              onClick={handleRegistrationRedirect}
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
