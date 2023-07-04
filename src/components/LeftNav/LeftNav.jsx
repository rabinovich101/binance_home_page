import Link from "next/link";
import styles from "./LeftNav.module.css";
import Logo from "../../../public/Logo";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillCaretRightFill } from "react-icons/bs";

const LeftNav = ({ derivatives, buyCrypto, markets, institutional, earn, trade, finance,
  renderDropDown, renderDropDown_4_8, renderDropDown_0_5, renderDropDown_5_10, renderDropDown_0_6, renderDropDown_6_12}) => {
  return (
    <nav className={`${styles.nav_left} nav_left`}>
      <div className={styles.left_con}>
        <ul className={styles.orderList}>
          <li className={styles.logo}><Link href="/"><Logo href="/"/></Link></li>
          <li className={styles.grid} ><Link href="/"><BsGrid3X3GapFill /></Link></li>
          <li className={styles.newdropdown}>
            <Link href="/"><div className={styles.sub}>Buy Crypto</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
            <div className={styles.submenu}>
              <ul className={styles.submenu_orderlist}>
                <li className={styles.submenu_li_head}><span>Pay With</span><div><span>EUR</span><BsFillCaretRightFill className={styles.arrow_right} /></div></li>  
                {renderDropDown(buyCrypto)}
              </ul>
            </div>
          </li>
          <li className={styles.newdropdown}>
            <Link href="/"><div className={styles.sub}>Markets</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
            <div className={`${styles.submenu}`}>
              <ul className={styles.submenu_orderlist}>
                {renderDropDown(markets)}
              </ul>
          </div> 
          </li>
          <li className={styles.newdropdown}>
            <Link href="/"><div className={styles.sub}>Trade</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
            <div className={`${styles.submenu} ${styles.submenu_trade}`}>
              <div className={styles.col_1}> 
                <ul className={styles.submenu_orderlist}>
                  {renderDropDown(trade)}
                </ul>
              </div>
              <div className={styles.col_2}> 
                <ul className={styles.submenu_orderlist}>
                  {renderDropDown_4_8(trade)}
                </ul>
              </div>    
            </div> 
          </li>
          <li className={styles.newdropdown}>
            <Link href="/"><div className={styles.sub}>Derivatives</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
          <div className={`${styles.submenu} ${styles.submenu_der}`}>
              <div className={styles.col_1}> 
                <ul className={styles.submenu_orderlist}>
                  {renderDropDown_0_5(derivatives)}
                </ul>
              </div>
              <div className={styles.col_2}> 
                <ul className={styles.submenu_orderlist}>
                  {renderDropDown_5_10(derivatives)}
                </ul>
              </div>    
            </div> 
          </li>
          <li className={styles.newdropdown}>
            <Link href="/"><div className={styles.sub}>Earn</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
            <div className={`${styles.submenu} ${styles.submenu_earn}`}>
              <div className={styles.col_1}> 
                <ul className={styles.submenu_orderlist}>
                  {renderDropDown_0_6(earn)}
                </ul>
              </div>
              <div className={styles.col_2}> 
                <ul className={styles.submenu_orderlist}>
                  {renderDropDown_6_12(earn)}
                </ul>
              </div>    
            </div> 
          </li>
          <li className={styles.newdropdown}>
            <Link href="/"><div className={styles.sub}>Finance</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
            <div className={`${styles.submenu} ${styles.submenu_finance}`}>
              <ul className={styles.submenu_orderlist}>  
                {renderDropDown(finance)}
              </ul>
            </div>
          </li>
          <li className={styles.newdropdown}>
            <Link href="/"><div className={styles.sub} >NFT</div></Link>
          </li>
          <li className={styles.newdropdown}>
            <Link href="/"><div className={styles.sub}>Institutional</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
            <div className={`${styles.submenu} ${styles.submenu_ins}`}>
              <div className={styles.col_1}> 
                <ul className={styles.submenu_orderlist}>
                  {renderDropDown_0_5(institutional)}
                </ul>
              </div>
              <div className={styles.col_2}> 
                <ul className={styles.submenu_orderlist}>
                  {renderDropDown_5_10(institutional)}
                </ul>
              </div>    
            </div>
          </li>
          <li className={styles.submenu_li_feed}>
            <Link href="/"><div className={styles.sub}>Feed</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default LeftNav;