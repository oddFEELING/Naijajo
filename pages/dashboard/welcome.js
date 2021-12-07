import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default function welcome() {
  const router = useRouter();
  let User = useSelector((state) => state.user.value);

  //-->   assign value to User
  useEffect(() => {
    setTimeout(() => {
      router.replace('/dashboard/home');
    }, 1500);
  }, [User]);

  return (
    <div className='error__div'>
      <h1 className='welcome__txt'>Hey-0, {User.firstname}!</h1>
    </div>
  );
}
