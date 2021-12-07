import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/dashboard/home.module.scss';
import Dash from '../../components/layout/Dash';
import Dash_featured from '../../components/dashComponents/dashboard/dash_featured';
import Dash_updates from '../../components/dashComponents/dashboard/dash_updates';
import Dash_ajo from '../../components/dashComponents/dashboard/dash_ajo';
import Dash_message from '../../components/dashComponents/dashboard/dash_message';

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Naijajo-Dashboard</title>
      </Head>

      <main className={styles.container}>
        <Dash_featured />
        <Dash_updates />
        <Dash_ajo />
        <Dash_message />
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
