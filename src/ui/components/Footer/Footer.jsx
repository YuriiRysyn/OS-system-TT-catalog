import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeActions } from '../../../store';
import './Footer.scss';

export const Footer = () => {
  const userRole = useSelector((state) => state.userRole);
  const goods = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  const totalPrice = goods.reduce((sum, curItem) => sum + Number(curItem.price), 0);
  const averagePrice = totalPrice ? +(totalPrice / goods.length).toFixed(2) : 0;

  const deleteGoods = () => {
    dispatch(storeActions.deleteGoods());
  };

  return (
    <section className="footer">
      <div className="footer__content">
        <span className=" footer__item footer__number-of-goods">
          Total number of goods: {goods ? goods.length : 0}
        </span>
        <span className=" footer__item footer__total-price">Total price: {totalPrice}$</span>
        <span className=" footer__item footer__avarage-price">Average price: {averagePrice}$</span>
      </div>

      {userRole === 'admin' && (
        <button className="footer__delete-btn" onClick={deleteGoods}>
          Delete all goods
        </button>
      )}
    </section>
  );
};
