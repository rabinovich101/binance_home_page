import Link from "next/link";
import styles from "./Marketing.module.css";
import ArrowRight from "../../../public/ArrowRight";
import PresentBinance from "../../../public/PresentBinance";

const MarketingRaw = () => {
    return (
        <div className={styles.marketing}>
            <Link href='#' className={styles.main_link}>
                <PresentBinance />
                <div className={styles.marketing_text}>
                    Register now — Get up to 100 USDT in trading fee rebate (for verified users)
                </div>
                <ArrowRight/>
            </Link>
        </div>
    );
}

export default MarketingRaw;