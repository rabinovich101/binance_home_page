import Image from 'next/image';
import styles from './page.module.css';
import NavBar from '@/Layouts/NavBar/NavBar';
import MarketingRaw from '@/Layouts/MarketingRaw/MarketingRaw';
import Header from '@/Layouts/Header/Header';
import News from '@/Layouts/News/News';
export default function Home() {
  return (
    <>
      <NavBar />
      <MarketingRaw />
      <Header />
      <News/>
    </>
  );
}
