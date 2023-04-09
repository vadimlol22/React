import { useForm } from "./../../../../commonComponents/hooks";

import styles from "./styles.module.scss";

const FormSignIn = () => {
  const { form, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = () => {};

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
            ></input>
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              value={form.password}
              name="password"
              onChange={handleChange}
            ></input>
          </label>
          <button role="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default FormSignIn;
