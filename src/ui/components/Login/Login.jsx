import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { storeActions } from '../../../store';
import './Login.scss';

export const Login = () => {
  const dispatch = useDispatch();

  const setUser = (userRole) => {
    dispatch(storeActions.setUser({ userRole }));
  };

  return (
    <section className="users">
      <h2 className="users__headling">OS system store</h2>
      <p className="users__text">Log as:</p>

      <div className="users__links">
        <NavLink
          className="users__link users__link--user"
          to="store"
          onClick={() => setUser('user')}
        >
          User
        </NavLink>

        <br />

        <NavLink
          className="users__link users__link--admin"
          to="store"
          onClick={() => setUser('admin')}
        >
          Admin
        </NavLink>
      </div>
    </section>
  );
};
