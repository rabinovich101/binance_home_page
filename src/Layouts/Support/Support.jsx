import Image from "next/image";
import styles from "./Support.module.css";
import Link from "next/link";

const Support = () => {
    return (
        <div className={styles.support}>
            <h2 className={styles.support_title}>Need Help?</h2>
            <ul className={styles.support_list}>
                <li className={styles.support_list_help}>
                        <Image
                            src="/cs.svg"
                            alt="support icon"
                            width={64}
                            height={64}
                            sizes="100vw"
                            style={{
                            width: '64px',
                            height: '64px',
                            }}
                        />
                        <div className={styles.support_list_help_desc}>
                            <h3>24/7 Chat Support</h3>
                            <p>Get 24/7 chat support with our friendly customer service agents at your service.</p>
                            <Link href="#">Chat now</Link>
                        </div>
                </li>
                <li className={styles.support_list_help}>
                <Image
                        src="/community.svg"
                        alt="community icon"
                        width={64}
                        height={64}
                        sizes="100vw"
                        style={{
                          width: '64px',
                          height: '64px',
                        }}
                    />
                    <div className={styles.support_list_help_desc}>
                        <h3>FAQs</h3>
                        <p>View FAQs for detailed instructions on specific features.</p>
                        <Link href="#">View more</Link>
                    </div>
                </li>
                <li className={styles.support_list_help}>
                <Image
                        src="/blog.svg"
                        alt="blog"
                        width={64}
                        height={64}
                        sizes="100vw"
                        style={{
                          width: '64px',
                          height: '64px',
                        }}
                    />
                    <div className={styles.support_list_help_desc}>
                        <h3>Blog</h3>
                        <p>Stay up to date with the latest stories and commentary.</p>
                        <Link href="#">View more</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Support;