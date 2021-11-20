import '../styles/globals.scss';
import Image from 'next/image';
import ErrorImage from '../public/screen_error_img.svg';
import useResize from '../hooks/useResize';

function MyApp({ Component, pageProps }) {
  //-->  assign mobile screen state
  let Mobile = useResize();
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
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
    </>
  );
}

export default MyApp;
