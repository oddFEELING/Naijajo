import '../styles/globals.scss';
import Image from 'next/image';
import ErrorImage from '../public/screen_error_img.svg';
import useResize from '../hooks/useResize';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from '../redux_features/userReducer';

const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

function MyApp({ Component, pageProps }) {
  //-->  assign mobile screen state
  let Mobile = useResize();
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={Store}>
      {Mobile ? (
        <main className='error__div'>
          {/* ----- error screen for mobiles ----- */}
          <h1 className='error__txt'>
            Please view site on a larger screen (Desktop)
          </h1>
          <Image src={ErrorImage} alt='' width={500} height={300} />
        </main>
      ) : (
        getLayout(<Component {...pageProps} />)
      )}
    </Provider>
  );
}

export default MyApp;
