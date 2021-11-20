import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeroImage from '../assets/images/home_bg_img.svg';
import LogoImage from '../assets/images/logo_img.svg';
import styles from '../styles/landing.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NaijAjo-Home</title>
        <meta name='description' content='Naijajo main webApp' />
        <link rel='icon' href='/favicon.svg' />
      </Head>

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
    </div>
  );
}
