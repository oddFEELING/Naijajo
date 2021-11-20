import React from 'react';
import Image from 'next/image';

export default function DashNav() {
  //-->  nav options object
  const navOptions = [
    {
      title: ``,
      icon: ``,
    },
  ];
  return (
    <nav className=''>
      {navOptions.map((data) => {
        return <h1>new item</h1>;
      })}
    </nav>
  );
}
