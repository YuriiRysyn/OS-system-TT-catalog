import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Login } from './Login/Login';
import { Main } from './Main/Main';
import { storeActions, store } from '../../store';
import './App.scss';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const lsState = localStorage.getItem('state');
    if (lsState) dispatch(storeActions.setState(JSON.parse(lsState)));

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('state', JSON.stringify(store.getState()));
    });
  }, [dispatch]);

  return (
    <>
      <Route path="/" exact component={Login}/>
      <Route path="/store" component={Main} />
    </>
  );
};
