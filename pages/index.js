import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ErrorImage from '../public/screen_error_img.svg';
import HeroImage from '../assets/images/home_bg_img.svg';
import LogoImage from '../assets/images/logo_img.svg';
import useResize from '../hooks/useResize';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const Mobile = useResize();

  return (
    <div>
      <Head>
        <title>NaijAjo</title>
        <meta name='description' content='Naijajo main webApp' />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      {Mobile ? (
        <main className='error__div'>
          {/* ----- error screen for mobiles ----- */}
          <h1 className='error__txt'>
            Please view site on a larger screen (Desktop)
          </h1>
          <Image src={ErrorImage} alt='' width={500} height={300} />
        </main>
      ) : (
        <main className={styles.container}>
          {/* ----- absolute background ----- */}
          <section className={styles.hero__img}>
            <Image src={HeroImage} alt='' layout='fill' />
          </section>

          {/* ----- top bar section ----- */}
          <section className='top__bar'>
            <Image src={LogoImage} alt='' />
            <h3>oddSPACE</h3>
          </section>

          {/* ----- nav section ----- */}
          <nav className={styles.top__nav}>
            <Link href='/'>
              <a>FAQ</a>
            </Link>
            <Link href='/'>
              <a>About us</a>
            </Link>
            <Link href='/'>
              <a>How it works</a>
            </Link>
          </nav>

          {/* ----- content section ----- */}
          <span className={styles.main__content}>
            <h1 className={styles.hero__txt}>NaijAjo</h1>
            <h3 className={styles.hero__desc}>
              Collaborations made <br />
              buttery smooth...
            </h3>
            <Link href='/auth'>
              <button className={styles.CTO__btn}>Get started</button>
            </Link>
          </span>
        </main>
      )}
    </div>
  );
}
