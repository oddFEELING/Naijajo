import React from 'react';
import Image from 'next/image';
import ReportIcon from '../../assets/icon/report_icon.svg';
import SentIcon from '../../assets/icon/sent_icon.svg';
import ReceivedIcon from '../../assets/icon/received_icon.svg';
import BalanceIcon from '../../assets/icon/balance_icon.svg';
import styles from '../../styles/components/reportCard.module.scss';

export default function ReportCard() {
  return (
    <div className={styles.container}>
      {/* ----- card title ----- */}
      <div className={styles.report__title_div}>
        <div className={styles.report__icon}>
          <Image src={ReportIcon} alt='' />
        </div>
        <h2 className={styles.report__title}>Monthly report</h2>
      </div>

      {/* ----- top report ----- */}
      <div className={styles.report__section}>
        {/* ----- sent section ----- */}
        <div className={styles.single__trans}>
          <div className={styles.report__head}>
            <p>Sent</p>
            <Image src={SentIcon} alt='' height='18' width='20' />
          </div>
          <h3 className={styles.sent__amount}>#10,000</h3>
        </div>

        {/* ----- received section ----- */}
        <div className={styles.single__trans}>
          <div className={styles.report__head}>
            <p>Received</p>
            <Image src={ReceivedIcon} alt='' height='18' width='20' />
          </div>
          <h3 className={styles.received__amount}>#25,000</h3>
        </div>
      </div>

      {/* ----- main balance section ----- */}
      <div className={styles.balance__section}>
        <div className={styles.balance__head}>
          <p>Balance</p>
          <Image src={BalanceIcon} alt='' height='18' width='20' />
        </div>
        <h3 className={styles.balance__amount}>#15,000</h3>
      </div>

      {/* ----- transaction button ----- */}
      <button className={styles.main__btn}>View Transactions</button>
    </div>
  );
}
