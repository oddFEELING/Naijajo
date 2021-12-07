import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useRef,
  useReducer,
} from 'react';
import useLogin from '../hooks/useLogin';
import useSignup from '../hooks/useSignup';
import Head from 'next/head';
import Image from 'next/image';
import EyeOpen from '../assets/images/eye_open.svg';
import EyeClose from '../assets/images/eye_close.svg';
import LogoImage from '../public/favicon.svg';
import AuthImage from '../assets/images/auth_img.svg';
import styles from '../styles/auth.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useUser from '../hooks/useUser';
import router from 'next/router';
import { setuser } from '../redux_features/userReducer';

const passReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return {
        passType: state.passType,
        visibility: !state.visibility,
        icon: state.icon,
      };
    case 'show':
      return { passType: 'text', visibility: state.visibility, icon: EyeOpen };
    case 'hide':
      return {
        passType: 'password',
        visibility: state.visibility,
        icon: EyeClose,
      };
    default:
      return state;
  }
};

//--------------------------------------->  component start
const auth = () => {
  // redux tools
  const dispatch = useDispatch();
  const User = useSelector((state) => state.user.value);

  const formRef = useRef();
  const [Flip, setFlip] = useState('');
  const [Login, setLogin] = useState(true);

  //-->  initial password state
  const passInit = {
    passType: 'password',
    visibility: false,
    icon: EyeClose,
  };

  const [PassState, PassDispatch] = useReducer(passReducer, passInit);

  //--------------------------------------->

  async function handleAuth(event) {
    event.preventDefault();

    if (Login) {
      try {
        await useLogin(event)
          .then(async (res) => {
            if (res.status === 'ok') {
              const newUser = await useUser();
              dispatch(setuser({ ...newUser }));
              router.replace('/dashboard/welcome');
              return;
            }
            alert(res.status);
          })
          .catch((err) => console.log(`error logging in`));
      } catch (err) {
        console.log(`Error --> ${err}`);
      }
    } else {
      try {
        await useSignup(event).then(async (res) => {
          if (res.status === 'ok') {
            const newUser = await useUser();
            dispatch(setuser({ ...newUser }));
            router.push('/dashboard/welcome');
            return;
          }
          alert(res.status);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  useLayoutEffect(() => {
    formRef.current.addEventListener('submit', handleAuth);
    return () => {
      formRef.current.removeEventListener('submit', handleAuth);
    };
  }, [Login]);

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
    PassDispatch({ type: 'toggle' });
    console.warn(`field visibility changed`);
  };

  //-->  clear form fields upon state change
  useEffect(() => {
    formRef.current.reset();
  }, [Login]);

  //-->  effect to change password field state
  useEffect(() => {
    if (PassState.visibility === true) {
      PassDispatch({ type: 'show' });
    } else {
      PassDispatch({ type: 'hide' });
    }
  }, [PassState.visibility]);

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
              required
              title='Enter a valid emaul'
              placeholder='Email'
              className={styles.auth__field}
            />
            <div className={styles.password__input}>
              <input
                type={PassState.passType}
                required
                placeholder='Password'
                className={styles.auth__field}
              />
              <div className={styles.password__indicator}>
                <Image
                  src={PassState.icon}
                  alt=''
                  onClick={handlePassVisibility}
                />
              </div>
            </div>

            {/* ----- login button ----- */}
            <button type='submit' className={styles.submit__btn}>
              Login
            </button>

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
              required
              title='Enter a valid firstname'
              placeholder='Frstname'
              className={styles.auth__field}
            />
            <input
              type='text'
              required
              title='Enter a valid lastname'
              placeholder='Lastname'
              className={styles.auth__field}
            />
            <input
              type='email'
              placeholder='Email'
              required
              className={styles.auth__field}
            />
            <div className={styles.password__input}>
              <input
                type={PassState.passType}
                required
                title='SHould be more than 6 characters'
                placeholder='Password'
                min='6'
                className={styles.auth__field}
              />
              <div className={styles.password__indicator}>
                <Image
                  src={PassState.icon}
                  alt=''
                  onClick={handlePassVisibility}
                />
              </div>
            </div>

            {/* ----- sign up button ----- */}
            <button type='submit' className={styles.submit__btn}>
              Sign up
            </button>

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
