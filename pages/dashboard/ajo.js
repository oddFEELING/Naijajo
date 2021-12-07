import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import coll from '../../assets/images/cursor_hover.svg';
import Dash from '../../components/layout/Dash';

export default function ajo() {
  const imageRef = useRef();
  const [Preview, setPreview] = useState(coll);
  return (
    <div>
      <Head>
        <title>Naijajo-My-Ajo</title>
      </Head>

      <main>
        <h1>Dashboard my Ajo</h1>
        <input type='file' placeholder='jjj' ref={imageRef} />
        <Image src={Preview} height='300' width='300' layout='responsive' />
        <button onClick={() => setPreview(imageRef.current.value)}>
          Click me
        </button>
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
