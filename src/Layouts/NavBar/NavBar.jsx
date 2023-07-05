import LeftNav from "@/components/LeftNav/LeftNav";
import RightNav from "@/components/RightNav/RightNav";
import styles from "./NavBar.module.css";
import FlagFinance from '../../../public/FlagFinance';
import TargetFinance from '../../../public/TargetFinance';
import PaperFinance from '../../../public/PaperFinance';
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const trade = [
    { titel: "Binance Convert", desc: "The easiest way to trade", iconFirst: <PaperFinance className={styles.paperfinance} />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Spot", desc: "Trade crypto with advanced tools", iconFirst: <PaperFinance className={styles.paperfinance} />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Margin", desc: "increase your profits leverage", iconFirst: <PaperFinance className={styles.paperfinance} />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Trading Bots", desc: "Trade Smarter with your various automated startegies-easy, fast and reliable", iconFirst: <PaperFinance className={styles.paperfinance} />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "P2P", desc: "Bank Trasfer and 100+ options", iconFirst: <PaperFinance className={styles.paperfinance} />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Swap Farming", desc: "Sawp to earn BNB", iconFirst: <PaperFinance className={styles.paperfinance} />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Fan Token", desc: "Upgrade your fan experience", iconFirst: <PaperFinance className={styles.paperfinance} />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "OTC Block Trading", desc: "RFQ and trade large spot orders", iconFirst: <PaperFinance className={styles.paperfinance} />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
  ];
  
  const markets = [
    { titel: "Markets Overview", desc: "Overview of the crypto market with real-time prices and key data", iconFirst: <PaperFinance className={styles.paperfinance} />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} />},
    { titel: "Trading Data", desc: "View top market movers and price preformence", iconFirst: <PaperFinance className={styles.paperfinance} />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> }
  ];
  
  const buyCrypto = [
    { titel: "Bank Deposite", desc: "Deposite Eur via Sepa Or Card", iconFirst: <FlagFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Credit/Debit Card", desc: "Buy Crypto Via Card, ApplePay, GooglePay", iconFirst: <PaperFinance className={styles.paperfinance} />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Cash Balance", desc: "Buy Crypto With Your Eur Balance", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> }
  ];
  
  const derivatives = [
    { titel: "USDⓈ-M Futures", desc: "perpetual or Quarterly Contracts settled in USDT or BUSD", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "COIN-M Futures", desc: "Perpetual or Quarterly Contarcts settled in Cryptocurrency", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Optios", desc: " Buy And Sell European style Options", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Leveragged Tokens", desc: "Enjoy increase leverage without risk of liquidation", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Laderboard", desc: "Exclusive ranking for Binance traders, follow top traders strategies", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Binance Future Overview", desc: "view our full range of crypto-derivative instrument", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Futeres Markets", desc: "View trends and opportunities in the futures Markets before trading", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Responsible Trading", desc: "Learn how you could practice responsible trading with Binance Futures", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Blog", desc: "Expand your knowledge and get the lastest insights in Derivatives Trading", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "VIP Portal", desc:"VIP Exclusive, Tailor-made Institutional Grade Service", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
  ];
  
  const earn = [
    { titel: "Binance Earn", desc: "One-stop Investment Solution", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Simple Earn", desc: "Earn daily rewards on your idle tokens", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "BNB Vault", desc: "Earn Multi benefits with BNB", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    {titel:"Liquidity Farming", desc: "Add liquidity and earn double", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    {titel:"Binance Pool", desc: "Mine more rewards by connecting to the pool ", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Range Bound", desc: "Earn high rewards when the market moves sideways", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Launchpad", desc: "Token Launch Platform", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Defi Staking", desc: "Easy Access to Defi Opportunities", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Dual Invesment", desc: "Commit your crypto holdings and enjoy high returns", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Auto Invest", desc: "Accumulate crypto on autopilot", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    {titel:"ETH Staking", desc: "One click staking, reward paid daily", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
  ];
  
  const finance = [
    { titel: "Binance Card", desc: "Get up to 8% cashback when you spend at 90M merchants worldwide", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Binance Loans", desc: "Get an instant loan secured by crypto assets", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Binance Pay", desc: "Send, recieve and spend crypto with 0 fees", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Binance Gift Card", desc: "Customizeable crypto gift card", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
  ];
  
  const institutional = [
    { titel: "Institutional Home", desc: "Premium digital assets solutuin for institutional", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Assets Management Solution", desc: "Discover various assets management solution", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Custody", desc: "Secure digital assets with lending infrastracture", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "APIs", desc: "Unlimited oppertunities with one key", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Execution & OTC Service", desc: "Execution & OTC Service", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Link", desc: "One-stop station made for VIP institutions", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "VIP Portal", desc: "Get up to 8% cashback when you spend at 90M merchants worldwide", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "VIP Loan", desc: "Bespoke institutional loan with wide coverage", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Historical Market Data", desc: "Your all-in-one trading data repository", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
    { titel: "Capital Connect", desc: "Connecting investors and investment managers", iconFirst: <TargetFinance />, iconArrow: <AiOutlineArrowRight className={styles.arrowright} /> },
  ];
  const renderDropDown_4_8 = (array) => {
    return array?.map((row, i) => {
      if (i >= 4 && i < 8) {
        return (
          <li className={styles.submenu_li} key={row.titel}><Link href="/">{row.iconFirst}
            <div className={styles.submenu_li_content}>
              <div className={styles.submenu_li_content_title}>{row.titel}</div>
              <div className={styles.submenu_li_content_desc}>{row.desc}</div>
            </div>{row.iconArrow}</Link>
          </li>);
      }
    });
  }
  
  const renderDropDown = (array) => {
    return array?.map((row, i) => {
      if (i < 4) {
        return (
          <li className={styles.submenu_li} key={row.titel}><Link href="/">{row.iconFirst}
            <div className={styles.submenu_li_content}>
              <div className={styles.submenu_li_content_title}>{row.titel}</div>
              <div className={styles.submenu_li_content_desc}>{row.desc}</div>
            </div>{row.iconArrow}</Link>
          </li>
        );
      }
    });
  }
  
  const renderDropDown_0_5 = (array) => {
    return array?.map((row, i) => {
      if (i < 5) {
        return (
          <li className={styles.submenu_li} key={row.titel}><Link href="/">{row.iconFirst}
            <div className={styles.submenu_li_content}>
              <div className={styles.submenu_li_content_title}>{row.titel}</div>
              <div className={styles.submenu_li_content_desc}>{row.desc}</div>
            </div>{row.iconArrow}</Link>
          </li>);
      }
    });
  }
  const renderDropDown_5_10 = (array) => {
    return array?.map((row, i) => {
      if (i >= 5 && i < 10) {
        return (
          <li className={styles.submenu_li} key={row.titel}><Link href="/">{row.iconFirst}
            <div className={styles.submenu_li_content}>
              <div className={styles.submenu_li_content_title}>{row.titel}</div>
              <div className={styles.submenu_li_content_desc}>{row.desc}</div>
            </div>{row.iconArrow}</Link>
          </li>);
      }
    });
  }
  
  const renderDropDown_0_6 = (array) => {
    return array?.map((row, i) => {
      if (i < 6) {
        return (
          <li className={styles.submenu_li} key={row.titel}><Link href="/">{row.iconFirst}
            <div className={styles.submenu_li_content}>
              <div className={styles.submenu_li_content_title}>{row.titel}</div>
              <div className={styles.submenu_li_content_desc}>{row.desc}</div>
            </div>{row.iconArrow}</Link>
          </li>);
      }
    });
  }
  const renderDropDown_6_12 = (array) => {
    return array?.map((row, i) => {
      if (i >= 6 && i < 12) {
        return (
          <li className={styles.submenu_li} key={row.titel}><Link href="/">{row.iconFirst}
            <div className={styles.submenu_li_content}>
              <div className={styles.submenu_li_content_title}>{row.titel}</div>
              <div className={styles.submenu_li_content_desc}>{row.desc}</div>
            </div>{row.iconArrow}</Link>
          </li>);
      }
    });
  }
const NavBar = () => {
    return (
      <div className={styles.nav_main}>
        <LeftNav derivatives={derivatives}
          trade={trade} buyCrypto={buyCrypto} markets={markets}
          finance={finance} institutional={institutional} earn={earn}
          renderDropDown_4_8={renderDropDown_4_8} renderDropDown={renderDropDown} renderDropDown_0_5={renderDropDown_0_5}
          renderDropDown_5_10={renderDropDown_5_10} renderDropDown_0_6={renderDropDown_0_6} renderDropDown_6_12={renderDropDown_6_12}
        />
        <RightNav derivatives={derivatives}
          trade={trade} buyCrypto={buyCrypto} markets={markets}
          finance={finance} institutional={institutional} earn={earn}
        />
      </div>
    );
}

export default NavBar;