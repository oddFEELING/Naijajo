import React, { useEffect } from 'react';
import Head from 'next/head';
import Dash from '../../components/layout/Dash';

export default function ajo() {
  useEffect(() => {}, []);
  return (
    <div>
      <Head>
        <title>Naijajo-My-Ajo</title>
      </Head>

      <main>
        <h1>Dashboard my Ajo</h1>
      </main>
    </div>
  );
}

ajo.getLayout = (page) => {
  return (
    <Dash>
      <>{page}</>
    </Dash>
  );
};
