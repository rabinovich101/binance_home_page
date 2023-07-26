import styles from "./Header.module.css";
import FirstHeader from "@/components/FirstHeader/FirstHeader";
import SecondHeader from "@/components/SecondHeader/SecondHeader";
const Header = () => {
    return (
        <div className={styles.header}>
            <FirstHeader />
            <SecondHeader/>
        </div>
    );
}

export default Header;