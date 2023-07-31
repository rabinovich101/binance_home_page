import Link from "next/link";
import ArrowRightShort from "../../../public/Arrow-Right-Short";
import Image from "next/image";
import styles from "./TradeFree.module.css";

const TradeFree = () => {
    return (
        <div className={styles.trade_free_warper}>
          <div className={styles.trade_free}>
              <div className={styles.trade_free_img_warper}>
                <Image
                    src="/0_btc_fee.png"
                    alt="trade_free_img"
                    width={325}
                    height={325}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                }}
                />
              </div>
              <div className={styles.trade_free_description}>
                  <div className={styles.trade_free_description_title}>Trade Bitcoin for Free</div>
                  <Link href="#" className={styles.item_1}>
                      <div>0 trading fee on selected Bitcoin (BTC) spot trading pairs now</div>
                      <ArrowRightShort/>
                  </Link>
                  <Link href="#" className={styles.item_2}>
                      <div>Lowest transactions fees {`< 0.10%`} </div>
                      <ArrowRightShort/>
                  </Link >
                  <Link href="#" className={styles.item_3}>Buy BTC for 0 Fee</Link>
              </div>
          </div>
      </div>
    );
};

export default TradeFree;