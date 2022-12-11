import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { DUMMY_NAVBAR_NOLOGIN, DUMMY_NAVBAR_LOGIN } from '../../constants/navbar';

function NavList() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('token') !== null) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);
  return (
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {isLogged ? DUMMY_NAVBAR_LOGIN.map((link) => (
        <NavLink
          key={link.name}
          item={link}
        />
      )) : DUMMY_NAVBAR_NOLOGIN.map((link) => (
        <NavLink
          key={link.name}
          item={link}
        />
      ))}
    </ul>
  );
}

export default NavList;
