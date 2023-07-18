import styles from "./Header.module.css";
import FirstHeader from "@/components/FirstHeader/FirstHeader";

const Header = () => {
    return (
        <div className={styles.header}>
            <FirstHeader/>
        </div>
    );
}

export default Header;