import Head from 'next/head';
import Image from 'next/image';
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

        {/* ----- ### CSS FONTS ### ----- */}
        {/* ----- # USAGE: font-family: 'Dancing Script', cursive; ----- */}
        {/* ----- # USAGE: font-family: 'Graduate', cursive; ----- */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Graduate&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      {Mobile ? (
        <main className={styles.error__div}>
          <h1 className={styles.error__txt}>
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
          <section className={styles.top__bar}>
            <div className={styles.logo__img}>
              <Image src={LogoImage} alt='' fill />
            </div>
            <h3>oddSPACE</h3>
          </section>

          {/* ----- nav section ----- */}
          <nav className={styles.top__nav}>
            <a href='/'>FAQ</a>
            <a href='/'>About us</a>
            <a href='/'>How it works</a>
          </nav>

          {/* ----- content section ----- */}
          <span>
            <h1 className={styles.hero__text}>NaijAjo</h1>
            <h3>
              Collaborations made <br />
              butery smooth...
            </h3>
            <button className={styles.newbtn}>Get started</button>
          </span>
        </main>
      )}
    </div>
  );
}
