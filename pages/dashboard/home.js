import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/dashboard/home.module.scss';
import Dash from '../../components/layout/Dash';
import Dash_title from '../../components/dashComponents/dashboard/dash_title';
import Dash_featured from '../../components/dashComponents/dashboard/dash_featured';
import Dash_updates from '../../components/dashComponents/dashboard/dash_updates';

export default function Home() {
  useEffect(() => {}, []);
  return (
    <div>
      <Head>
        <title>Naijajo-Dashboard</title>
      </Head>

      <main className={styles.container}>
        <Dash_title />
        <Dash_featured />
        <Dash_updates />
      </main>
    </div>
  );
}

Home.getLayout = (page) => {
  return (
    <Dash>
      <>{page}</>
    </Dash>
  );
};
