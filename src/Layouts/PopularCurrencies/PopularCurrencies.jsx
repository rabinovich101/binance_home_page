import Link from "next/link";
import styles from "./PopularCurrencies.module.css";
import ArrowRightShort from "../../../public/Arrow-Right-Short";
import Image from "next/image";

const PopularCurrencies = () => {
    return (
        <div className={styles.popularcryptocurrencies}>
            <div className={styles.popularcryptocurrencies_title}>
                <div className={styles.popularcryptocurrencies_title_1}>Popular cryptocurrencies</div>
                <Link href="#" className={styles.popularcryptocurrencies_title_2}>
                    <div className={styles.popularcryptocurrencies_title_2_item_1}>View more markets</div>
                    <ArrowRightShort />
                </Link>
            </div>
            <div className={styles.popularcryptocurrencies_subtitles}>
                <div className={styles.popularcryptocurrencies_subtitle_name}>Name</div>
                <div className={styles.popularcryptocurrencies_subtitle_lastprice}>Last Price</div>
                <div className={styles.popularcryptocurrencies_subtitle_name_24change}>24h Change</div>
                <div className={styles.popularcryptocurrencies_subtitle_name_marketcap}>MarketCap</div>
            </div>
            <div className={styles.popularcryptocurrencies_coins}>
                <Link href="#" className={styles.popularcryptocurrencies_coins_bnb}>
                    <div className={styles.popularcryptocurrencies_coin_bnb}>
                        <Image src="/bnb.png"
                            alt="bnb"
                            className={styles.popularcryptocurrencies_coins_bnbimg}
                            width={36}
                            height={36}
                            sizes="100vw"
                            style={{
                            width: '3.6rem',
                            height: 'auto',
                            }}
                            />
                        <div className={styles.popularcryptocurrencies_coins_name}>BNB</div>
                        <div className={styles.popularcryptocurrencies_coins_symbol}>BNB</div>
                    </div>
                    <div className={styles.popularcryptocurrencies_coins_price}>$ 270.6</div>
                    <div className={styles.popularcryptocurrencies_coins_change}>+0.66%</div>
                    <div className={styles.popularcryptocurrencies_coins_marketcap}>$43.5M</div>
                </Link>
                <Link href="#" className={styles.popularcryptocurrencies_coins_bnb}>
                    <div className={styles.popularcryptocurrencies_coin_bnb}>
                        <Image
                            src="/bitcoin.png"
                            alt="bitcoin"
                            className={styles.popularcryptocurrencies_coins_bnbimg}
                            width={36}
                            height={36}
                            sizes="100vw"
                            style={{
                                width: '3.6rem',
                                height: 'auto',
                            }}
                        />
                        <div className={styles.popularcryptocurrencies_coins_name}>Bitcoin</div>
                        <div className={styles.popularcryptocurrencies_coins_symbol}>BTC</div>
                    </div>
                    <div className={styles.popularcryptocurrencies_coins_price}>$ 270.6</div>
                    <div className={styles.popularcryptocurrencies_coins_change}>+0.66%</div>
                    <div className={styles.popularcryptocurrencies_coins_marketcap}>$43.5M</div>
                </Link>
                <Link href="#" className={styles.popularcryptocurrencies_coins_bnb}>
                    <div className={styles.popularcryptocurrencies_coin_bnb}>
                        <Image
                            src="/ethereum.png"
                            alt="ethereum"
                            className={styles.popularcryptocurrencies_coins_bnbimg}
                            width={36}
                            height={36}
                            sizes="100vw"
                            style={{
                                width: '3.6rem',
                                height: 'auto',
                            }}
                        />
                        <div className={styles.popularcryptocurrencies_coins_name}>Ethereum</div>
                        <div className={styles.popularcryptocurrencies_coins_symbol}>ETH</div>
                    </div>
                    <div className={styles.popularcryptocurrencies_coins_price}>$ 270.6</div>
                    <div className={styles.popularcryptocurrencies_coins_change}>+0.66%</div>
                    <div className={styles.popularcryptocurrencies_coins_marketcap}>$43.5M</div>
                </Link>
                <Link href="#" className={styles.popularcryptocurrencies_coins_bnb}>
                    <div className={styles.popularcryptocurrencies_coin_bnb}>
                        <Image
                            src="/galxe.png"
                            alt="galxe coin"
                            className={styles.popularcryptocurrencies_coins_bnbimg}
                            width={36}
                            height={36}
                            sizes="100vw"
                            style={{
                                width: '3.6rem',
                                height: 'auto',
                            }}
                        />
                        <div className={styles.popularcryptocurrencies_coins_name}>Galxe</div>
                        <div className={styles.popularcryptocurrencies_coins_symbol}>GAL</div>
                    </div>
                    <div className={styles.popularcryptocurrencies_coins_price}>$ 270.6</div>
                    <div className={styles.popularcryptocurrencies_coins_change}>+0.66%</div>
                    <div className={styles.popularcryptocurrencies_coins_marketcap}>$43.5M</div>
                </Link>
                <Link href="#" className={styles.popularcryptocurrencies_coins_bnb}>
                    <div className={styles.popularcryptocurrencies_coin_bnb}>
                        <Image
                            src="/greenMetaverseToken.png"
                            alt="greenMetaverseToken"
                            className={styles.popularcryptocurrencies_coins_bnbimg}
                            width={36}
                            height={36}
                            sizes="100vw"
                            style={{
                                width: '3.6rem',
                                height: 'auto',
                            }}
                        />
                        <div className={styles.popularcryptocurrencies_coins_name}>Green Metaverse Token</div>
                        <div className={styles.popularcryptocurrencies_coins_symbol}>GMT</div>
                    </div>
                    <div className={styles.popularcryptocurrencies_coins_price}>$ 270.6</div>
                    <div className={styles.popularcryptocurrencies_coins_change}>+0.66%</div>
                    <div className={styles.popularcryptocurrencies_coins_marketcap}>$43.5M</div>
                </Link>
                <Link href="#" className={styles.popularcryptocurrencies_title_2_mobile}>
                    <div className={styles.popularcryptocurrencies_title_2_item_1}>View more markets</div>
                    <ArrowRightShort />
                </Link>
                <div className={styles.get_started_feature}>
                    <h3 className={styles.get_started_feature_text}>Sign up now to build your own portfolio for free!</h3>
                    <Link className={styles.get_started_feature_button} href="#">Get Started</Link>
                </div>
            </div>
        </div>
    );
}

export default PopularCurrencies;