import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import EyeOpen from '../assets/images/eye_open.svg';
import EyeClose from '../assets/images/eye_close.svg';
import LogoImage from '../public/favicon.svg';
import AuthImage from '../assets/images/auth_img.svg';
import styles from '../styles/auth.module.scss';

const auth = () => {
  const formRef = useRef();
  const [Flip, setFlip] = useState('');
  const [PassType, setPassType] = useState(`password`);
  const [PassVisible, setPassVisible] = useState(false);
  const [PassState, setPassState] = useState(EyeClose);
  const [Login, setLogin] = useState(true);

  //--------------------------------------->  handle switch
  const handleAuthState = () => {
    setFlip(styles.flip__card);

    setTimeout(() => {
      setLogin(!Login);
    }, 600);

    setTimeout(() => {
      setFlip('');
    }, 1200);
  };

  //--------------------------------------->  handle password field
  const handlePassVisibility = () => {
    setPassVisible(!PassVisible);
    console.log(`field visibility changed`);
  };

  //-->  effect to change auth state
  useEffect(() => {
    console.log(`User has account? ${Login}`);
    formRef.current.reset();
  }, [Login]);

  //-->  effect to change password field state
  useEffect(() => {
    if (PassVisible === true) {
      setPassState(EyeOpen);
      setPassType('text');
      console.log(`eye opened`);
    } else {
      setPassState(EyeClose);
      console.log(`eye closed`);
      setPassType('password');
    }
  }, [PassVisible]);

  return (
    <div>
      <Head>
        <title>Naijajo-Auth</title>
        <meta name='description' content='Naijajo main webApp' />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <main className={styles.container}>
        {/* ----- top bar section ----- */}
        <section className='top__bar'>
          <Image src={LogoImage} alt='' />
          <h3>oddSPACE</h3>
        </section>

        {/* ----- background image  ----- */}
        <section className={styles.auth__img_div}>
          <div className={styles.auth__img}>
            <Image src={AuthImage} alt='' layout='intrinsic' />
          </div>
        </section>

        {/* ----- main content  ----- */}
        {Login ? (
          <form className={`${styles.auth__form} ${Flip}`} ref={formRef}>
            {/* ----- login form ----- */}
            <h1>Login</h1>
            <input
              type='email'
              placeholder='Email'
              className={styles.auth__field}
            />
            <div className={styles.password__input}>
              <input
                type={PassType}
                placeholder='Password'
                className={styles.auth__field}
              />
              <div className={styles.password__indicator}>
                <Image src={PassState} alt='' onClick={handlePassVisibility} />
              </div>
            </div>

            {/* ----- login button ----- */}
            <Link href='/dashboard/welcome'>
              <button type='button' className={styles.submit__btn}>
                Login
              </button>
            </Link>

            {/* ----- social media div ----- */}
            <div className={styles.social__btn_div}>
              <button type='button' className={styles.google__btn}>
                Login with Google
              </button>
              <button type='button' className={styles.facebook__btn}>
                Login with Facebook
              </button>
            </div>

            {/* ----- lower switch text ----- */}
            <span className={styles.auth__switch_div}>
              <p>Don't have an account? </p>
              <p className={styles.switch__btn} onClick={handleAuthState}>
                Sign up.
              </p>
            </span>
          </form>
        ) : (
          <form className={`${styles.auth__form} ${Flip}`} ref={formRef}>
            <h1>SIgn up</h1>
            <input
              type='text'
              placeholder='Frstname'
              className={styles.auth__field}
            />
            <input
              type='text'
              placeholder='Lastname'
              className={styles.auth__field}
            />
            <input
              type='email'
              placeholder='Email'
              className={styles.auth__field}
            />
            <div className={styles.password__input}>
              <input
                type={PassType}
                placeholder='Password'
                className={styles.auth__field}
              />
              <div className={styles.password__indicator}>
                <Image src={PassState} alt='' onClick={handlePassVisibility} />
              </div>
            </div>

            {/* ----- sign up button ----- */}
            <Link href='/dashboard/welcome'>
              <button type='button' className={styles.submit__btn}>
                Sign up
              </button>
            </Link>

            {/* ----- social media div ----- */}
            <div className={styles.social__btn_div}>
              <button type='button' className={styles.google__btn}>
                Login with Google
              </button>
              <button type='button' className={styles.facebook__btn}>
                Login with Facebook
              </button>
            </div>

            {/* ----- lower switch text ----- */}
            <span className={styles.auth__switch_div}>
              <p>Already have an account? </p>
              <p className={styles.switch__btn} onClick={handleAuthState}>
                Login.
              </p>
            </span>
          </form>
        )}
      </main>
    </div>
  );
};

export default auth;
