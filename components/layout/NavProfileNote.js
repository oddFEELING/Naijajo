import React from 'react';
import ProfileImg from '../../public/profile_img.jpg';
import Image from 'next/image';
import styles from '../../styles/components/NavProfileNote.module.scss';
import { useSelector } from 'react-redux';

export default function NavProfileNote() {
  const currentUser = useSelector((state) => state.user.value);
  return (
    <div className={styles.container}>
      {/* ----- profile picture image ----- */}
      <div className={styles.image__container}>
        <div className={styles.overlay} />
        <Image src={ProfileImg} alt='' layout='intrinsic' />
      </div>
      {/* ----- name ----- */}
      <h2 className={styles.name__txt}>Hello, {currentUser.firstname} </h2>
      {/* ----- email ----- */}
      <h3 className={styles.mail__txt}>{currentUser.email}</h3>
    </div>
  );
}
