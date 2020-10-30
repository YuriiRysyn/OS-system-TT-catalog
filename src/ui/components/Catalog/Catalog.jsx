import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeActions } from '../../../store';
import './Catalog.scss';

export const Catalog = () => {
  const userRole = useSelector((state) => state.userRole);
  const goods = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  return (
    <section className="catalog">
      <ul className="catalog__list">
        {goods.map((item) => (
          <li className="catalog__item" key={item.id}>
            <img className="catalog__item-img" src={item.imgUrl} alt="apple product" />
            <h3 className="catalog__item-name">{item.title}</h3>
            <span className="catalog__item-price">{item.price} $</span>
            <div className="catalog__item-descripton-wraper">
              <p className="catalog__item-descripton">{item.description}</p>
            </div>
            {userRole === 'admin' && (
              <button
                className="catalog__item-delete-btn"
                onClick={() => dispatch(storeActions.deleteGood({ goodId: item.id }))}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
