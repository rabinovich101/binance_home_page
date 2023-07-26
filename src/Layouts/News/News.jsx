import styles from "./News.module.css";
import Image from "next/image";

const News = () => {
    return (
        <div className={styles.news}>
            <div className={styles.news_container}>
                <Image
                    src="/desktop-en.png" alt="cristiano ronaldo"
                    className={styles.cristiano_desktop}
                    width={800}
                    height={320}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
                <Image
                    src="/cristiano-mobile-en.png"
                    alt="cristiano ronaldo"
                    className={styles.cristiano_mobile}
                    width={800}
                    height={320}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </div>
        </div>
    );
}

export default News;