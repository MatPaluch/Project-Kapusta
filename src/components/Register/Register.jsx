import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Register.module.css';
import { registerUser } from '../../redux/authorization/operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  // Stany na pola i błędy
  const [formValues, setFormValues] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({ username: '', email: '', password: '' }); // Stan na błędy
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues(prevState => ({ ...prevState, [name]: value }));

    // Resetowanie błędu przy wpisywaniu danych
    if (value) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Walidacja formularza
    const newErrors = {};
    if (!formValues.username) newErrors.username = 'This is a required field';
    if (!formValues.email) newErrors.email = 'This is a required field';
    if (!formValues.password) newErrors.password = 'This is a required field';

    // Jeśli są błędy, ustawiamy je w stanie
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Wysyłanie danych do API
    const resFromRegisterRequest = new Promise((resolve, reject) => {
      dispatch(registerUser(formValues)).then(response => {
        if (response.error) {
          console.log(response)
          reject(response.payload.message);
        } else {
          resolve(response.payload.message);
        }
      });
    });

    toast.promise(resFromRegisterRequest, {
      pending: 'Please wait ...',
      success: {
        render({ data }) {
          navigate('/login');
          return `${data}`;
        },
      },
      error: {
        render({ data }) {
          return `Error ${data}`;
        },
      },
    });
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className={styles.registerDiv}>
      <form onSubmit={handleSubmit}>
        <p className={styles.registerParagraph}>You can register with your e-mail and password:</p>

        <div className={styles.formRegisterDiv}>
          <label htmlFor="name" className={styles.registerLabelName}>
            {errors.username && <span className={styles.errorAsterisk}>*</span>} Name:
          </label>
          <input
            autoComplete="username"
            type="text"
            id="name"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="Name"
            className={`${styles.registerInputName} ${errors.username ? styles.inputError : ''}`}
          />
          {/* Wyświetlanie błędu jeśli pole nie zostało wypełnione */}
          {errors.username && <p className={styles.errorText}>{errors.username}</p>}
        </div>

        <div className={styles.formRegisterDiv}>
          <label htmlFor="email" className={styles.registerLabelName}>
            {errors.email && <span className={styles.errorAsterisk}>*</span>} E-mail:
          </label>
          <input
            autoComplete="email"
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email"
            className={`${styles.registerInputName} ${errors.email ? styles.inputError : ''}`}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
        </div>

        <div className={styles.formRegisterDiv}>
          <label htmlFor="password" className={styles.registerLabelName}>
            {errors.password && <span className={styles.errorAsterisk}>*</span>} Password:
          </label>
          <input
            autoComplete="current-password"
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Password"
            className={`${styles.registerInputName} ${errors.password ? styles.inputError : ''}`}
          />
          {errors.password && <p className={styles.errorText}>{errors.password}</p>}
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
            className={`${styles.registerButtonForm} ${active && styles.active}`}
          >
            Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
