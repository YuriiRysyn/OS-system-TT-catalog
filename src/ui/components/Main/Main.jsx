import React from 'react';

import { Route } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Catalog } from '../Catalog/Catalog';
import { AddProduct } from '../AddProduct/AddProduct';
import { Presentation } from '../Presentation/Presentation';
import { Footer } from '../Footer/Footer';

import './Main.scss';

export const Main = () => (
  <>
    <Header />
    <Route path="/store" exact component={Presentation} />
    <Route path="/store/catalog" component={Catalog} />
    <Route path="/store/add_product" component={AddProduct} />
    <Footer />
  </>
);
