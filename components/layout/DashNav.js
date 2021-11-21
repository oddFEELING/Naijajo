import React, { useState } from 'react';
import Image from 'next/image';
import router, { useRouter } from 'next/router';
import DashIcon from '../../assets/icon/dash_icon.svg';
import AjoIcon from '../../assets/icon/ajo_icon.svg';
import PayIcon from '../../assets/icon/payment_icon.svg';
import HistIcon from '../../assets/icon/history_icon.svg';
import SetIcon from '../../assets/icon/settings_icon.svg';
import LogIcon from '../../assets/icon/log_icon.svg';
import styles from '../../styles/components/dashnav.module.scss';

export default function DashNav() {
  //-->  set states for separate hover items
  const [DashState, setDashState] = useState(false);
  const [LogState, setLogState] = useState(false);
  const router = useRouter();

  //-->  nav options object
  const navOptions = [
    {
      title: `Dashboard`,
      icon: DashIcon,
      path: '/dashboard/home',
    },
    {
      title: `My Ajo`,
      icon: AjoIcon,
      path: '/dashboard/ajo',
    },
    {
      title: `Payment`,
      icon: PayIcon,
      path: '/dashboard/home',
    },
    {
      title: `History`,
      icon: HistIcon,
      path: '/dashboard/home',
    },
    {
      title: `Settings`,
      icon: SetIcon,
      path: '/dashboard/home',
    },
    {
      title: `Logout`,
      icon: LogIcon,
      path: '/dashboard/home',
    },
  ];

  return (
    <nav className={styles.nav__container}>
      {navOptions.map((data) => {
        let className;
        if (data.title === 'Dashboard') {
          className = `${styles.nav__link} ${styles.dash__link}`;
        } else if (data.title === 'Logout') {
          className = `${styles.nav__link} ${styles.log__link} `;
        } else {
          className = `${styles.nav__link} `;
        }
        return (
          <div className={styles.nav__item} key={data.title}>
            <div className={styles.nav__icon}>
              <Image src={data.icon} alt='' />
            </div>
            <p className={className} onClick={() => router.replace(data.path)}>
              {data.title}
            </p>
          </div>
        );
      })}

      <footer>
        <h3 className={styles.foot__txt}>NaijAjo</h3>
      </footer>
    </nav>
  );
}
