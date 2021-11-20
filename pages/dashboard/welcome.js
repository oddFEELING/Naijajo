import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function welcome() {
  const router = useRouter();
  const [User, setUser] = useState(null);

  setTimeout(() => {
    router.replace('/dashboard/home');
  }, 1500);
  //-->   assign value to User
  useEffect(() => {
    let user = localStorage.getItem('UserDetails');
    setUser(user);
    console.log(User);
  }, [User]);
  return (
    <div className='error__div'>
      <h1 className='welcome__txt'>Hey-0, {User}!</h1>
    </div>
  );
}
