'use client';
import styles from "./RegisterForm.module.css";
import Link from "next/link";
import { useState } from "react";



const RegisterForm = () => {
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", country_residency: "united States", country_living: "united States", password: "", phone: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) {
            const response = await fetch('/api/auth/register', {
                method: "POST",
                body: JSON.stringify(user)
            });
            return response;
        }
        return null;
    }
    
    return (
        <div className={styles.register_section}>
        <div className={styles.register_section_warp}>
            <div className={styles.register_section_left}>
                <Link className={`${styles.login_button} ${styles.button_effect}`} href="/login">LOG IN</Link>
            </div>
            <div className={styles.register_section_right}>
                <h2>OPEN ACCOUNT</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.firstName}>
                        <input className={styles.input_form} type="text" name="firstName" value={user.firstName} onChange={e => setUser(p => ({ ...p, firstName: e.target.value }))} required placeholder="Jhon" autoComplete="off"/>
                        <label className={styles.label_form}>FirstName</label>
                    </div>
                    <div className="lastName">
                        <input className={styles.input_form} type="text" name="lastName" value={user.lastName} onChange={e => setUser(p => ({ ...p, lastName: e.target.value }))} required placeholder="Deo" autoComplete="off"/>
                        <label className={styles.label_form}>LastName</label>
                    </div>
                    <div className="email">
                        <input className={styles.input_form} type="email" name="email" value={user.email} onChange={e => setUser(p => ({ ...p, email: e.target.value }))} required placeholder="Jhondeo@gamil.com" autoComplete="off"/>
                        <label className={styles.label_form}>Email</label>
                    </div>
                    <div className="password">
                        <input className={styles.input_form} type="password" name="password" value={user.password} onChange={e => setUser(p => ({ ...p, password: e.target.value }))} required autoComplete="off" placeholder="Xbshsd$##@31!"/>
                        <label className={styles.label_form}>Password</label>
                    </div>
                    <div className="phone">
                        <input className={styles.input_form} type="phone" name="phone" value={user.phone} onChange={e => setUser(p => ({ ...p, phone: e.target.value }))} required placeholder="+380639752361" autoComplete="off"/>
                        <label  className={styles.label_form}>Phone</label>
                    </div>
                    <div className="error">
                        {/*addUserResults.isError? addUserResults.error.data: ''*/}
                    </div>
                    <button type="submit" className={styles.button_effect}>Submit</button>
                    <p className={styles.login_desc}>Have An Account Please Log In</p>
                    <Link className={`${styles.login_button} ${styles.button_effect}`} href="/login">LOG IN</Link>
                </form>
            </div>
        </div>
    </div>
    );
}

export default RegisterForm;