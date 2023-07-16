import Image from 'next/image';
import styles from './page.module.css';
import NavBar from '@/Layouts/NavBar/NavBar';
import MarketingRaw from '@/Layouts/MarketingRaw/MarketingRaw';

export default function Home() {
  return (
    <>
      <NavBar />
      <MarketingRaw />
    </>
  );
}
