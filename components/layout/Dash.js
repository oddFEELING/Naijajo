import React from 'react';
import Image from 'next/image';
import NavProfileNote from './NavProfileNote';
import LogoImage from '../../public/favicon.svg';
import styles from '../../styles/dashboard/dash.module.scss';
import DashNav from './DashNav';

export default function Dash({ children }) {
  //--------------------------------------->
  return (
    <div className={styles.container}>
      {/* ----- top bar section ----- */}
      <section className={`top__bar ${styles.new__top}`}>
        <Image src={LogoImage} alt='' />
        <h3>oddSPACE</h3>
      </section>

      {/* ----- main page items ----- */}
      <section className={styles.page__content}>
        {/* ----- navBar container ----- */}
        <aside className={styles.nav__section_container}>
          <NavProfileNote />
          <DashNav />
        </aside>

        {/* ----- main content container ----- */}
        <main>{children}</main>

        {/* ----- infotainment section ----- */}
        <section className={styles.left__side_container}>
          {/* ----- icons section ----- */}
          {/* ----- report section ----- */}
          {/* ----- profile section ----- */}
        </section>
      </section>
    </div>
  );
}
