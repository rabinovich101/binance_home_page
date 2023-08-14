'use client';
import styles from "./Footer.module.css";
import Link from "next/link";
import ScanIcon from "../../../public/ScanIcon";
import DiscordIcon from "../../../public/DiscordIcon";
import TelegramIcon from "../../../public/TelegramIcon";
import TiktokIcon from "../../../public/TiktokIcon";
import YoutubeIcon from "../../../public/YoutubeIcon";
import FacebookIcon from "../../../public/FacebookIcon";
import RedditIcon from "../../../public/RedditIcon";
import TwitterIcon from "../../../public/TwitterIcon";
import VkIcon from "../../../public/VkIcon";
import InstagramIcon from "../../../public/InstagramIcon";
import CoinmarketcapIcon from "../../../public/CoinmarketcapIcon";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";

const openClose = (e) => {
    const div = window.document.querySelector(`#${e.currentTarget.id}`);
    if (div?.getAttribute("aria-expanded") === "false") {
        div.setAttribute("aria-expanded", "true");
    } else {
        div.setAttribute("aria-expanded", "false");
    };
}


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_main}>
                <div className={styles.footer_main_left}>
                <div id="about" className={styles.footer_main_about} onClick={e => openClose(e)} aria-expanded="false">
                        <div className={`${styles.footer_main_about_title} ${styles.title}`} ><div>About Us</div><BiPlus/></div>
                        <Link className={styles.item} href="#">About</Link>
                        <Link className={styles.item} href="#">Careers</Link>
                        <Link className={styles.item} href="#">Business Contacts</Link>
                        <Link className={styles.item} href="#">Community</Link>
                        <Link className={styles.item} href="#">Binance Blog</Link>
                        <Link className={styles.item} href="#">Terms</Link>
                        <Link className={styles.item} href="#">Privacy</Link>
                        <Link className={styles.item} href="#">Risk Warning</Link>
                        <Link className={styles.item} href="#">Announcements</Link>
                        <Link className={styles.item} href="#">News</Link>
                        <Link className={styles.item} href="#">Notices</Link>
                        <Link className={styles.item} href="#">Sitemap</Link>
                        <Link className={styles.item} href="#">Cookie Preferences</Link>
                    </div>
                    <div id="product" className={styles.footer_main_product} onClick={e => openClose(e)} aria-expanded="false">
                        <div className={`${styles.footer_main_product_title} ${styles.title}`} ><div>Products</div><BiPlus/></div>
                        <Link className={styles.item} href="#">Exchange</Link>
                        <Link className={styles.item} href="#">Academy</Link>
                        <Link className={styles.item} href="#">Binance Live</Link>
                        <Link className={styles.item} href="#">Charity</Link>
                        <Link className={styles.item} href="#">Card</Link>
                        <Link className={styles.item} href="#">Labs</Link>
                        <Link className={styles.item} href="#">Launchpad</Link>
                        <Link className={styles.item} href="#">Research</Link>
                        <Link className={styles.item} href="#">Trust Wallet</Link>
                        <Link className={styles.item} href="#">NFT</Link>
                        <Link className={styles.item} href="#">Binance Pay</Link>
                        <Link className={styles.item} href="#">Binance Gift Card</Link>
                        <Link className={styles.item} href="#">BABT</Link>
                    </div>
                    <div id="service" className={styles.footer_main_service} onClick={e => openClose(e)} aria-expanded="false">
                        <div className={`${styles.footer_main_service_title} ${styles.title}`} ><div>Service</div><BiPlus/></div>
                        <Link className={styles.item} href="#">Downloads</Link>
                        <Link className={styles.item} href="#">Desktop Application</Link>
                        <Link className={styles.item} href="#">Buy Crypto</Link>
                        <Link className={styles.item} href="#">Institutional & VIP Services</Link>
                        <Link className={styles.item} href="#">OTC Trading</Link>
                        <Link className={styles.item} href="#">Referral</Link>
                        <Link className={styles.item} href="#">Affiliate</Link>
                        <Link className={styles.item} href="#">BNB</Link>
                        <Link className={styles.item} href="#">Listing Application</Link>
                        <Link className={styles.item} href="#">P2P Merchant Application</Link>
                        <Link className={styles.item} href="#">P2Pro Merchant Application</Link>
                        <Link className={styles.item} href="#">Historical Market Data</Link>
                        <Link className={styles.item} href="#">Proof of Collateral for B-Tokens</Link>
                    </div>
                    <div id="support" className={styles.footer_main_support} onClick={e => openClose(e)} aria-expanded="false">
                        <div className={`${styles.footer_main_support_title} ${styles.title}`} ><div>Support</div><BiPlus/></div>
                        <Link className={styles.item} href="#">Give Us Feedback</Link>
                        <Link className={styles.item} href="#">Support Center</Link>
                        <Link className={styles.item} href="#">Submit a request</Link>
                        <Link className={styles.item} href="#">APIs</Link>
                        <Link className={styles.item} href="#">Fees</Link>
                        <Link className={styles.item} href="#">Trading Rules</Link>
                        <Link className={styles.item} href="#">Binance Verify</Link>
                        <Link className={styles.item} href="#">Law Enforcement Requests</Link>
                        <Link className={styles.item} href="#">Binance Legal (Court Orders)</Link>
                        <Link className={styles.item} href="#">Binance Airdrop Portal</Link>
                    </div>
                    <div id="learn" className={styles.footer_main_learn} onClick={e => openClose(e)} aria-expanded="false">
                        <div className={`${styles.footer_main_learn_title} ${styles.title}`} ><div>Learn</div><BiPlus/></div>
                        <Link className={styles.item} href="#">Learn & Earn</Link>
                        <Link className={styles.item} href="#">Browse Crypto Prices</Link>
                        <Link className={styles.item} href="#">Bitcoin Price</Link>
                        <Link className={styles.item} href="#">Ethereum Price</Link>
                        <Link className={styles.item} href="#">Buy BNB</Link>
                        <Link className={styles.item} href="#">Buy BUSD</Link>
                        <Link className={styles.item} href="#">Buy Bitcoin</Link>
                        <Link className={styles.item} href="#">Buy Ethereum</Link>
                        <Link className={styles.item} href="#">Buy Dogecoin (Court Orders)</Link>
                        <Link className={styles.item} href="#">Buy XRP</Link>
                        <Link className={styles.item} href="#">Buy Tradable Altcoins</Link>
                    </div>
                </div>
                <div className={styles.footer_main_right}>
                <div className={styles.footer_main_trade}>
                        <div className={`${styles.footer_main_trade_title} ${styles.title}`} >Trade on the go with Binance</div>
                        <Link className={styles.footer_register_button} href="#">Register</Link>
                        <div className={styles.scan_svg_icon}>
                            <ScanIcon />
                            <Image
                                src="/logo.png"
                                alt=""
                                width={20}
                                height={20}
                                sizes="100vw"
                                style={{
                                  width: '20px',
                                  height: '20px',
                                }}
                            />
                        </div>
                        <div className={styles.footer_main_trade_desc}>Scan to download the app</div>
                    </div>
                </div>
            </div>
            <div className={styles.footer_social}>
                <div className={styles.footer_social_title}>Community</div>
                <div className={styles.footer_social_icons}>
                    <Link className={styles.link_icon} href="#"><DiscordIcon /></Link>
                    <Link className={styles.link_icon} href="#"><TelegramIcon /></Link>
                    <Link className={styles.link_icon} href="#"><TiktokIcon /></Link>
                    <Link className={styles.link_icon} href="#"><FacebookIcon /></Link>
                    <Link className={styles.link_icon} href="#"><TwitterIcon /></Link>
                    <Link className={styles.link_icon} href="#"><RedditIcon /></Link>
                    <Link className={styles.link_icon} href="#"><InstagramIcon /></Link>
                    <Link className={styles.link_icon} href="#"><CoinmarketcapIcon /></Link>
                    <Link className={styles.link_icon} href="#"><VkIcon /></Link>
                    <Link className={styles.link_icon} href="#"><YoutubeIcon /></Link>
                </div>
            </div>
            <div className={styles.footer_rights}>Binance © 2022</div>
        </div>
    );
}

export default Footer;