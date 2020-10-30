import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './AddProduct.scss';
import { storeActions } from '../../../store';

const initFormState = {
  title: '',
  description: '',
  imgUrl: '',
  price: '',
};

export const AddProduct = () => {
  const userRole = useSelector((state) => state.userRole);
  const dispatch = useDispatch();

  const [newGood, setNewGood] = useState(initFormState);

  const changeHandler = (inputField) => {
    setNewGood(() => ({
      ...newGood,
      [inputField.name]: inputField.value,
    }));
  };

  const addNewProduct = (event) => {
    event.preventDefault();

    if (newGood.imgUrl.trim() === '') {
      newGood.imgUrl = 'https://eimg.pravda.com/images/doc/6/7/6702d1f-apple.png';
    }

    for (const key in newGood) {
      if (newGood[key].trim() === '') {
        return;
      }
    }

    dispatch(storeActions.addGood(newGood));
    setNewGood(initFormState);
  };

  return (
    <section className="add-new-product">
      {userRole === 'admin' ? (
          <form className="add-new-product__form" onSubmit={(event) => addNewProduct(event)}>
          <h2 className="add-new-product__headling">
            Add new product
          </h2>
          <input
            name="title"
            placeholder="Title"
            value={newGood.title}
            className="add-new-product__input add-new-product__input--title"
            onChange={event => changeHandler(event.target)}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newGood.description}
            className="add-new-product__input add-new-product__input--description"
            onChange={event => changeHandler(event.target)}
            required
          />

          <input
            type="number"
            min='0'
            name="price"
            placeholder="Price"
            value={newGood.price}
            className="add-new-product__input add-new-product__input--price"
            onChange={event => changeHandler(event.target)}
            required
          />

          <input
            type="url"
            name="imgUrl"
            placeholder="set image adress(url)"
            value={newGood.imgUrl}
            className="add-new-product__input add-new-product__input--img-url"
            onChange={event => changeHandler(event.target)}
          />

          <button
            type="submit"
            className="add-new-product__submit-btn"
          >
            Add product
          </button>
        </form>
      ) : (
        <>
          <h2 className="add-new-product__error-headling">
            Sorry, but you can't add new product. You need to enter as Administrator.
            <br/>
            You can do it here:
          </h2>
          <button className="add-new-product__log-out-btn">
            <NavLink to="" className="add-new-product__log-out-link" >
              Log out
            </NavLink>
          </button>
        </>
      )}
    </section>
  );
};
