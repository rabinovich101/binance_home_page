import Image from 'next/image';
import styles from './page.module.css';
import NavBar from '@/Layouts/NavBar/NavBar';
import MarketingRaw from '@/Layouts/MarketingRaw/MarketingRaw';
import Header from '@/Layouts/Header/Header';
import News from '@/Layouts/News/News';
import PopularCurrencies from '@/Layouts/PopularCurrencies/PopularCurrencies';
import TradeFree from '@/Layouts/TradeFree/TradeFree';
import CryptoPortfolio from '@/Layouts/CryptoPortfolio/CryptoPortfolio';
import EarnApr from '@/Layouts/EarnApr/EarnApr';
import Support from '@/Layouts/Support/Support';
import Footer from '@/Layouts/Footer/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <MarketingRaw />
      <Header />
      <News />
      <PopularCurrencies />
      <TradeFree />
      <CryptoPortfolio />
      <EarnApr />
      <Support />
      <Footer/>
    </>
  );
}
