import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Register.module.css';

const Register = () => {
  // Stany na pola i błędy
  const [state, setState] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  }); // Stan na błędy
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));

    // Resetowanie błędu przy wpisywaniu danych
    if (value) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Walidacja formularza
    const newErrors = {};
    if (!state.username) newErrors.username = 'This is a required field';
    if (!state.email) newErrors.email = 'This is a required field';
    if (!state.password) newErrors.password = 'This is a required field';

    // Jeśli są błędy, ustawiamy je w stanie
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Wysyłanie danych do API
      console.log(state);
      const response = await axios.post(
        'https://project-kapusta-rest-api.vercel.app/auth/register',
        state
      );
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.error(
        'Registration failed:',
        error.response ? error.response.data : error.message
      );
      alert('Registration failed. Please try again.');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className={styles.registerDiv}>
      <form onSubmit={handleSubmit}>
        <p className={styles.registerParagraph}>
          You can register with your e-mail and password:
        </p>

        <div className={styles.formRegisterDiv}>
          <label htmlFor="name" className={styles.registerLabelName}>
            {errors.password && <span className={styles.errorAsterisk}>*</span>}{' '}
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="username"
            value={state.username}
            onChange={handleChange}
            placeholder="Name"
            className={`${styles.registerInputName} ${
              errors.name ? styles.inputError : ''
            }`}
          />
          {/* Wyświetlanie błędu jeśli pole nie zostało wypełnione */}
          {errors.name && <p className={styles.errorText}>{errors.name}</p>}
        </div>

        <div className={styles.formRegisterDiv}>
          <label htmlFor="email" className={styles.registerLabelName}>
            {errors.password && <span className={styles.errorAsterisk}>*</span>}{' '}
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email"
            className={`${styles.registerInputName} ${
              errors.email ? styles.inputError : ''
            }`}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
        </div>

        <div className={styles.formRegisterDiv}>
          <label htmlFor="password" className={styles.registerLabelName}>
            {errors.password && <span className={styles.errorAsterisk}>*</span>}{' '}
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password"
            className={`${styles.registerInputName} ${
              errors.password ? styles.inputError : ''
            }`}
          />
          {errors.password && (
            <p className={styles.errorText}>{errors.password}</p>
          )}
        </div>

        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.registerButtonForm}
            onClick={handleLoginRedirect}
            onMouseEnter={() => setActive(false)}
            onMouseLeave={() => setActive(true)}
          >
            Log in
          </button>
          <button
            type="submit"
            className={`${styles.registerButtonForm} ${
              active && styles.active
            }`}
          >
            Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
