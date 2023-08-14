'use client';
import Link from "next/link";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
    const handleSubmit = async (e) => {
      e.preventDefault();
      signIn("credentials", {
        email: user.email,
        password: user.password
      });
    };

    return (
      <div className={styles.form_warper}>
        <h2>LOGIN ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_warper}>
            <input className={styles.input_form} type="email" name="email" value={user.email} onChange={e => setUser(p => ({ ...p, email: e.target.value }))} required placeholder="Jhon_deo@gmail.com"/>
            <label className={styles.label_form} htmlFor="email">Email</label>
          </div>
          <div className={styles.password}>
            <input className={styles.input_form} type="password" name="password" value={user.password} onChange={e => setUser(p => ({ ...p, password: e.target.value }))} required placeholder="Xbshsd$##@31!"/>
            <label className={styles.label_form} htmlFor="password">Password</label>
          </div>
          <div className={styles.login_error}>
              {/*authUserResults.isError? authUserResults.error.data.massage: ''*/}
          </div>
          <button className={styles.button_effect}>Login</button>
          <p className={styles.button_desc}>Don`t Have An Account ?</p>
          <Link href="/register" className={`${styles.open_button} ${styles.button_effect}`}>Open Account</Link>
        </form>
      </div>
    );
}

export default LoginForm;