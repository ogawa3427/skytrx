import Link from 'next/link';
import React from 'react'; // Reactをインポートします
import styles from '/pages/styles/Nbar.module.css'; // CSSモジュールをインポートします

const Nbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>SkytrX</div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/papers" className={styles.link}>Papers</Link>
        <Link href="/prof" className={styles.link}>Prof.</Link>
        <Link href="/funding" className={styles.link}>Funding</Link>
      </div>
    </nav>
  );
};

export default Nbar;