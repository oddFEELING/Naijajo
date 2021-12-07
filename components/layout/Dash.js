import React from 'react';
import Image from 'next/image';
import NavProfileNote from './NavProfileNote';
import NotIcon from '../../assets/icon/notification_icon.svg';
import MessageIcon from '../../assets/icon/message_icon.svg';
import BlogIcon from '../../assets/icon/blog_icon.svg';
import HelpIcon from '../../assets/icon/help_icon.svg';
import LogoImage from '../../public/favicon.svg';
import styles from '../../styles/dashboard/dash.module.scss';
import DashNav from './DashNav';
import ReportCard from './ReportCard';
import ProfileCard from './ProfileCard';

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
        <div className={styles.middle__section}>
          <h1 className={styles.dash__title}>◾Dashboard</h1>
          <main>{children}</main>
        </div>

        {/* ----- infotainment section ----- */}
        <section className={styles.left__side_container}>
          {/* ----- icons section ----- */}
          <div className={styles.left__icon_container}>
            {/* ----- notifications ucon ----- */}
            <div className={styles.left__icon}>
              <Image src={NotIcon} alt='' />
            </div>

            {/* ----- message icon ----- */}
            <div className={styles.left__icon}>
              <Image src={MessageIcon} alt='' />
            </div>

            {/* ----- blog icon ----- */}
            <div className={styles.left__icon}>
              <Image src={BlogIcon} alt='' />
            </div>

            {/* ----- help icon ----- */}
            <div className={styles.left__icon}>
              <Image src={HelpIcon} alt='' />
            </div>
          </div>
          <div className={styles.left__main_content}>
            {/* ----- report section ----- */}
            <ReportCard />
            {/* ----- profile section ----- */}
            <ProfileCard />
          </div>
        </section>
      </section>
    </div>
  );
}
