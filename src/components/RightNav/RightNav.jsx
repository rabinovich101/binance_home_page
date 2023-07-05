'use client'
import Link from "next/link";
import styles from "./RightNav.module.css";
import AdjustLogo from "../../../public/AdjustLogo";
import TargetFinance from "../../../public/TargetFinance";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillCaretRightFill } from "react-icons/bs";

const renderDropDownAll = (array) => {
    return array?.map((row, i) => {
        return (
            <li className={styles.submenu_li} key={row.titel}>
                <Link href="/"><div className={styles.space}></div>
                    <div className={styles.submenu_li_content}>
                        <div className={styles.submenu_li_content_title}>{row.titel}</div>
                    </div>
                </Link>
            </li>
        );
    });
};

const clickHandal = () => {
    const navToggole = window.document.querySelector('.mobile_nav_toggle');
    const primaryNav = window.document.querySelector('.nav');
    const visibility = primaryNav.getAttribute('data-visible');
    const nav_left = window.document.querySelector('.nav_main');
    if(visibility === "false") {
        primaryNav.setAttribute('data-visible', "true");
        navToggole.setAttribute('aria-expanded', "true");
    }
    else{
        primaryNav.setAttribute('data-visible', "false");
        navToggole.setAttribute('aria-expanded', "false");
    }
}

const openClose = (e) => {
    const li = window.document.querySelector(`#${e.currentTarget.id}`);
    const div = li.getElementsByClassName("submenu");
    if (div[0].style.display === "flex") {
        div[0].style.display = "none"
    } else {
        div[0].style.display = "flex"
    }
}

const RightNav = ({ derivatives, buyCrypto, markets, institutional, earn, trade, finance }) => {
    return (
        <div className={styles.right_side_wrap}>
            <Link href="/" className={`${styles.register0} ${styles.button_effect}`}>Register</Link>
            <button className={`${styles.mobile_nav_toggle} mobile_nav_toggle`} aria-controls="right_side" aria-expanded="false" onClick={clickHandal}>
                <span className={styles.sr_only }>Menu</span>
            </button>
            <nav className={`${styles.nav} nav`} id="nav" data-visible="false">
                <ul  className={`${styles.right_side} right_side`}>
                    <li><Link href="/" className={`${styles.log_in} ${styles.button_effect}`}>Log In</Link></li>
                    <li><Link href="/" className={`${styles.register} ${styles.button_effect}`}>Register</Link></li>
                    <li className={styles.downloads}>Downloads</li>
                    <li className={styles.language}>English</li>
                    <li className={styles.currency}>| USD |</li>
                    <li className={styles.AdjustLogo}><AdjustLogo/></li>
                    <li id="li-1" className={`${styles.drop_hamburger} drop_hamburger`} onClick={e => openClose(e)}>
                        <Link href="/"><TargetFinance className={`${styles.tragetfinance} ${styles.ham_icon}`} /><div>Buy Crypto</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
                        <div className={`${styles.submenu} submenu`}>
                            <ul className={styles.submenu_orderlist}>
                                <li className={styles.submenu_li_head}>
                                    <div className={styles.space}></div>
                                    <span>Pay With</span>
                                    <div className={styles.eur_warp}><span>EUR</span><BsFillCaretRightFill className={styles.arrow_right} /></div>
                                </li>
                                {renderDropDownAll(buyCrypto)}
                            </ul>
                        </div>
                    </li>
                    <li id="li-2" className={`${styles.drop_hamburger} drop_hamburger`} onClick={openClose}>
                        <Link href="/"><TargetFinance className={`${styles.tragetfinance} ${styles.ham_icon}`} /><div>Markets</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
                        <div className={`${styles.submenu} submenu`}>
                            <ul className={styles.submenu_orderlist}>
                                {renderDropDownAll(markets)}
                            </ul>
                        </div>
                    </li>
                    <li id="li-3" className={`${styles.drop_hamburger} drop_hamburger`} onClick={openClose}>
                        <Link href="/"><TargetFinance className={`${styles.tragetfinance} ${styles.ham_icon}`} /><div>Trade</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
                        <div className={`${styles.submenu} submenu`}>
                            <ul className={styles.submenu_orderlist}>
                                {renderDropDownAll(trade)}
                            </ul>
                        </div>
                    </li>
                    <li id="li-4" className={`${styles.drop_hamburger} drop_hamburger`} onClick={openClose}>
                        <Link href="/"><TargetFinance className={`${styles.tragetfinance} ${styles.ham_icon}`} /><div>Derivatives</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
                        <div className={`${styles.submenu} submenu`}>
                            <ul className={styles.submenu_orderlist}>
                                {renderDropDownAll(derivatives)}
                            </ul>
                        </div>
                    </li>
                    <li id="li-5" className={`${styles.drop_hamburger} drop_hamburger`} onClick={openClose}>
                        <Link href="/"><TargetFinance className={`${styles.tragetfinance} ${styles.ham_icon}`} /><div>Earn</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
                        <div className={`${styles.submenu} submenu`}>
                            <ul className={styles.submenu_orderlist}>
                                {renderDropDownAll(earn)}
                            </ul>
                        </div>
                    </li>
                    <li id="li-6" className={`${styles.drop_hamburger} drop_hamburger`} onClick={openClose}>
                        <Link href="/"><TargetFinance className={`${styles.tragetfinance} ${styles.ham_icon}`} /><div>Finance</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
                        <div className={`${styles.submenu} submenu`}>
                            <ul className={styles.submenu_orderlist}>
                                {renderDropDownAll(finance)}
                            </ul>
                        </div>
                    </li>
                    <li id="li-7" className={`${styles.drop_hamburger} drop_hamburger`} >
                        <Link href="/"><TargetFinance className={`${styles.tragetfinance} ${styles.ham_icon}`} /><div>NFT</div></Link>
                    </li>
                    <li id="li-8" className={`${styles.drop_hamburger} drop_hamburger`} onClick={openClose}>
                        <Link href="/"><TargetFinance className={`${styles.tragetfinance} ${styles.ham_icon}`} /><div>Institutional</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
                        <div className={`${styles.submenu} submenu`}>
                            <ul className={styles.submenu_orderlist}>
                                {renderDropDownAll(institutional)}
                            </ul>
                        </div>
                    </li>
                    <li id="li-9" className={`${styles.drop_hamburger} ${styles.drop_last} drop_hamburger`} >
                        <Link href="/"><TargetFinance className={`${styles.tragetfinance} ${styles.ham_icon}`} /><div>Feed</div></Link>
                    </li>
                    <li className={styles.downloads_mobile}>
                        <TargetFinance className={`${styles.tragetfinance} ${styles.ham_icon}`} /><div>Downloads</div>
                    </li>
                    <li className={styles.language_mobile}>
                        <TargetFinance className={`${styles.tragetfinance} ${styles.ham_icon}`} /><div>English</div>
                    </li>
                    <li className={styles.currency_mobile}>
                        <TargetFinance className={`${styles.tragetfinance} ${styles.ham_icon}`} /><div>USD</div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default RightNav;