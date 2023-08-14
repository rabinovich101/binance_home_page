import Link from "next/link";
import LoginForm from "@/components/LoginForm/LoginForm";
import styles from "./login.module.css";

const login = async () => {
    
    return (
        <div className={styles.login_section}>
        <div className={styles.left_side}>
          <LoginForm/>
        </div>
        <div className={styles.right_side}>
          <p className={styles.button_desc}>Don`t Have An Account ?</p>
          <Link href="/register" className={`${styles.open_button} ${styles.button_effect}`}>OPEN ACCOUNT</Link>
        </div>
      </div>
    );
}

export default login;