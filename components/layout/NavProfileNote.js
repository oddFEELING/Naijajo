import React from 'react';
import ProfileImg from '../../public/profile_img.jpg';
import Image from 'next/image';
import styles from '../../styles/components/NavProfileNote.module.scss';

export default function NavProfileNote() {
  return (
    <div className={styles.container}>
      {/* ----- profile picture image ----- */}
      <div className={styles.image__container}>
        <div className={styles.overlay} />
        <Image src={ProfileImg} alt='' layout='intrinsic' />
      </div>
      {/* ----- name ----- */}
      <h2 className={styles.name__txt}>Hello, William</h2>
      {/* ----- email ----- */}
      <h3 className={styles.mail__txt}>williejo@gmail.com</h3>
    </div>
  );
}
