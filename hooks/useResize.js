import { useEffect, useState } from 'react';

const useResize = () => {
  //-->  set initial screen size to null
  const [Screen, setScreen] = useState(null);

  //-->  effect hook to listen for screen size changes
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1200) {
        setScreen(true);
        console.warn(`invalid screen size at ${window.innerWidth}px`);
      } else {
        setScreen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    //-->  cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  //-->  return state in boolean
  return Screen;
};

export default useResize;
