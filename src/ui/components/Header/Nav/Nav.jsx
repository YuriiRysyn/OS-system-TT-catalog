import React from 'react';
import PropTypes from 'prop-types';

import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import './Nav.scss';

export const Nav = ({ openedNav }) => {
  const { pathname } = useLocation();

  return (
    <nav className={classNames('header__nav', 'nav', { 'nav--active': openedNav })}>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className={classNames('nav__link', { 'nav__link--active': pathname === '/store' })}
            to="/store"
          >
            Home
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={classNames('nav__link', {
              'nav__link--active': pathname === '/store/catalog',
            })}
            to="/store/catalog"
          >
            Catalog
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={classNames('nav__link', {
              'nav__link--active': pathname === '/store/add_product',
            })}
            to="/store/add_product"
          >
            Add product
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className={'nav__link'} to="/">
            Log out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  openedNav: PropTypes.bool.isRequired,
};
