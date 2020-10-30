import React, { useState, useEffect } from 'react';

import { Nav } from './Nav/Nav';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import './Header.scss';

export const Header = () => {
  const [openedNav, setOpenedNav] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('openedNav'))) {
      setOpenedNav(JSON.parse(localStorage.getItem('openedNav')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('openedNav', JSON.stringify(openedNav));
  }, [openedNav]);

  return (
    <section className="header">
      <NavLink className="header__logo" to="/store" />
      <Nav openedNav={openedNav} />
      <button
        className={classNames('header__btn', { 'header__btn--active': openedNav })}
        onClick={() => setOpenedNav((prev) => !prev)}
      />
    </section>
  );
};
