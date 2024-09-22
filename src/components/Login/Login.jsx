import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginSuccess } from '../../redux/authSlice';
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
    if (!state.email) newErrors.email = 'This is a required field';
    if (!state.password) newErrors.password = 'This is a required field';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(
        'https://connections-api.goit.global/users/login',
        state
      );
      const token = response.data.token;

      try {
        const jwtDecodeModule = await import('jwt-decode');
        const jwtDecode = jwtDecodeModule.default || jwtDecodeModule.jwtDecode;

        if (typeof jwtDecode !== 'function') {
          throw new Error('jwtDecode is not a function');
        }

        const user = jwtDecode(token);
        dispatch(loginSuccess({ token, user }));
        navigate('/');
      } catch (jwtError) {
        console.error('Error decoding JWT:', jwtError);
        alert('Failed to decode JWT. Please try again.');
      }
    } catch (error) {
      console.error(
        'Login failed:',
        error.response ? error.response.data : error.message
      );
      alert('Login failed. Please try again.');
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
