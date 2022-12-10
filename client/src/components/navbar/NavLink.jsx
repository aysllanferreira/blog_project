import React from 'react';
import PropTypes from 'prop-types';

function NavLink({ item }) {
  return (
    <li key={item.name} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
      <a href={item.link}>
        {
      item.name
    }
      </a>
    </li>
  );
}

NavLink.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavLink;
