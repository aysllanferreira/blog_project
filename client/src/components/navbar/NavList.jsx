import React from 'react';
import NavLink from './NavLink';
import { DUMMY_NAVBAR_NOLOGIN } from '../../constants/navbar';

function NavList() {
  return (
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {DUMMY_NAVBAR_NOLOGIN.map((item) => (
        <NavLink key={item.name} item={item} />
      ))}
    </ul>
  );
}

export default NavList;
