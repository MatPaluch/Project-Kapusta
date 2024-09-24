import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../redux/authSlice';
import { setBalance } from '../../redux/userSlice';
import { loginUser, fetchUserData, decodeToken } from '../../redux/operations';
import styles from './Login.module.css';

const Login = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (!state.email) newErrors.email = 'To pole jest wymagane';
    if (!state.password) newErrors.password = 'To pole jest wymagane';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const { token } = await loginUser(state);

      // Zdekodowanie tokena
      const user = await decodeToken(token);

      const userData = await fetchUserData(token);
      const value = String(userData.balance);

      // Logowanie informacji o użytkowniku do konsoli
      console.log('Zalogowany użytkownik:');
      console.log('Username:', user.username);
      console.log('Email:', state.email);
      console.log('Token:', token);

      dispatch(setBalance({ value }));
      dispatch(loginSuccess({ token, user }));
      navigate('/');
    } catch (error) {
      console.error(
        'Błąd logowania:',
        error.response ? error.response.data : error.message
      );
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
                active && styles.active
              }`}
            >
              Log in
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
