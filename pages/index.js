import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import useResize from '../hooks/useResize';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const Mobile = useResize();

  return (
    <div>
      <Head>
        <title>NaijAjo</title>
        <meta name='description' content='Naijajo main webApp' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {Mobile ? (
        <div className={styles.error__div}>
          <h1 className={styles.error__txt}>
            Please view site on a larger screen (Desktop)
          </h1>
          <Image src='/screen_error_img.svg' alt='' width='500' height='300' />
        </div>
      ) : (
        <>
          <section className={styles.top__bar}></section>
          <nav className={styles.top__nav}></nav>
        </>
      )}
    </div>
  );
}
