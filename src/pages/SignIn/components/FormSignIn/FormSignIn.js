import { useDispatch } from "react-redux";

import { useForm } from "./../../../../commonComponents/hooks";
import { signInThunk } from "../../api";

import styles from "./styles.module.scss";

const FormSignIn = () => {
  const dispatch = useDispatch();

  const { form, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInThunk(form));
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Email</p>
            <input
              type="email"
              value={form.email}
              name="email"
              onChange={handleChange}
              autoComplete="username"
            ></input>
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              value={form.password}
              name="password"
              onChange={handleChange}
              autoComplete="current-password"
            ></input>
          </label>
          <button role="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default FormSignIn;
